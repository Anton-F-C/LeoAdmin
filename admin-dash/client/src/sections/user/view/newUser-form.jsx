import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function NewUserDialog({ open, onSubmit }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Call the onSubmit function passed as prop
    onSubmit(event, { name, phone, email, role });

    // Reset form fields
    setName('');
    setPhone('');
    setEmail('');
    setRole('');
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>New User</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Phone"
          type="text"
          fullWidth
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Role"
          type="text"
          fullWidth
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={handleSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewUserDialog;