import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, IconButton, Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ThemeContext } from "../../context/themeContext";

const Header = () => {
  const { theme, handleOnClick } = useContext(ThemeContext);

  return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" style={{ flexGrow: 1 }}>
					Your Website
				</Typography>

				<Button color="inherit" component={Link} to="/">Home</Button>
				<Button color="inherit" component={Link} to="/about">About</Button>
				<Button color="inherit" component={Link} to="/contact">Contact</Button>

				<IconButton color="inherit" onClick={handleOnClick}>
					{theme === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
				</IconButton>
			</Toolbar>
		</AppBar>
  );
};

export default Header;
