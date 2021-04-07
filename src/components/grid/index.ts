import styled, { css } from 'styled-components';
import { ColProps, BreakPoints, RowProps, SpaceProps } from './grid.types';

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

const Container = styled.div`
    padding: 0px ${({theme}) => theme.spacing(8)};
    margin: ${({theme}) => theme.spacing(8)} auto;

    max-width: 1200px;
`;

const Space = styled.div<SpaceProps>`
    ${({horizontal = true, vertical = false, space = 0, theme}) => {
        if (horizontal && vertical) {
            return css`
                padding: ${theme.spacing(space)};
            `;
        }

        if (horizontal && !vertical) {
            return css`
                padding: 0px ${theme.spacing(space)};
            `;
        }

        if (!horizontal && vertical) {
            return css`
                padding: 0px ${theme.spacing(space)};
            `;
        }

        return css`
            padding: ${theme.spacing(0)};
        `;
    }};
`;

export { Row, Col, Container, Space };