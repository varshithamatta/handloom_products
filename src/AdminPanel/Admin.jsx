import { Mail } from '@mui/icons-material';
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdminDashboard from './Components/Dashboard';
import CreateProduct from './Components/CreateProduct';
import ProductsTable from './Components/ProductsTable';
import OrdersTable from './Components/OrdersTable';
import CustomersTable from './Components/CustomersTable';

const menu = [
  { name: 'Dashboard', path: '/admin', icon: <DashboardIcon /> },
  { name: 'Products', path: '/admin/products', icon: <DashboardIcon /> },
  { name: 'Customers', path: '/admin/customers', icon: <DashboardIcon /> },
  { name: 'Orders', path: '/admin/orders', icon: <DashboardIcon /> },
  { name: 'AddProduct', path: '/admin/product/create', icon: <DashboardIcon /> },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <List>
        {menu.map((item) => (
          <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className='mt-5 ml-3'>
      <div className='flex h-full border border-black w-[20%]'>
        <CssBaseline />
        <div>
          {drawer}
        </div>

        <Box className='adminContainer' component={"main"} sx={{flexGrow:1}}>
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/admin/product/create" element={<CreateProduct />} />
            <Route path="/admin/products" element={<ProductsTable />} />
            <Route path="/admin/orders" element={<OrdersTable />} />
            <Route path="/admin/customers" element={<CustomersTable />} />
          </Routes>
        </Box>
      </div>
    </div>
  );
};

export default Admin;
