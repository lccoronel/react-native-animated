import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, ButtonPage, TextButton } from './styles';
import Gesture from '../Gesture';

const Home: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <Container>
      <ButtonPage onPress={() => navigate('Gesture')}>
        <TextButton>Pan Gesture</TextButton>
      </ButtonPage>
    </Container>
  );
}

export default Home;