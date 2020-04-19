import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

export const LoginArea = props => <LoginView>{props.children}</LoginView>;

const LoginView = styled(View)`
  width: 100%;
  height: 100%;
  align-self: center;
`;
