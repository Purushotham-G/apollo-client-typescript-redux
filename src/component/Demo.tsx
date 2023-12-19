import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/rootReducers';
import CreatePopup from './CreatePopup';
import { changePopupStatus } from '../Redux/CustomAttributeReduce';
import { Dispatch } from '@reduxjs/toolkit';

const data = ["dad", "mom","child","mom","mom"];

const Demo = () => {
  const [show, setShow] = useState<boolean>(false);

  const dispatch: Dispatch = useDispatch(); 

  const {showCreatePopup}: any = useSelector((state:RootState)=> state.home);
  console.log("ycvetwviydrc",showCreatePopup);

  // const handleClick = () =>{
  //   dispatch(changePopupStatus(true));
  // }

  const handleAddNewUser = (): void => {
    dispatch(changePopupStatus(true));
  }

  return (  
    <>
        <Typography> hello world</Typography>
        <button onClick={()=>setShow(true)}>submit1</button>
        {/* <Button onClick={handleClick}>submit</Button> */}
        <CreatePopup open={show} close={()=> {dispatch(changePopupStatus(false))}} />
    </>
  )
}

export default Demo