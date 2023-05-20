/* eslint-disable react/prop-types */
import Icons from "../../data/menuIcons.svg"; // Path to your icons.svg

const Icon = ({ name, color, size }) => (
  <svg fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#${name}`} />
  </svg>
);



export default Icon;