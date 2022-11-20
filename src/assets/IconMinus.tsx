interface Props {
  style?: { fill?: string };
}

const IconMinus = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" xmlSpace="preserve" {...props}>
    <path d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm12.5 28h-25a2 2 0 0 1 0-4h25a2 2 0 0 1 0 4z" />
  </svg>
);
export default IconMinus;
