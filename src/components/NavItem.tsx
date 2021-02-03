import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationItem } from '../models/NavigationItem';
import styled from 'styled-components';
// import { Container } from './styles';
interface NavItemProps {
  navigationItem: NavigationItem;
}

const BaseNavItem = styled(NavLink)`
  height: 77px;
  color: white;
  margin-left: 16px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid transparent;
  font-size: 14px !important;
  font-weight: bold;
  text-decoration: none;

  :hover {
    border-bottom: 3px solid #0bc6e3;
  }
`;

const NavItemLink = styled(({ className, ...props}) =>
<BaseNavItem {...props} activeClassName={className} />)`
  border-bottom: 3px solid #0bc6e3;
`;

const NavItem: React.FC<NavItemProps> = ({navigationItem}: NavItemProps) => {
  return (
    <NavItemLink exact to={navigationItem.path}>
      {navigationItem.name}
    </NavItemLink>
  );
}

export default NavItem;
