import * as React from "react";
import appConstants from "../../util/constants";

function SvgDiskette(props) {
  const { height, width } = props;
  return (
    <svg
      height={height ? height : appConstants.DEFAULT_HEIGHT}
      width={width ? width : appConstants.DEFAULT_WIDTH}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        d="M507.606 84.394l-80-80A15 15 0 00417 0H15C6.716 0 0 6.716 0 15v482c0 8.284 6.716 15 15 15h482c8.284 0 15-6.716 15-15V95a15 15 0 00-4.394-10.606z"
        fill="#72a3fc"
      />
      <path
        d="M507.606 84.394l-80-80A15 15 0 00417 0H256v512h241c8.284 0 15-6.716 15-15V95a15 15 0 00-4.394-10.606z"
        fill="#2892fc"
      />
      <path
        d="M406 242H106c-8.284 0-15 6.716-15 15v255h330V257c0-8.284-6.716-15-15-15z"
        fill="#f9f9f9"
      />
      <path
        d="M421 257c0-8.284-6.716-15-15-15H256v270h165V257z"
        fill="#dfe4ea"
      />
      <g fill="#fad557">
        <path d="M346 452H166c-8.284 0-15-6.716-15-15s6.716-15 15-15h180c8.284 0 15 6.716 15 15s-6.716 15-15 15zM346 332H166c-8.284 0-15-6.716-15-15s6.716-15 15-15h180c8.284 0 15 6.716 15 15s-6.716 15-15 15zM346 392H166c-8.284 0-15-6.716-15-15s6.716-15 15-15h180c8.284 0 15 6.716 15 15s-6.716 15-15 15z" />
      </g>
      <path
        d="M361 0H91v145c0 8.284 6.716 15 15 15h240c8.284 0 15-6.716 15-15V0z"
        fill="#5458ea"
      />
      <path d="M256 0v160h90c8.284 0 15-6.716 15-15V0H256z" fill="#3545e3" />
      <g fill="#fcb12b">
        <path d="M346 422h-90v30h90c8.284 0 15-6.716 15-15s-6.716-15-15-15zM346 302h-90v30h90c8.284 0 15-6.716 15-15s-6.716-15-15-15zM346 362h-90v30h90c8.284 0 15-6.716 15-15s-6.716-15-15-15z" />
      </g>
    </svg>
  );
}

export default SvgDiskette;
