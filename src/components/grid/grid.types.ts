export type BreakPoints = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type FlexDirection = 'row' | 'column';

type JustifyContent = 'center' | 'flex-start' | 'flex-end' | 'space-between' |
    'space-around' | 'space-evenly' | 'stretch';

type AlignItems = 'center' | 'flex-start' | 'flex-end' | 'stretch';

type FlexWrap = 'nowrap' | 'wrap';

export interface ColProps {
    lg?: BreakPoints,
    md?: BreakPoints,
    xs?: BreakPoints,
}

export interface RowProps {
    flexDirection?: FlexDirection,
    justifyContent?: JustifyContent,
    alignItems?: AlignItems,
    flexWrap?: FlexWrap,
}

export interface SpaceProps {
    horizontal?: boolean,
    vertical?: boolean,
    space?: number,
}