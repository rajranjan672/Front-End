import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import DropdownMenu from './DropdownMenu';
// import "./Dropdown.css"
import "./NavBar.css";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
const navigate = useNavigate()

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor:"#c298d4" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/dta">Rec</Link>
      </Typography>
      <Divider />
      <List>
        
          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText  ><NavLink to="/charactors" className="nav-item">Charactors</NavLink></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText  ><NavLink to="/supernaturals" className="nav-item">SuperNaturals</NavLink></ListItemText>
            </ListItemButton>
          </ListItem>
        
      </List>
   
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            onClick={() => navigate("/dta")}
            role='button'
          >
            REC
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button><NavLink to="/charactors" className="nav-item">Charactors</NavLink></Button>

              <Button><NavLink to="/supernaturals" className="nav-item">Supernaturals</NavLink></Button>

          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
     
    </Box>
  );
}

DrawerAppBar.propTypes = {
  
  window: PropTypes.func,
};

export default DrawerAppBar;


