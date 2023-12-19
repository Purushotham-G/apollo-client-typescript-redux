import { Box, Button, Dialog, DialogContent, FormControl, IconButton, Modal, Stack, TextField, Typography, FormHelperText } from '@mui/material'
import React, { useState } from 'react'

//icons
import CloseIcon from '@mui/icons-material/Close';

//redux
import { useDispatch } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { changePopupStatus } from '../Redux/CustomAttributeReduce';
import { Controller, useForm } from 'react-hook-form';

const CreatePopup = ({open, close}: any): JSX.Element => {

  const dispatch: Dispatch = useDispatch();

  const handleClose = () =>{
    dispatch(changePopupStatus(false))
  }

  const [data, setData] = useState(false);
  const handleopennn = () =>{
    setData(true);
  }
  const handleCloseeee =() =>{
    setData(false);
  }

  const {control, formState:{errors}, handleSubmit} = useForm({
    mode: 'onBlur'
  });

  let onSubmit = ({data}:any) =>{
    console.log(data);

  }

  return (
    <>
    <Modal open={data} onClose={handleCloseeee} >
      <Box sx={{width:"250px", background:"#ffff",top:"300px",right:"90px",p:"2"}} position="absolute"  >
          <Stack sx={{pl:"2"}}>
            <Typography >hello world</Typography>
          </Stack>
      </Box>
    </Modal>
   

      <Dialog open={open} 
        onClose={close}  
        fullWidth
        sx={{ '.MuiPaper-root': { borderRadius: 2, overflowX: 'hidden' }, '.MuiBackdrop-root': { backgroundColor: 'rgba(217, 217, 217, 0.25)' } }}
        >
        <Stack>
          <Stack flexDirection={"row"} justifyContent={"space-between"} sx={{ borderBottom: '1px solid #ccc' }} p={2.5} pb={1}>
              <Typography fontSize={'16px'} fontWeight={"700"}>create custom</Typography>
              <IconButton onClick={handleClose}>
                  <CloseIcon sx={{ color: '#000' }} />
              </IconButton>
          </Stack>
        </Stack>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <FormControl>
              <Typography>Display Name</Typography>
              <Controller 
                name='name'
                control={control}
                render={({field:{value, onChange, onBlur}}) =>(
                  <>
                    <TextField 
                      placeholder='Enter the Name'
                      type='text'
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                  </>
                )}
              />
              {/* {errors?.name && (<FormHelperText>{errors?.name?.message}</FormHelperText> )} */}
            </FormControl>
            <FormControl>
              <Typography>password</Typography>
              <Controller 
                name='password'
                control={control}
                render={({field:{value, onChange, onBlur}}) =>(
                  <>
                    <TextField 
                      placeholder='Enter the password'
                      type='text'
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                  </>
                )}
              />
              {/* {errors?.name && (<FormHelperText>{errors?.name?.message}</FormHelperText> )} */}
            </FormControl>

            <Stack>
              <Button type='submit'>Submit</Button>
            </Stack>
          </Box>
          </form>
          
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CreatePopup