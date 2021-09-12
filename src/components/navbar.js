import React, { useState } from 'react';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../bootstrap/dist/css/bootstrap.min.css'


const Bar = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const token = JSON.parse(localStorage.getItem('token'));
  const spotifyToken = JSON.parse(localStorage.getItem('params'));
  const toggleNavbar = () => setCollapsed(!collapsed)

  function logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('params');
  }
  return (
    <Container className="themed-container" fluid={true}>
      
        <Navbar color="dark" dark>
        <NavbarBrand href="/" className="mr-auto">IN THE NAME OF TECHNO</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar >
          <Nav navbar>
          {token || spotifyToken ? <>
          <NavItem>
              <NavLink href="/top"><i class="lar la-chart-bar"></i> Techno Top 20</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cards/"><i class="lar la-heart"></i> Favourite selections</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/selections/"><i class="lar la-star"></i> Your Favourites</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/search/"><i class="lab la-youtube"></i> Search for Techno</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/dashboard/"><i class="las la-search"></i> Search on Spotify</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Spoti/"><i class="las la-play"></i> Player</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about/"><i class="las la-info"></i> About</NavLink>
            </NavItem>  
            <NavLink href="/"> <button className="btn" onClick={logout}>Logout</button></NavLink>
            </> : <>
            <NavItem>
                        <NavLink href="/"><i class="las la-sign-in-alt"></i> Login</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/register"><i class="las la-registered"></i> Register</NavLink>
                        </NavItem>
                </>}
          </Nav>
        
        </Collapse>
      </Navbar>
  
        </Container>
  );
}

export default Bar;
