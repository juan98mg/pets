import * as React from "react";
import appConstants from "../../util/constants";

function SvgCalcelButon(props) {
  const { height, width } = props;
  return (
    <svg
      height={height ? height : appConstants.DEFAULT_HEIGHT}
      width={width ? width : appConstants.DEFAULT_WIDTH}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <circle cx={256} cy={256} r={256} fill="#e21b1b" />
      <path
        d="M510.28 285.304L367.912 142.936 150.248 368.608l140.928 140.928c115.176-15.84 205.88-108.248 219.104-224.232z"
        fill="#c40606"
      />
      <g fill="#fff">
        <path d="M354.376 371.536a19.954 19.954 0 01-14.144-5.856L146.408 171.848c-7.816-7.816-7.816-20.472 0-28.28s20.472-7.816 28.28 0L368.52 337.4c7.816 7.816 7.816 20.472 0 28.28a19.954 19.954 0 01-14.144 5.856z" />
        <path d="M160.544 371.536a19.954 19.954 0 01-14.144-5.856c-7.816-7.816-7.816-20.472 0-28.28l193.832-193.832c7.816-7.816 20.472-7.816 28.28 0s7.816 20.472 0 28.28L174.688 365.68a19.94 19.94 0 01-14.144 5.856z" />
      </g>
    </svg>
  );
}

export default SvgCalcelButon;
