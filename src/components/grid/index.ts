import styled from 'styled-components';
import { ColProps, BreakPoints, RowProps } from './grid.types';

function _getColFlexBasis(col: BreakPoints) {
    if (col) {
        return 100 / 12 * col;
    }

    return 100;
}

const Row = styled.div<RowProps>`
    display: flex;
    flex-direction: ${({flexDirection}) => flexDirection ? flexDirection : 'row'};

    justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'flex-start'};
    align-items: ${({alignItems}) => alignItems ? alignItems : 'flex-start'};
    flex-wrap: ${({flexWrap}) => flexWrap ? flexWrap : 'wrap'};

    margin: 0px -${({theme}) => theme.spacing(3)};
`;

const Col = styled.div<ColProps>`
    padding: ${({theme}) => `${theme.spacing(1)} ${theme.spacing(3)}`};
    flex: 0 0 ${({xs}) => `${_getColFlexBasis(xs)}%`};

    @media screen and (min-width: ${({theme}) => theme.breakpoint.md}) {
        flex: 0 0 ${({md}) => `${_getColFlexBasis(md)}%`};
    }

    @media screen and (min-width: ${({theme}) => theme.breakpoint.lg}) {
        flex: 0 0 ${({lg}) => `${_getColFlexBasis(lg)}%`};
    }
`;

export { Row, Col };