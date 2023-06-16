import { FC } from 'react'
import { Page, Text, Document, Image, View } from '@react-pdf/renderer'
import { BillsType } from 'types/index'
import { spacesBetweenCapitalsLetters } from 'utils/spacesBetweenCapitalsLetters'
import styles from './pdfDoc.utils'

interface PDFDocProps {
  element: BillsType | undefined
}

export const PDFDoc: FC<PDFDocProps> = ({ element }) => {
  const orderType = spacesBetweenCapitalsLetters(element?.orderType)

  return (
    <Document>
      <Page key={element?.id} style={styles.body}>
        <Text style={styles.header}>Bills</Text>
        <Text style={styles.section}>Order Number: #{element?.orderNumber}</Text>
        <Text style={styles.section}>Order Type: {orderType}</Text>
        <Text style={styles.section}>Total Price: ${element?.totalPrice}</Text>
        {!!element?.tip && <Text style={styles.section}>Tip: {element?.tip}</Text>}
        {!!element?.paymentMethod && (
          <Text style={styles.section}>Payment Method: {element?.paymentMethod}</Text>
        )}
        {!!element?.email && <Text style={styles.section}>Email: {element?.email}</Text>}
        {!!element?.description && (
          <Text style={styles.section}>Description: {element?.description}</Text>
        )}
        <Text style={[styles.section, styles.sectionHeader]}>Dishes:</Text>
        {element?.dishes?.map((item) => (
          <View style={styles.dishItem} key={`${item.id}`}>
            <Image src={item.picture} style={styles.dishImage} />
            <View style={styles.dishDetails}>
              <Text style={styles.dishTitle}>{item.title}</Text>
              <Text style={styles.dishAmount}>Amount: {item.amount}</Text>
              <Text style={styles.dishPrice}>Price: ${item.price}</Text>
              <Text style={styles.dishPrice}>Dish Total Price: ${item.dishTotalPrice}</Text>
            </View>
          </View>
        ))}
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        />
      </Page>
    </Document>
  )
}

export default PDFDoc
