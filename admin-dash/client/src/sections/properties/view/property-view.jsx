import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Iconify from '../../../components/iconify';
import Scrollbar from '../../../components/scrollbar';
import PropertyTableRow from '../property-table-row';
import PropertyTableHead from '../property-table-head';
import PropertyTableEmptyRows from '../propertyTable-empty-rows';
import PropertyTableToolbar from '../property-table-toolbar';
import  PropertyTableNoData  from '../propertyTable-no-data';
import { emptyRows, applyFilter, getComparator } from '../utils';
import NewPropertyDialog from './newProperty-form';
import UpdatedPropertyDialog from './updateProperty-form';

export default function PropertyPage() {
  const [page, setPage] = useState(0);  
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [properties, setProperties] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  // Fetch all properties and display them in the table
  async function fetchProperties() {
    try {
      const response = await fetch('http://localhost:3000/properties');
      const propertyData = await response.json();
      setProperties(propertyData);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  }

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleNewPropertyClick = () => {
    setDialogOpen(true);
  };

  // Adding a new property 
  async function handleNewPropertySubmit(event, newProperty) {
    event.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/properties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProperty),
      });

      const newPropertyData = await response.json();
      
      // Update the properties state with the new property
      setProperties([...properties, newPropertyData]);
    } catch (error) { 
      console.error('Error adding new property:', error);
    }

    setDialogOpen(false);
  }

  const handleClose = () => {
    setDialogOpen(false);
  };

  // Deleting a property
  async function handlePropertyDelete(id) {
    try {
      const response = await fetch(`http://localhost:3000/properties/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setProperties(properties.filter((property) => property.id !== id));
      } else {
        console.error('Failed to delete property');
      }
    } catch (error) {
      console.error('Error deleting property:', error);
    }
  }

  // Editing a property
  async function handlePropertyEdit(id, updatedProperty) {
    try {
      const response = await fetch(`http://localhost:3000/properties/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProperty),
      });
      if (response.ok) {
        const updatedPropertyData = await response.json();
        setProperties(properties.map((property) => (property.id === id ? updatedPropertyData : property)));
      } else {
        console.error('Failed to update property');
      }
    } catch (error) {
      console.error('Error updating property:', error);
    }
  }

  const handlePropertyClick = (property) => {
    setEditDialogOpen(true);
    setSelectedProperty(property);
  };

  // Filtering properties
  const handleSort = (event) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  
  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: properties,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };


  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4" gutterBottom>
          Properties
        </Typography>
        <Button
          variant="contained"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={handleNewPropertyClick}
        >
          New Property
        </Button>
      </Stack>
    <NewPropertyDialog open={dialogOpen} onClose={handleClose} onSubmit={handleNewPropertySubmit} />
    <UpdatedPropertyDialog open={editDialogOpen} onClose={handleEditDialogClose} onSubmit={handlePropertyEdit} property={selectedProperty} />

    <Card>
        <PropertyTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <PropertyTableHead
                order={order}
                orderBy={orderBy}
                rowCount={properties.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'image', label: 'Image', alignRight: false },
                  { id: 'name', label: 'Name', alignRight: false },
                  { id: 'bed', label: 'Bed', alignRight: false },
                  { id: 'bath', label: 'Bath', alignRight: false },
                  { id: 'size', label: 'Size', alignRight: false },
                  { id: 'price', label: 'Price', alignRight: false },
                  { id: 'location', label: 'Location', alignRight: false },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                  <PropertyTableRow
                    key={row.id}
                    row={row}
                    selected={selected.includes(row.name)}
                    onRowClick={handlePropertyClick}
                    onSelectRow={() => handleClick(event, row.name)}
                  />
                 
                    
                  ))}

                <PropertyTableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, properties.length)}
                />

                <PropertyTableNoData notFound={ notFound} />
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={properties.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
