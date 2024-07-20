import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import editsvg from "../assets/edit.svg"
import Updateform from '../pages/Updateform';

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
    pt: 2,
    px: 2,
    pb: 7,
  };
  

function EditModal({data}) {

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
      <img src={editsvg} alt="" />

      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
     <Updateform close={handleClose}  iddata={data}/>
        </Box>
      </Modal>
    </div>
  )
}

export default EditModal
