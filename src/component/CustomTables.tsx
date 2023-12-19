import { Stack } from '@mui/material'
import React from 'react'
import CustomTableHeader from './CustomTableHeader'
import CustomTableRow from './CustomTableRow'

const CustomTables = () => {
  return (
    <>
        <Stack>
            <CustomTableHeader />
            <Stack>
                <CustomTableRow />
            </Stack>
        </Stack>
    </>
  )
}

export default CustomTables