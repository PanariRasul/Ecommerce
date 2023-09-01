import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav  from './Nav';
const Header = () => {
  return (
    <MainHeader>
        <NavLink className="newlogo" to="/">
            <img src='./images/logo.png' alt='my logoimage'/>
        </NavLink>
        <Nav />
    </MainHeader>
  )
}

const MainHeader = styled.header`
    padding:0 4.8rem;
    height:10rem;
    background-color:${({ theme }) => theme.colors.bg };
    display:flex;
    justify-content: space-between;
    align-items:center;
    position:relative;

    .newlogo {
      margin-left:20px;
      width:160px;
      height:80px;
      
    }
    .newlogo img {
      width=160px;
      height:100%;
      border-radius:5px;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
     .newlogo {
      height:40px;
      margin-left:0px;
    }
`;

export default Header;