import React, { useState, useEffect } from 'react';

import Link from 'next/link'

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';



import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useAuth0 } from "@auth0/auth0-react";







function Header() {
const { loginWithRedirect, logout , user, isAuthenticated, isLoading } = useAuth0();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [userInfo, setUser] = useState<any>(null)
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
      console.log({ user, isAuthenticated, isLoading })
  }, [user, isAuthenticated, isLoading])

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
<div className="header">
            <div className='header_left'>
                <img src='../images/remix.png' alt='logo'/>
            </div>

            <div className='header_nav_items'>
              
            </div>

            <div className="header_right">
              {  isAuthenticated  ? (
                <div className="header_option">
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }} onClick={handleClick}>
                <Tooltip title="Account settings">
                  <p >{user?.name}
                    <IconButton
                        
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }} src={user?.picture}/>
                    </IconButton>
                    </p>
              </Tooltip>
                </Box>
                <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <Avatar /> Profile
          </MenuItem>
    
          <Divider />
  
          <MenuItem onClick={() => logout({ returnTo: window.location.origin })}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
                </Menu>
                </div>
              ) : (
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }} onClick={() => loginWithRedirect()}>
                   <IconButton
                        
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                  <p >Log in
                    </p>  
                    </IconButton>
                </Box>
              )}
              
            </div>
        </div>
  );
}

export default Header