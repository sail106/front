import styled from "styled-components";
import { Link } from "react-router-dom";
const NavBox = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 3;
  height: 150px;
  background: #FFE9E3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 1px;
  top: 0;
`;

const Logo = styled.a`
  padding: 40px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 32px;
  letter-spacing: -1.2px;
`;

const NavMenu = styled.div`
  list-style: none;
  a {
    padding: 8px 12px;
  }
  a:hover {
    color: #F28482;
  }
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
`;

const NavInfo = styled.div`
  
`;

const Navbar = () => {
  return (
    <NavBox>
      <Logo>
        Flowering
      </Logo>
      <NavMenu>
        <Link to={'/'}>Home</Link>
        <Link to={'/pw'}>Consulting</Link>
        <Link to={'/pw'}>Community</Link>
        <Link to={'/pw'}>Contents</Link>
        <Link to={'/pw'}>FAQ</Link>
      </NavMenu>
      <NavInfo>
        
      </NavInfo>
    </NavBox>
  )
}

export default Navbar;