interface Props {
  style?: { fill?: string };
}

const IconPlus = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" xmlSpace="preserve" {...props}>
    <circle
      style={{
        fill: "#00A1F3",
      }}
      cx={25}
      cy={25}
      r={25}
    />
    <path
      style={{
        fill: "none",
        stroke: "#fff",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
      }}
      d="M25 13v25M37.5 25h-25"
    />
  </svg>
);
export default IconPlus;
