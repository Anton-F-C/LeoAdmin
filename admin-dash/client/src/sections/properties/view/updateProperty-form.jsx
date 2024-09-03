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
  const [bed, setBed] = useState(selectedProperty.bed);
  const [bath, setBath] = useState(selectedProperty.bath);
  const [size, setSize] = useState(selectedProperty.size);
  const [price, setPrice] = useState(selectedProperty.price);
  const [location, setLocation] = useState(selectedProperty.location);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Call the onSubmit function passed as prop with the updated property data
    onSubmit(selectedProperty.id, { image, name, price, bed, bath, size, location });

    // Reset form fields
    setImage('');
    setName('');
    setBed('');
    setBath('');
    setSize('');
    setPrice('');
    setLocation('');
    
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
        <Button onClick={handleSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default UpdatePropertyDialog;