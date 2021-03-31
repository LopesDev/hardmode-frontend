import { IconProps } from "./icons.types";

function InstagramCircle({ width = 24, height = 24, color = 'black' }: IconProps) {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.6 12C15.6 12.9548 15.2207 13.8705 14.5456 14.5456C13.8704 15.2207 12.9548 15.6 12 15.6C11.0452 15.6 10.1295 15.2207 9.4544 14.5456C8.77927 13.8705 8.39998 12.9548 8.39998 12C8.39998 11.7948 8.42158 11.5944 8.45878 11.4H7.19998V16.1964C7.19998 16.53 7.46998 16.8 7.80358 16.8H16.1976C16.3575 16.7997 16.5107 16.7359 16.6236 16.6228C16.7366 16.5096 16.8 16.3563 16.8 16.1964V11.4H15.5412C15.5784 11.5944 15.6 11.7948 15.6 12ZM12 14.4C12.3152 14.3999 12.6274 14.3377 12.9186 14.217C13.2098 14.0963 13.4744 13.9194 13.6973 13.6965C13.9201 13.4735 14.0969 13.2088 14.2175 12.9175C14.338 12.6262 14.4001 12.314 14.4 11.9988C14.3999 11.6835 14.3377 11.3714 14.217 11.0802C14.0963 10.7889 13.9194 10.5244 13.6964 10.3015C13.4735 10.0786 13.2088 9.90187 12.9175 9.7813C12.6262 9.66073 12.314 9.59872 11.9988 9.5988C11.3621 9.59896 10.7516 9.85203 10.3015 10.3023C9.85139 10.7527 9.59862 11.3633 9.59878 12C9.59894 12.6367 9.85201 13.2472 10.3023 13.6973C10.7526 14.1474 11.3633 14.4002 12 14.4ZM14.88 9.48H16.3188C16.4144 9.48 16.5061 9.44211 16.5738 9.37463C16.6415 9.30715 16.6797 9.21558 16.68 9.12V7.6812C16.68 7.5854 16.6419 7.49353 16.5742 7.42579C16.5065 7.35805 16.4146 7.32 16.3188 7.32H14.88C14.7842 7.32 14.6923 7.35805 14.6246 7.42579C14.5568 7.49353 14.5188 7.5854 14.5188 7.6812V9.12C14.52 9.318 14.682 9.48 14.88 9.48ZM12 0.479996C8.94469 0.479996 6.01453 1.69371 3.85411 3.85413C1.69369 6.01454 0.47998 8.9447 0.47998 12C0.47998 15.0553 1.69369 17.9854 3.85411 20.1459C6.01453 22.3063 8.94469 23.52 12 23.52C13.5128 23.52 15.0108 23.222 16.4085 22.6431C17.8062 22.0642 19.0761 21.2156 20.1459 20.1459C21.2156 19.0761 22.0641 17.8062 22.6431 16.4085C23.222 15.0108 23.52 13.5128 23.52 12C23.52 10.4872 23.222 8.98915 22.6431 7.59148C22.0641 6.19381 21.2156 4.92386 20.1459 3.85413C19.0761 2.78439 17.8062 1.93584 16.4085 1.3569C15.0108 0.777969 13.5128 0.479996 12 0.479996ZM18 16.6668C18 17.4 17.4 18 16.6668 18H7.33318C6.59998 18 5.99998 17.4 5.99998 16.6668V7.3332C5.99998 6.6 6.59998 6 7.33318 6H16.6668C17.4 6 18 6.6 18 7.3332V16.6668Z"
                fill={color}
            />
        </svg>
    );
}

export default InstagramCircle;