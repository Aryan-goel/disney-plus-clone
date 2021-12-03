import React from "react";
import styled from "styled-components";

function header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
          <a>
            <img src="/images/home-icon.svg"/>
            <span>
                Home
            </span>

          </a>

      </NavMenu>
    </Nav>
  );
}

export default header;
const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display:flex;
  align-items:center;
  padding:0 36px;
`;
const Logo = styled.img`
 width:80px;
 
 
 `;
const NavMenu=styled.div`
display:flex;
a{
    display:flex;
    align-items:center;
    padding:0 12px;
    img{
        
    }
}
`