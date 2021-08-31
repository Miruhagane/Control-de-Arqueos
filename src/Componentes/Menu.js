import { React, useState } from "react";

import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PostAddIcon from "@material-ui/icons/PostAdd";
import HomeIcon from "@material-ui/icons/Home";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import MenuItem from "@material-ui/core/MenuItem";
import Menubar from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

import { makeStyles } from "@material-ui/core/styles";
import background from "../images/backgraundarqueo.jpg";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    height: "100vh",
  },
  Image: {
    height: "100vh",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  item1: { marginLeft: "50%" },
});

function Menu() {
  let redirrecionar = useHistory();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const Home = () => {
    redirrecionar.push("/Home");
  };

  const unidades = () => {
    redirrecionar.push("/Unidades");
  };

  const Entradas = () => {
    redirrecionar.push("/Entradas");
  };

  const Salidas = () => {
    redirrecionar.push("/Salidas");
  };

  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const abrir = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Arqueos
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <Menubar
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={abrir}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Cerrar Sesion</MenuItem>
            </Menubar>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer variant="persistent" anchor="left" open={open}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List component="Nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon onClick={Home} />
            </ListItemIcon>
            <ListItemText onClick={Home} primary="Home" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <PostAddIcon onClick={unidades} />
            </ListItemIcon>
            <ListItemText onClick={unidades} primary="Unidades" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <PostAddIcon onClick={Entradas} />
            </ListItemIcon>
            <ListItemText onClick={Entradas} primary="Entradas" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <PostAddIcon onClick={Salidas} />
            </ListItemIcon>
            <ListItemText onClick={Salidas} primary="Salidas" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Menu;
