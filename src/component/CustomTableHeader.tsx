import { Stack, Typography } from '@mui/material'
import React from 'react'

const CustomTableHeader = () => {
  return (
    <>
        <Stack flexDirection='row' alignItems='center' px={4} py={2} sx={{ borderBottom: '1px solid #F2F4F7', borderTop: '1px solid #F2F4F7', minWidth: '1000px', boxSizing: 'content-box' }}>
            <Typography fontWeight='600' width='25%'>Name</Typography>
            <Typography fontWeight='600' width='30%'>Description</Typography>
            <Typography fontWeight='600' width='20%'>Type</Typography>
            <Typography fontWeight='600' width='20%'>Key</Typography>
            <Typography fontWeight='600' width='5%' >Action</Typography>
        </Stack>
    </>
  )
}

export default CustomTableHeader