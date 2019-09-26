import React from 'react';
// import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{0}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

export default Header;
