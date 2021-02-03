import React from 'react';
import NavItem from './NavItem';
import { NavigationItem } from '../models/NavigationItem';
import styled from 'styled-components';
// import { Container } from './styles';

interface HeaderProps {
  items: NavigationItem[];
}

const HeaderDiv = styled.div`
  height: 80px;
  width: 100%;
  background-color: black;
  display: inline-flex;
`;

const Header: React.FC<HeaderProps> = ({ items}: HeaderProps) => {
  return (
    <HeaderDiv>
      {items.map((item) =>{
        <NavItem key={item.name} navigationItem={item} />
      })}
    </HeaderDiv>
  );
}

export default Header;
