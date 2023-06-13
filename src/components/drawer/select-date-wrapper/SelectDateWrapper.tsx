import { FC, ReactNode } from 'react'
import { Box } from '@mui/material'
import { Form, Formik } from 'formik'

interface DrawerSelectDateProps {
  children: ReactNode
}

const SelectDateWrapper: FC<DrawerSelectDateProps> = ({ children }) => {
  return (
    <Box sx={{ p: '24px', boxShadow: '0px 2px 24px rgba(25, 25, 28, 0.08)' }}>
      <Formik initialValues={{ date: '' }} onSubmit={() => {}}>
        <Form>{children}</Form>
      </Formik>
    </Box>
  )
}

export default SelectDateWrapper
