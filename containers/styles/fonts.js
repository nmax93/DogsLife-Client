import {Text, Dimensions} from 'react-native';
import styled from 'styled-components/native';

const DIMENSION_WIDTH = Dimensions.get('window').width;

export const BigBoldText = styled(Text)`
font-size: ${DIMENSION_WIDTH * 0.050}px
font-weight: bold; 
`;
export const BigText = styled(Text)`
font-size: ${DIMENSION_WIDTH * 0.050}px
`;
export const MedBoldText = styled(Text)`
  font-size: ${DIMENSION_WIDTH * 0.04}px
  font-weight: bold;
`;
export const MedText = styled(Text)`
  font-size: ${DIMENSION_WIDTH * 0.04}px;
`;
export const SmallBoldText = styled(Text)`
  font-size: ${DIMENSION_WIDTH * 0.035}px
  font-weight: bold; 
`;
export const SmallText = styled(Text)`
  font-size: ${DIMENSION_WIDTH * 0.035}px;
`;
export const BigQuestionText = styled(Text)`
width: ${DIMENSION_WIDTH * 0.7}px;
font-size: ${DIMENSION_WIDTH * 0.08}px;
font-weight: bold;
color: black;
text-align: center;

`;

export const ScanBigQuestionText = styled(Text)`
font-size: ${DIMENSION_WIDTH * 0.08}px;
font-weight: bold;
color: black;
text-align: center;

`;

export const NoDogsBigQuestionText = styled(Text)`
font-size: ${DIMENSION_WIDTH * 0.045}px;
color: #333333;
`;


export const MedQuestionText = styled(Text)`
width: ${DIMENSION_WIDTH * 0.7}px;
font-size: ${DIMENSION_WIDTH * 0.07}px;
font-weight: bold;
color: black;
text-align: center;

`;
export const MedQuestionTextWide = styled(Text)`
width: ${DIMENSION_WIDTH * 0.9}px;
font-size: ${DIMENSION_WIDTH * 0.07}px;
font-weight: bold;
color: black;
text-align: center;

`;
