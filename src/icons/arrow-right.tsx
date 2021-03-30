import { IconProps } from './icons.types';

function ArrowRight({ width = 24, height = 24, color = 'black' }: IconProps) {
    return (
    <svg width={width} height={height} viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.10001 20.75L14.85 14L8.10001 7.25L9.45001 4.55L18.9 14L9.45001 23.45L8.10001 20.75Z"
            fill={color}
        />
    </svg>
    );
}

export default ArrowRight;
