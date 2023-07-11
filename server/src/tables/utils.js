import { getTodayReservations } from '../reservation/utils.js'

export const transformArray = array => {
  const tablePlacement = []
  const groupedObjects = array.reduce((result, obj) => {
    const sector = obj.sector

    if (!result[sector]) result[sector] = []
    result[sector].push(obj)

    return result
  }, {})

  for (const sector in groupedObjects) {
    tablePlacement.push({ id: parseInt(sector), sector: groupedObjects[sector] })
  }

  return tablePlacement
}

export const prepareTablesData = (tables, reservations) => {
  const todayReservations = getTodayReservations(reservations)
  const transformedTables = transformArray(tables)

  return transformedTables.map(sector => {
    return {
      ...sector,
      sector: sector.sector.map(table => {
        const reservation = todayReservations.find(
          reservation => reservation.table.number === table.number,
        )
        if (reservation) {
          const { _id, ...rest } = table.toObject()

          return {
            ...rest,
            id: table.id,
            reservation: {
              id: reservation.id,
              date: reservation.date,
              time: reservation.time,
              persons: reservation.persons,
              clientName: reservation.clientName,
              phoneNumber: reservation.phoneNumber,
              status: reservation.status,
            },
          }
        } else {
          const { _id, ...rest } = table.toObject()

          return { ...rest, id: table.id }
        }
      }),
    }
  })
}
