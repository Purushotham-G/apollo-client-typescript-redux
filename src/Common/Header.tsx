import { Stack, Typography } from '@mui/material'
import { useMediaQuery } from 'react-responsive';
import React from 'react'

//models
import { HeaderProps } from './HeaderProps'


const Header = ({title,description,actions,style}:HeaderProps):JSX.Element => {
    const isMobile = useMediaQuery({ maxWidth: 786 });

  return (
    <>
    <header style={{ display: 'flex', alignItems: 'center', borderBottom: '0.10px solid rgba(0, 0, 0, 0.10)', padding: (isMobile ? '16px' : '24px'), ...style }}>
        <Stack sx={{ marginInlineEnd: 'auto' }}>
            <Typography variant='h5' fontWeight='bold' color='#111927'>{title}</Typography>
            <Typography color='#6C737F' fontSize={14}>{description}</Typography>
        </Stack>
        { actions }
    </header>
    </>
  )
}

export default Header