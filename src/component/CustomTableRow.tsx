import { Stack, Typography } from '@mui/material'
import React from 'react'

const CustomTableRow = () => {
  return (
    <>
        <Stack flexDirection='row' alignItems='center' px={4} py={2} sx={{ borderBottom: '1px solid #F2F4F7', minWidth: '1000px' }}>
                {/* <Typography width='25%'>{
                    loading ?
                        <Skeleton width={Math.random() * 200 + 350} sx={{ fontSize: '1rem', marginInlineEnd: 2, maxWidth: 'calc(100% - 16px)' }} />
                        :
                        name
                }</Typography>
                <Typography width='30%'>{
                    loading ?
                        <Skeleton width={Math.random() * 100 + 100} sx={{ fontSize: '1rem', marginInlineEnd: 2, maxWidth: 'calc(100% - 16px)' }} />
                        :
                        description
                }</Typography>
                <Typography width='20%' >{
                    loading ?
                        <Skeleton width={Math.random() * 50 + 100} sx={{ fontSize: '1rem', marginInlineEnd: 2, maxWidth: 'calc(100% - 16px)' }} />
                        :
                        type
                }</Typography>
                <Typography width='20%'>{
                    loading ?
                        <Skeleton width={Math.random() * 50 + 100} sx={{ fontSize: '1rem', marginInlineEnd: 2, maxWidth: 'calc(100% - 16px)' }} />
                        :
                        keyName
                }</Typography>
                {
                    loading ?
                        <Skeleton variant="rounded" width={24} height={24} />
                        :
                        <ActionButton buttons={[
                            { label: t('USERS_SETTINGS.EDIT'), onClick: () => handleCustomUser({ id, name, description, type, keyName }) },
                            { label: t('USERS_SETTINGS.DELETE'), onClick: () => deleteCustomAtt(id), isDanger: true }
                        ]}/>
                } */}

                <Typography></Typography>
            </Stack>
    </>
  )
}

export default CustomTableRow