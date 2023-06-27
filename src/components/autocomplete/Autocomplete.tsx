import { ChangeEvent, FC } from 'react'
import usePlacesAutocomplete, { GeoArgs, getGeocode, getLatLng } from 'use-places-autocomplete'
import { useFormikContext } from 'formik'
import useOnclickOutside from 'react-cool-onclickoutside'
import { Input } from 'UI'
import { AutocompleteList } from './Autocomplete.styled'
import { AutocompleteListItem } from './autocopmlete-list-item'

interface AutocompleteProps {
  name: string
  label: string
  placeholder: string
}

const Autocomplete: FC<AutocompleteProps> = ({ name, label, placeholder }) => {
  const {
    ready,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ['address'],
      componentRestrictions: { country: 'UA' },
    },
    debounce: 400,
  })
  const { setFieldValue } = useFormikContext()
  const outsideRef = useOnclickOutside(() => clearSuggestions())

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => setValue(e.target.value)

  const handleSelect = ({ description }: GeoArgs) => {
    setValue(description, false)
    clearSuggestions()

    getGeocode({ address: description }).then((results) => {
      const { lat, lng } = getLatLng(results[0])
      setFieldValue('address.latitude', lat)
      setFieldValue('address.longitude', lng)
      setFieldValue(name, description)
    })
  }

  return (
    <div ref={outsideRef}>
      <Input
        label={label}
        name={name}
        onChange={handleInput}
        disabled={!ready}
        placeholder={placeholder}
      />
      {status === 'OK' && (
        <AutocompleteList>
          {data.map((suggestion) => (
            <AutocompleteListItem
              key={suggestion.place_id}
              suggestion={suggestion}
              onSelect={handleSelect}
            />
          ))}
        </AutocompleteList>
      )}
    </div>
  )
}

export default Autocomplete
