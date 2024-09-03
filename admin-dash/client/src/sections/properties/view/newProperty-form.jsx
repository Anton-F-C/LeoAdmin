import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function NewPropertyDialog({ open, setOpen, onSubmit }) { 
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [bed, setBed] = useState('');
  const [bath, setBath] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Call the onSubmit function passed as prop
    onSubmit(event, { image, name, bed, bath, size, price, location });

    // Reset form fields
    setImage('');
    setName('');
    setBed('');
    setBath('');
    setSize('');
    setPrice('');
    setLocation('');

    // Close the dialog
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add a new property</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Image"
          type="text"
          fullWidth
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Bed"
          type="text"
          fullWidth
          value={bed}
          onChange={(e) => setBed(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Bath"
          type="text"
          fullWidth
          value={bath}
          onChange={(e) => setBath(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Size"
          type="text"
          fullWidth
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Price"
          type="text"
          fullWidth
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Location"
          type="text"
          fullWidth
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewPropertyDialog;
