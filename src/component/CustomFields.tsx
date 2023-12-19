import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { GET_CUSTOMS } from '../Graphql/queries/customField';
import CreatePopup from './CreatePopup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/rootReducers';
import {Dispatch } from '@reduxjs/toolkit';
import { changePopupStatus } from '../Redux/CustomAttributeReduce';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import CustomTables from './CustomTables';
import Header from '../Common/Header';

export const CustomFields = () => {
  const dispatch: Dispatch = useDispatch();

    const getCustomData = useQuery(GET_CUSTOMS, { variables: {
      "business_id": "c327668d-47dc-4b3c-bcb2-d4f459ebb321",
      "limit": null,
      "offset": 0  
    } });
    useEffect(() =>{
      console.log("results",getCustomData);
    })

    const fetchAllQuickReplies = async() =>{
      await getCustomData.refetch();
    }
  // const [open, setOpen] = useState(false);
  

  const {showCreatePopup} = useSelector((state:RootState)=>state.home);
  console.log("ycvetwviydrc",showCreatePopup);

  const handleClose = () =>{
    dispatch(changePopupStatus(false));
  }

  const handleOpen = () =>{
    dispatch(changePopupStatus(true));
  }
  

  return (
    <>
        {/* <button onClick={handleOpen}>submit</button> */}
        <Stack>
          <Header title="custom Attributes" description='welcome to custom attributes' actions={<Button onClick={handleOpen} sx={{ textTransform: 'none', borderRadius: '10px' }} variant="contained" disableElevation>submit</Button>} />
          <Box p={3} flex={1} sx={{ overflowY: 'auto' }} className='hideScrollbar'>
                  <Paper sx={{ boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.06)', mx: 2, my: 4, borderRadius: 5, display: 'flex', flexDirection: 'column' }}>
                      <Stack gap={2}>
                        <CustomTables />
                      </Stack>
                  </Paper>
          </Box>
        </Stack>


        <CreatePopup open={showCreatePopup} close={handleClose} />
    </>
  )
}
