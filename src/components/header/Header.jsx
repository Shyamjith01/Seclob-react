// eslint-disable-next-line no-unused-vars
import {
  AppBar,
  Button,
  Container,
} from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./header.scss";
import logo from "../../assets/logo.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; 


function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }; 


  return (
    <AppBar position="fixed">
      <Container maxWidth="xl" style={{ background: "#ffff", color: "black" ,padding:'0 50px'}}>
        <header style={{ display: "flex", alignItems: "center" ,justifyContent:'space-between'}}>
          <div className="header_logo">
            <img src={logo} alt="" />
          </div>
          <div className="center">
            <Button color="inherit" className="active">Home</Button>
            <Button color="inherit">Offer</Button>
          </div>
          <div className="left-header-btns" style={{display:"flex"}}>
            <Button variant="contained">Register as a Partner</Button>
            <div>
              <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Kozhikod
              </Button> 
            </div>
            <Button variant="contained" style={{background:'#FFF',color:'#077DC7'}}>Login</Button>
          </div>
        </header>
      </Container>
    </AppBar>
  );
}

export default Header;
