import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function UpdatePropertyDialog({ open, setOpen, onSubmit, selectedProperty }) {
  // If no property is selected, don't render the dialog
      if (!selectedProperty) {
      return null;
    }
  const [image, setImage] = useState(selectedProperty.image);
  const [name, setName] = useState(selectedProperty.name);
  const [price, setPrice] = useState(selectedProperty.price);
  const [category, setCategory] = useState(selectedProperty.category);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Call the onSubmit function passed as prop with the updated property data
    onSubmit(selectedProperty.id, { image, name, price, category });

    // Reset form fields
    setImage('');
    setName('');
    setPrice('');
    setCategory('');

    // Close the dialog
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit property</DialogTitle>
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
        <Button onClick={handleSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default UpdatePropertyDialog;