import { FC } from 'react'
import { GeoArgs, Suggestion } from 'use-places-autocomplete'
import { AutocompleteListItemSuggestion } from './AutocopmleteListItem.styled'

interface AutocompleteListItemProps {
  suggestion: Suggestion
  onSelect: ({ description }: GeoArgs) => void
}

const AutocompleteListItem: FC<AutocompleteListItemProps> = ({ suggestion, onSelect }) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { main_text, secondary_text } = suggestion.structured_formatting
  return (
    <AutocompleteListItemSuggestion onClick={() => onSelect(suggestion)}>
      {main_text}
      <small>{secondary_text}</small>
    </AutocompleteListItemSuggestion>
  )
}

export default AutocompleteListItem
