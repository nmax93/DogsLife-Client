import React, {PureComponent} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import styles from '../../../../styles/ProfileStyle';
import {SmallText} from '../../../../styles/fonts';

export class Activities extends PureComponent {
  render() {
    return (
      <RowView>
        <TouchableOpacity style={styles.roundedButton}>
          <SmallText style={styles.textButton}>Feed</SmallText>
          <SmallText style={styles.textButton}>History</SmallText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roundedButton, styles.walkButtonColor]}>
          <SmallText style={styles.textButton}>Walk</SmallText>
          <SmallText style={styles.textButton}>History</SmallText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roundedButton, styles.groomButtonColor]}>
          <SmallText style={styles.textButton}>Grooming</SmallText>
          <SmallText style={styles.textButton}>History</SmallText>
        </TouchableOpacity>
      </RowView>
    );
  }
}

const RowView = styled(View)`
  width: 90%;
  justifycontent: space-around;
  flexdirection: row;
  alignitems: center;
  marginbottom: 20px;
`;
