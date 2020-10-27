import React from 'react'
import styled from 'styled-components'
import siteLogo from '../../images/atomFinanceLogo.png'
import { Link } from 'react-router-dom'

const Header = () => {

  const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 31px;
    padding: 20px 1.5rem 1rem 2rem;
    background-color: #32323e;
  `;

  const SiteLogo = styled.img`
    height: 64%;
    width: auto;
  `;

  const StyledLink = styled(Link)`
color: white;
display: block;
font-size: 12px;
font-weight: bold;
text-decoration: none;
padding: 6px 0px;
font-family: Helvetica, Arial, sans-serif;
&:hover {
  border-bottom: 1px solid #52e3c2;
  margin-top: 1px;
}
`;


  return (
    <Header>
      <SiteLogo src={siteLogo} alt='Site logo' />
      <StyledLink to=''>HOME</StyledLink>
      <StyledLink to=''>PORTFOLIO</StyledLink>
      <StyledLink to=''>HUBS</StyledLink>
      <StyledLink to=''>CHAT</StyledLink>
      <StyledLink to=''>COMPARE</StyledLink>
      <StyledLink to=''>SCREENER</StyledLink>
      <div style={{ flexGrow: .7, display: 'flex' }}></div>
      <StyledLink to=''>HELP</StyledLink>
      <StyledLink to=''>FEEDBACK</StyledLink>
      <StyledLink
        style={{
          backgroundColor: '#52e3c2',
          padding: '.7rem 1rem',
          color: 'black',
          borderRadius: '3px',

        }}
        to=''>Upgrade</StyledLink>
      <StyledLink
        style={{}}
        to=''>JC</StyledLink>
    </Header>
  );
}

export default Header;