import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderSyled = styled.header`
  grid-area: header;
  color: ${(props) => props.theme.color_primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  & > h6 {
    color: ${(props) => props.theme.color_surface};
  }
`;

const Header = () => {
  return (
    <HeaderSyled>
      <h1>MILK SHOP</h1>
      <h6>Онлайн магазин за млечни продукти</h6>
      <nav>
        <Link to="/">Пазарувай</Link>
        <Link to="/info">Инфо</Link>
        <Link to="/admin">Администрация</Link>
      </nav>
    </HeaderSyled>
  );
};

export default Header;
