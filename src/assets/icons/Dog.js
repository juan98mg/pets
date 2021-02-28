import * as React from "react";
import appConstants from "../../util/constants";

function SvgDog(props) {
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
        d="M336 216l-24 32-40 16-24 16-16-16v-16l24-8 40-24 24-48 16.468 39.404z"
        fill="#fdc9a6"
      />
      <path d="M360 320l24 72 48 64 24-40-32-40-24-96z" fill="#a8a8a8" />
      <path d="M280 456l-16 16v16h64v-32z" fill="#683b0d" />
      <path
        d="M400 267.155V256h-64l-56 96v104h48v-96l32-32 25.26-25.26A50.324 50.324 0 00400 267.155z"
        fill="#cbcbcb"
      />
      <path
        d="M224 416v32l-16 40h32l16-40v-26l-24-30zM112 408l-27.095 20.321a8 8 0 00-2.628 9.372L96 472l24-8-8-24 16-16z"
        fill="#c38325"
      />
      <path
        d="M400 256v-98.559a18 18 0 00-3.014-9.971L376 115.93h-40l8 16-23.768 32.733a27.249 27.249 0 00-3.8 24.629 27.25 27.25 0 0013.668 15.756L336 208v48z"
        fill="#ff6268"
      />
      <path
        d="M365.933 175.822L384 224l-2.683 38.78L372 280l16.425 14.606L408 291l8-75-18.247-51.752a16.931 16.931 0 00-21.942-10.212 16.932 16.932 0 00-9.878 21.786z"
        fill="#fdc9a6"
      />
      <path d="M432 456v24h32l16-40-24-24z" fill="#683b0d" />
      <path
        d="M328 59.93v32a8 8 0 008 8h8v16h32v-16l8-24h-16l-8-16z"
        fill="#fdc9a6"
      />
      <path
        d="M328 59.93l-3.13-9.389a20.165 20.165 0 017.945-23.154 20.162 20.162 0 0122.37 0L368 35.93h14.774a14.928 14.928 0 0113.352 8.252 14.928 14.928 0 01-.931 14.956L384 75.93h-16l-8-16z"
        fill="#683b0d"
      />
      <path
        d="M264 344a36.612 36.612 0 008.845-37.466L272 304l12.172 3.043a32.3 32.3 0 0123.836 25 32.3 32.3 0 01-12.291 32.171L280 376z"
        fill="#c38325"
      />
      <path
        d="M64 320l-16 8-8 16-16 8 16 32 32-8 24 8 4.032 16.127a32 32 0 0019.16 21.95L144 432v16l-16 40h32l16-32v-24l48-16 8-24 32 40 27 16 14.372 40H328l-8-56-24-24v-16.4a49.1 49.1 0 00-18.427-38.34 78.763 78.763 0 00-49.2-17.26H213.6a78.758 78.758 0 00-11.138.792l-32.231 4.6a78.007 78.007 0 01-35.7-3.219L104 328l-24-32z"
        fill="#ea9d2d"
      />
      <path
        d="M245.66 277.66c-.49.49-112.05 64.35-112.05 64.35l-30.95 46.43a8 8 0 11-13.32-8.88l32-48a8.08 8.08 0 012.69-2.51l110.1-62.92z"
        fill="#0292c9"
      />
      <circle cx={72} cy={343} fill="#c38325" r={7} />
    </svg>
  );
}

export default SvgDog;
