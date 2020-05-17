import {Text, Dimensions} from 'react-native';
import styled from 'styled-components/native';

const DIMENSION_WIDTH = Dimensions.get('window').width;

export const BigBoldText = styled(Text)`
  font-size:
  font-width: bold; 
`;
export const BigText = styled(Text)`
  font-size: ;
`;
export const MedBoldText = styled(Text)`
  font-size: ${DIMENSION_WIDTH * 0.045}px
  font-weight: bold;
`;
export const MedText = styled(Text)`
  font-size: ${DIMENSION_WIDTH * 0.045}px;
`;
export const SmallBoldText = styled(Text)`
  font-size: ${DIMENSION_WIDTH * 0.04}px
  font-width: bold; 
`;
export const SmallText = styled(Text)`
  font-size: ${DIMENSION_WIDTH * 0.04}px;
`;
