import React, { useState } from 'react';
import styled from 'styled-components'
import SearchIconSVG from '../../images/searchIcon.svg'
import InfoIconSVG from '../../images/infoicon01.svg'

const HomeSearchBar = () => {


  const InputContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 20px;
    padding-left: 3rem;
    background-color: #393945;
  `;

  const SearchIcon = styled.img`
    height: 18px;
    width: 18px;
  `;

  const InfoIcon = styled.img`
    height: 14px;
    width: 14px;
    margin-left: 8px;
  `;

  const SearchBarInput = styled.input`
  display: inline-block;
  width: 100%;
  padding: 1.1rem 1rem;
  background-color: inherit;
  border: none;
  font-size: 18px;
  font-weight: 200;
  line-height: 1.15;
  color: white;
  &:focus{
    border: none;
    outline: none;
  }
  &:active{
    border: none;
  }
  `;

  const InfoIconContainer = styled.div`
    padding-right: 3rem;
  `;

  const [input, setInput] = useState('exmaple12');
  console.log(input)


  return (
    <InputContainer>
      <SearchIcon src={SearchIconSVG} alt='' />
      <SearchBarInput
        type='text'
        placeholder='Search...'
      // value={} 

      />
      <InfoIconContainer>
        <InfoIcon src={InfoIconSVG} alt='' />
      </InfoIconContainer>
    </InputContainer>
  );
}

export default HomeSearchBar;