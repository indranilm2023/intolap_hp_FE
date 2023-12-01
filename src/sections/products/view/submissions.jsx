// import { useState } from 'react';

// import Stack from '@mui/material/Stack';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Unstable_Grid2';
// import Typography from '@mui/material/Typography';

// import { products } from 'src/_mock/products';

// import ProductCard from '../product-card';
// import ProductSort from '../product-sort';
// import ProductFilters from '../product-filters';
// import ProductCartWidget from '../product-cart-widget';

// // ----------------------------------------------------------------------

// export default function Projects() {
//   const [openFilter, setOpenFilter] = useState(false);

//   const handleOpenFilter = () => {
//     setOpenFilter(true);
//   };

//   const handleCloseFilter = () => {
//     setOpenFilter(false);
//   };

//   return (
//     <Container>
//       <Typography variant="h4" sx={{ mb: 5 }}>
//         Projects
//       </Typography>

//       <Stack
//         direction="row"
//         alignItems="center"
//         flexWrap="wrap-reverse"
//         justifyContent="flex-end"
//         sx={{ mb: 5 }}
//       >
//         <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
//           <ProductFilters
//             openFilter={openFilter}
//             onOpenFilter={handleOpenFilter}
//             onCloseFilter={handleCloseFilter}
//           />

//           <ProductSort />
//         </Stack>
//       </Stack>

//       <Grid container spacing={3}>
//         {products.map((product) => (
//           <Grid key={product.id} xs={12} sm={6} md={3}>
//             <ProductCard product={product} />
//           </Grid>
//         ))}
//       </Grid>

//       <ProductCartWidget />
//     </Container>
//   );
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


export default function Submissions() {

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 20 },
    { id: 6, lastName: 'Melisandre', firstName: "kkk", age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <div style={{backgroundColor:"#fff",padding:"2%"}}>
      <h1> Submissions Details </h1>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );

}