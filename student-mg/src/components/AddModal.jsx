import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Addstudent from '../pages/Addstudent';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    height:400,
    pt: 0,
    px: 8,
    pb: 7,
  };
  

function AddModal() {

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{backgroundColor:'orange'}} variant="contained" onClick={handleOpen}>ADD STUDENT</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Addstudent close={handleClose}/>
        
        </Box>
      </Modal>
    </div>
  )
}

export default AddModal
