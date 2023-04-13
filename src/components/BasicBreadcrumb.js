import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumb() {
  return (
    <div role="presentation" onClick={handleClick} className=' bg-white px-4 py-2'>
      <Breadcrumbs maxItems={3} aria-label="breadcrumb" >
        <Link underline="hover" color="inherit" href="#">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Catalog
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Accessories
        </Link>
        <Link underline="hover" color="inherit" href="#">
          New Collection
        </Link>
        <Typography color="text.primary">Belts</Typography>
      </Breadcrumbs>
    </div>
  );
}