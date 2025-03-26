'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
    AppBar,
    Box,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useProductsStore } from '@/store/products';

const settings = ['Logout'];

interface Props {}

const NavBar: React.FC<Props> = ({}) => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const {
        productsCardData: { productsData },
    } = useProductsStore();

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" className="!bg-[#154360]">
            <Container>
                <Toolbar disableGutters className="flex justify-between">
                    <Link
                        href="/products"
                        className="mr-4 flex max-lg:hidden font-bold text-lg"
                    >
                        TUARMI
                    </Link>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Typography
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        TU ARMI
                    </Typography>
                    <Box sx={{ flexGrow: 0 }} className="flex items-center">
                        <Tooltip title="Settings" className="!mr-4">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                                className="!text-black  !bg-white w-[35px] h-[35px]"
                            >
                                J
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Products in cart">
                            <Link
                                href="/cart"
                                className="!text-white inline-flex"
                            >
                                <AddShoppingCartOutlinedIcon />
                                <Typography className="!text-lg text-red-500 !font-extrabold">
                                    {productsData.length}
                                </Typography>
                            </Link>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography sx={{ textAlign: 'center' }}>
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
