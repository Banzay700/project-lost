import { StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionContent: {
    marginBottom: 8,
  },
  dishItem: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8,
  },
  dishImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  dishDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  dishTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  dishAmount: {
    fontSize: 14,
    marginBottom: 2,
  },
  dishPrice: {
    fontSize: 14,
  },
})

export default styles
