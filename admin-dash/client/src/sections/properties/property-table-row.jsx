import { useState } from 'react';
import PropTypes from 'prop-types';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Iconify from '../../components/iconify';


export default function PropertyTableRow({
  selected,
  row,
  handlePropertyClick,
  handlePropertyDelete,
  handleEditPropertyClick
}) 

{
  const [open, setOpen] = useState(null);
  const {image, name, bed, bath, size, price, location} = row;

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handlePropertyClick} />
        </TableCell>

        <TableCell >
          <img src={'https://images.unsplash.com/photo-1709869837747-cd22da367fdb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="Property Image" width = "215px" height="205px" />
          
        </TableCell>

        <TableCell>{name}</TableCell>

        <TableCell>{bed}</TableCell>

        <TableCell>{bath}</TableCell>

        <TableCell>{size}</TableCell>

        <TableCell>{price}</TableCell>

        <TableCell>{location}</TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={() => {handleCloseMenu(); handleEditPropertyClick(id)}}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit Property
        </MenuItem>

        <MenuItem onClick={() => {handleCloseMenu(); handlePropertyDelete(id)}} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

PropertyTableRow.propTypes = {
  name: PropTypes.any,
  role: PropTypes.any,
  phone: PropTypes.any,
  email: PropTypes.any,
  selected: PropTypes.bool,
  handleClick: PropTypes.func,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func
};
