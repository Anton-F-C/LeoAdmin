import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function UpdatedUserDialog({ open, setOpen, onSubmit, selectedUser }) {
        // If no user is selected, don't render the dialog
        if (!selectedUser) {
            return null;
        }
    const [name, setName] = useState(selectedUser.name);
    const [phone, setPhone] = useState(selectedUser.phone);
    const [email, setEmail] = useState(selectedUser.email);
    const [role, setRole] = useState(selectedUser.role);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      // Call the onSubmit function passed as a prop with the updated user data
      onSubmit(selectedUser.id, { name, phone, email, role });

      // Reset form fields
      setName('');
      setPhone('');
      setEmail('');
      setRole('');
  
      // Close the dialog
      setOpen(false);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit user</DialogTitle>
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
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Save</Button>
          </DialogActions>
        </Dialog>
      );
  }
  
  export default UpdatedUserDialog;
  