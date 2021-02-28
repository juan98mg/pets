import * as React from "react";
import appConstants from "../../util/constants";

function SvgTools(props) {
  const { height, width } = props;

  return (
    <svg
      height={height ? height : appConstants.DEFAULT_HEIGHT}
      width={width ? width : appConstants.DEFAULT_WIDTH}
      viewBox="-5 1 511 511.999"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M501.258 261.617c0 121.16-86.059 222.219-200.387 245.383-16.156 3.273-32.871 3.973-49.992 3.973-17.902 0-35.367-.86-52.207-4.43a248.41 248.41 0 01-48.633-15.688c-18.426-8.113-35.687-19.41-51.465-31.515-19.191-14.73-36.187-31.156-50.414-50.746C18.18 367.32.5 316.535.5 261.617.5 123.336 112.598 11.242 250.879 11.242s250.379 112.094 250.379 250.375zm0 0"
        fill="#c0fbff"
      />
      <path
        d="M129.605 210.078H68.29c-11.289 0-20.437-9.152-20.437-20.441l46.761-74.82c2.004-3.204 6.668-3.204 8.668 0l46.766 74.82c0 11.289-9.152 20.441-20.442 20.441zm0 0"
        fill="#ffe49f"
      />
      <path
        d="M129.605 210.078h-26.57c-11.289 0-20.437-9.152-20.437-20.441l33.722-53.957 33.727 53.957c0 11.289-9.152 20.441-20.442 20.441zm0 0"
        fill="#fff5f5"
      />
      <path d="M150.047 404.246H47.852v-214.61h102.195zm0 0" fill="#ffcf48" />
      <path d="M82.598 404.246H47.852v-214.61h34.746zm0 0" fill="#fa0" />
      <path
        d="M76.953 143.07l17.66-28.254c2-3.203 6.664-3.203 8.668 0l17.66 28.254zm0 0"
        fill="#024c67"
      />
      <path
        d="M150.047 408.508v82.351c-40.836-17.988-75.95-46.586-101.875-82.277-4.695-.922-8.242-5.055-8.242-10.023 0-5.645 4.574-10.22 10.218-10.22h97.598c5.645 0 10.219 4.575 10.219 10.22 0 4.851-3.387 8.906-7.918 9.949zm0 0"
        fill="#7ed4f2"
      />
      <path
        d="M82.598 447.008a251.774 251.774 0 01-34.453-38.43 10.193 10.193 0 01-8.2-10.61c.309-5.464 5.059-9.628 10.535-9.628h32.118c-5.645 0-10.22 4.574-10.22 10.219 0 3.757 2.028 7.039 5.048 8.816 3.168 1.863 5.172 5.203 5.172 8.879zm0 0M434.586 130.516l-8.39 4.847v201.88c0 .968-.786 1.757-1.759 1.757h-43.253a1.759 1.759 0 01-1.762-1.758V135.363l-8.387-4.847c-9.61-5.547-13.832-17.207-10.004-27.621l36.426-99.157c1.828-4.984 8.875-4.984 10.707 0l36.426 99.157c3.824 10.414-.395 22.074-10.004 27.62zM282.773 51.883c-4.007-2.262-8.972.629-8.972 5.23v58.196c0 13.027-10.133 24.12-23.153 24.586-13.668.488-24.902-10.45-24.902-24.012v-58.77c0-4.601-4.965-7.492-8.976-5.23-20.458 11.535-34.274 33.457-34.274 58.617v10.188c0 28.93 18.266 53.59 43.89 63.093v325.43c0 .973.79 1.762 1.759 1.762h43.257c.97 0 1.758-.79 1.758-1.762V183.78c25.625-9.504 43.89-34.164 43.89-63.094V110.5c-.003-25.16-13.82-47.082-34.277-58.617zm0 0"
        fill="#50b0d6"
      />
      <path
        d="M317.047 110.5v9.18c0 29.058-18.168 54.304-43.887 64.023v103.203c0 6.594-5.16 12.254-11.754 12.375-6.719.121-12.203-5.285-12.203-11.976v-85.567c0-7.316-5.172-13.636-12.355-15.031a66.901 66.901 0 01-29.61-13.898c-10.742-8.778-11.441-24.973-1.633-34.782 8.149-8.148 20.934-9.117 30.356-2.48a23.945 23.945 0 0014.043 4.363c13.094-.125 23.793-11.512 23.793-24.605V57.109c0-4.57 4.922-7.507 8.902-5.27 20.496 11.528 34.348 33.474 34.348 58.661zm127.543-7.605l-36.426-99.16c-.996-2.704-3.523-3.926-5.926-3.696v236.168c0 6.613 5.364 11.977 11.98 11.977 6.614 0 11.977-5.364 11.977-11.977V135.359l8.39-4.843c9.61-5.547 13.83-17.207 10.005-27.621zm0 0"
        fill="#7ed4f2"
      />
      <path
        d="M87.195 429.215v20.441c0 .457-.043.89-.097 1.332a251.545 251.545 0 01-20.34-19.703v-2.07c0-5.645 4.574-10.219 10.219-10.219 5.64 0 10.218 4.574 10.218 10.219zm33.723-10.219c-5.645 0-10.219 4.574-10.219 10.219v20.441c0 5.645 4.574 10.219 10.219 10.219s10.223-4.574 10.223-10.219v-20.441c0-5.645-4.578-10.219-10.223-10.219zm0 0"
        fill="#08c"
      />
      <path
        d="M451.61 298.855h-5.516c4.855 5.426 7.812 12.586 7.812 20.438v88.875c-25.953 35.902-61.187 64.617-102.195 82.68V319.293c0-7.852 2.957-15.012 7.812-20.438h-5.511c-5.645 0-10.219-4.574-10.219-10.218s4.574-10.219 10.219-10.219h97.597c5.645 0 10.22 4.574 10.22 10.219s-4.575 10.218-10.22 10.218zm-153.04 30.66h-97.597c-5.645 0-10.22 4.575-10.22 10.22s4.575 10.218 10.22 10.218h5.515a30.53 30.53 0 00-7.812 20.442v136.14A251.443 251.443 0 00250.879 512c17.121 0 33.836-1.723 49.992-5V370.39c0-7.85-2.957-15.011-7.812-20.437h5.511c5.645 0 10.22-4.574 10.22-10.219s-4.575-10.218-10.22-10.218zm0 0"
        fill="#ff895a"
      />
      <path
        d="M223.2 339.746c0 3.754 2.03 7.04 5.05 8.813 3.168 1.863 5.172 5.203 5.172 8.879v153.957a250.244 250.244 0 01-34.746-4.852v-136.14a30.53 30.53 0 017.812-20.442h-5.515c-5.868 0-10.582-4.945-10.196-10.898.352-5.434 5.106-9.54 10.547-9.54h32.098c-5.645 0-10.223 4.579-10.223 10.223zM381.94 295.61c-3.285-2.25-5.703-4.761-5.703-6.964 0-5.641 4.578-10.22 10.223-10.22h-32.098c-5.445 0-10.199 4.11-10.55 9.54-.383 5.953 4.328 10.902 10.199 10.902h5.511a30.539 30.539 0 00-7.812 20.438v171.554a249.504 249.504 0 0034.746-18.707V304.086c0-3.402-1.71-6.555-4.516-8.477zm0 0"
        fill="#ff6466"
      />
      <path
        d="M238.02 380.605v131.063a251.17 251.17 0 01-20.438-1.871V380.605c0-5.644 4.574-10.218 10.219-10.218s10.219 4.574 10.219 10.218zm33.722-10.218c-5.64 0-10.219 4.574-10.219 10.218V511.77c6.891-.286 13.707-.856 20.442-1.692V380.605c0-5.644-4.578-10.218-10.223-10.218zm153.04-51.098c-5.645 0-10.22 4.574-10.22 10.219v121.574A250.932 250.932 0 00435 431.266V329.508c0-5.645-4.574-10.219-10.219-10.219zm-43.946 0c-5.64 0-10.219 4.574-10.219 10.219v152.047a250.787 250.787 0 0020.442-12.453V329.508c0-5.645-4.579-10.219-10.223-10.219zm0 0"
        fill="#ff393a"
      />
    </svg>
  );
}

export default SvgTools;
