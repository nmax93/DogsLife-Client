

import {Text, Dimensions} from 'react-native';
import styled from 'styled-components/native';

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

export const BigBoldText = styled(Text)`
    font-size:
    font-width: bold; 
`;
export const BigText = styled(Text)`
    font-size: 
`;
export const MedBoldText = styled(Text)`
    font-size: ${DIMENSION_HEIGHT*0.024}
    font-weight: bold;
`;
export const MedText = styled(Text)`
    font-size: ${DIMENSION_HEIGHT*0.024}
`;
export const SmallBoldText = styled(Text)`
    font-size: ${DIMENSION_HEIGHT*0.021}
    font-width: bold; 
`;
export const SmallText = styled(Text)`
    font-size: ${DIMENSION_HEIGHT*0.021}
`;
