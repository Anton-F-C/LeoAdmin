import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function NewPropertyDialog({ open, setOpen, onSubmit }) { 
  const [image, setValue] = useState('');
  const [name, setName] = useState('');
  const [price, setType] = useState('');
  const [category, setCategory] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    // Call the onSubmit function passed as prop
    onSubmit(event, { image, name, price, category});

    // Reset form fields
    setName('');
    setPrice('');
    setCategory('');
    setError(null);

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
          type="jpeg"
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
          label="Price"
          type="text"
          fullWidth
          value={price}
          onChange={(e) => setPrice(e.target.value)} 
        />
        <TextField
          margin="dense"
          label="Category"
          type="text"
          fullWidth
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewPropertyDialog
