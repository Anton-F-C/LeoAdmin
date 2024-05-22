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


export default function UserTableRow({
  selected,
  row,
  handleClick,
  handleDelete,
  handleEditUserClick
}) {
  const [open, setOpen] = useState(null);
  const {  id,
    name,
    phone,
    email,
    role,} = row;
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
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </TableCell>

        <TableCell>{phone}</TableCell>

        <TableCell>{email}</TableCell>

        <TableCell>{role}</TableCell>

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
        <MenuItem onClick={() => {handleCloseMenu(); handleEditUserClick(id)}}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit a user
        </MenuItem>

        <MenuItem onClick={() => {handleCloseMenu(); handleDelete(id)}} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

UserTableRow.propTypes = {
  name: PropTypes.any,
  role: PropTypes.any,
  phone: PropTypes.any,
  email: PropTypes.any,
  selected: PropTypes.bool,
  handleClick: PropTypes.func,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func
};
