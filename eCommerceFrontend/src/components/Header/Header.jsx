import './Header.css'
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className='navbar'>
            <div className='icon-container'>
                <div className='menuicon'>
                    <a href="#" onClick={handleClick}>
                        <MenuIcon />
                    </a>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}

                    >
                        <MenuItem onClick={handleClose}>Home</MenuItem>
                        <MenuItem onClick={handleClose}>About</MenuItem>
                        <MenuItem onClick={handleClose}>Contact</MenuItem>
                    </Menu>
                </div>
                <div className='shoppingCartIcon'><a href=''><ShoppingCartIcon /></a></div>
            </div>
            <div className='title'><a href="#">Revss</a></div>
        </nav>
    );
}

export default Header;
