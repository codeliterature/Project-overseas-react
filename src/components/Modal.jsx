import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function Modal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button className="bg-customColor py-1 px-2 rounded hover:tracking-wide hover:bg-opacity-0 hover:border hover:border-1px hover:border-customColor hover:text-white hover:ease-in duration-150 font-paragraph" onClick={() => setOpen(true)}>Book Now</button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 2,
            top: 2,
            color: (theme) => theme.palette.grey[500],
            padding: 2,
          }}
        >
          <CloseIcon />
        </IconButton>
        <div className="flex flex-col p-4 space-y-2 mx-4 my-6 rounded">
          <input type="text" placeholder="Your Name" className="p-2 rounded bg-transparent"/>
          <input type="email" placeholder="Your Email" className="p-2 rounded bg-transparent"/>
          <textarea maxlength="240" row="7" placeholder="Enter your message here" className="p-2 rounded bg-transparent"></textarea>
          <button className="border border-1px border-customColor rounded py-2 hover:bg-customColor hover:ease-in duration-200">Submit</button>
            </div>
      </BootstrapDialog>
    </React.Fragment>
  );
}