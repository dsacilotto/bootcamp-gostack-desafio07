import React from 'react';
import { connect } from 'react-redux';

import { TouchableOpacity, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import NavigationService from '../../services/navigation';

import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Wrapper>
      <Container>
        <View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => NavigationService.navigate('Home')}
            style={{ width: 200, height: 30 }}
          >
            <Logo />
          </TouchableOpacity>
        </View>
        <BasketContainer onPress={() => NavigationService.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null
)(Header);
