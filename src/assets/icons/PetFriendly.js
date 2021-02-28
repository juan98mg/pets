import * as React from "react";
import appConstants from "../../util/constants";

function SvgPetFriendly(props) {
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
        d="M50.859 395.5C25.655 356.993 11 310.958 11 261.5c0-135.31 109.69-245 245-245s245 109.69 245 245c0 49.458-14.655 95.493-39.859 134z"
        fill="#003278"
      />
      <path
        d="M301.271 193.732v205.373H84.972v-5.852c-22.802-6.687-39.502-27.796-39.502-52.732 0-8.275 6.708-14.984 14.984-14.984s14.984 6.709 14.984 14.984c0 7.947 3.731 15.039 9.534 19.616V193.732c0-52.467 42.533-95 95-95h26.299c52.467 0 95 42.533 95 95z"
        fill="#d54d00"
      />
      <path
        d="M301.271 192.897v206.209H112.942V192.897c0-52.006 42.159-94.164 94.164-94.164 52.006-.001 94.165 42.158 94.165 94.164z"
        fill="#ef5300"
      />
      <path
        d="M193.122 405.5c-5.523 0-10-4.477-10-10v-120c0-5.523 4.477-10 10-10s10 4.477 10 10v120c0 5.523-4.478 10-10 10z"
        fill="#d54d00"
      />
      <path
        d="M263.934 356.125V390.5c0 8.284-6.716 15-15 15h-36.95c-8.284 0-15-6.716-15-15v-34.375c0-8.284 6.716-15 15-15h36.95c8.284 0 15 6.716 15 15zm-89.675-15H137.31c-8.284 0-15 6.716-15 15V390.5c0 8.284 6.716 15 15 15h36.949c8.284 0 15-6.716 15-15v-34.375c0-8.284-6.716-15-15-15z"
        fill="#fc7117"
      />
      <path
        d="M132.658 91.442c13.622-14.49 32.097-22.63 51.361-22.63h18.205c19.264 0 37.739 8.14 51.361 22.63 28.366 30.173 28.366 79.094 0 109.267l-15.804 16.811c-11.382 12.107-24.933 20.499-39.322 25.176a17.249 17.249 0 01-10.676 0c-14.389-4.677-27.941-13.069-39.322-25.176l-15.804-16.811c-28.365-30.173-28.366-79.093.001-109.267z"
        fill="#fc9302"
      />
      <path
        d="M162.096 16.5h62.05c18.91 0 37.045 6.967 50.416 19.369 27.844 25.825 27.844 67.695 0 93.52l-15.513 14.388c-36.411 33.771-95.445 33.771-131.857 0l-15.513-14.388c-27.844-25.825-27.844-67.695 0-93.52C125.052 23.467 143.187 16.5 162.096 16.5z"
        fill="#fdb44c"
      />
      <path
        d="M261.248 141.738l-2.198 2.039c-36.411 33.771-95.445 33.771-131.857 0l-15.513-14.388c-27.844-25.825-27.844-67.695 0-93.52 7.621-7.069 16.79-12.372 26.768-15.626-23.045 25.977-21.479 64.439 4.699 88.719l15.513 14.388c27.736 25.724 68.597 31.853 102.588 18.388z"
        fill="#fc9302"
      />
      <path
        d="M195.106 193.641h-3.97c-6.6 0-12-5.4-12-12v-50.586c0-6.6 5.4-12 12-12h3.97c6.6 0 12 5.4 12 12v50.586c0 6.6-5.4 12-12 12z"
        fill="#f52c2c"
      />
      <path
        d="M253.722 142.363c0 18.022-14.609 32.631-32.631 32.631-11.87 0-22.26-6.338-27.97-15.815-5.71 9.477-16.099 15.815-27.97 15.815-18.022 0-32.631-14.609-32.631-32.631s14.609-32.631 32.631-32.631h13.985a18.603 18.603 0 0113.985 6.313 18.603 18.603 0 0113.985-6.313h13.985c18.022 0 32.631 14.61 32.631 32.631z"
        fill="#ffdf8e"
      />
      <path
        d="M173.892 173.811a32.643 32.643 0 01-8.74 1.184c-18.022 0-32.631-14.609-32.631-32.631s14.609-32.631 32.631-32.631h13.985c.507 0 1.009.02 1.505.06C163.547 110.82 150 125.01 150 142.363c0 14.995 10.114 27.627 23.892 31.448z"
        fill="#fbc56d"
      />
      <path
        d="M158.5 135.549a5 5 0 11-10.001-.001 5 5 0 0110.001.001zm6.5 14.444a5 5 0 10.001 10.001 5 5 0 00-.001-10.001zm52.333 1.355a5 5 0 10.001 10.001 5 5 0 00-.001-10.001zM223 135.549a5 5 0 10.001 10.001A5 5 0 00223 135.55z"
        fill="#fbc56d"
      />
      <path
        d="M169.813 81.762c0 7.724-6.261 13.985-13.985 13.985s-13.985-6.261-13.985-13.985 6.261-13.985 13.985-13.985c7.724.001 13.985 6.262 13.985 13.985zm60.602-13.984c-7.724 0-13.985 6.261-13.985 13.985s6.261 13.985 13.985 13.985S244.4 89.487 244.4 81.763s-6.262-13.985-13.985-13.985z"
        fill="#3f4a4a"
      />
      <path
        d="M168.881 74.77a6.992 6.992 0 11-13.984 0 6.992 6.992 0 0113.984 0zm67.594-6.992a6.992 6.992 0 100 13.984 6.992 6.992 0 000-13.984z"
        fill="#fff5f5"
      />
      <path
        d="M150.3 19.168l-26.306 66.728c-3.361 8.525-12.145 14.2-21.979 14.2-11.908 0-21.915-8.253-23.242-19.168l-6.254-51.451C70.965 16.69 81.812 5.5 95.76 5.5h45.237c7.054 0 11.89 7.106 9.303 13.668zM290.483 5.5h-45.237c-7.053 0-11.89 7.106-9.303 13.668l26.306 66.728c3.361 8.525 12.145 14.2 21.979 14.2 11.908 0 21.915-8.253 23.242-19.168l6.254-51.451C315.279 16.69 304.431 5.5 290.483 5.5z"
        fill="#fc7117"
      />
      <path
        d="M292.848 98.58a25.064 25.064 0 01-8.62 1.515c-9.834 0-18.618-5.675-21.979-14.2l-26.306-66.728c-2.587-6.562 2.25-13.668 9.303-13.668h9.887c-3.527 0-5.945 3.553-4.652 6.834l29.001 73.562c2.331 5.915 7.274 10.458 13.366 12.685zM95.31 80.927l-6.254-51.451C87.502 16.69 98.349 5.5 112.298 5.5H95.76c-13.948 0-24.796 11.19-23.242 23.976l6.254 51.451c1.327 10.915 11.334 19.168 23.242 19.168 2.882 0 5.673-.487 8.265-1.391-7.999-2.792-13.966-9.523-14.969-17.777z"
        fill="#ef5300"
      />
      <path
        d="M200.114 167.359a10.647 10.647 0 00-13.903-.07l-.083.07v-48.303h13.985v48.303z"
        fill="#fdbf43"
      />
      <path
        d="M186.539 102.795h13.164c4.012 0 7.859 1.168 10.696 3.247 5.907 4.329 5.907 11.349 0 15.678l-3.291 2.412c-7.725 5.662-20.249 5.662-27.974 0l-3.291-2.412c-5.907-4.329-5.907-11.349 0-15.678 2.837-2.079 6.685-3.247 10.696-3.247z"
        fill="#fd4fb6"
      />
      <path
        d="M214.34 116.686c-7.764 5.161-19.772 4.997-27.265-.495l-3.291-2.412c-3.616-2.65-5.018-6.308-4.208-9.739 2.132-.81 4.516-1.245 6.963-1.245h13.164c4.012 0 7.859 1.168 10.696 3.247 3.936 2.884 5.249 6.963 3.941 10.644z"
        fill="#fd73c4"
      />
      <path
        d="M335.873 449.507h-32c-49.706 0-90-40.294-90-90v-40c0-49.706 40.294-90 90-90h32c49.706 0 90 40.294 90 90v40c0 49.706-40.295 90-90 90z"
        fill="#87a0af"
      />
      <path
        d="M335.873 449.507c-49.706 0-90-40.294-90-90v-40c0-49.706 40.294-90 90-90s90 40.294 90 90v40c0 49.706-40.295 90-90 90z"
        fill="#9bb9c3"
      />
      <path
        d="M320 395.5a7.5 7.5 0 01-7.5-7.5v-65a7.5 7.5 0 0115 0v65a7.5 7.5 0 01-7.5 7.5z"
        fill="#87a0af"
      />
      <path
        d="M368.564 368.5v20c0 8.284-6.716 15-15 15h-22A14.969 14.969 0 01320 398.055a14.968 14.968 0 01-11.563 5.445h-22c-8.284 0-15-6.716-15-15v-20c0-8.284 6.716-15 15-15h22c4.654 0 8.812 2.119 11.563 5.445a14.969 14.969 0 0111.564-5.445h22c8.284 0 15 6.716 15 15z"
        fill="#e1ebf0"
      />
      <path
        d="M472.87 295.243l-4.302 12.906a39.95 39.95 0 01-37.947 27.351h-56.978c-5.514 0-10 4.486-10 10s4.486 10 10 10h51.242c8.284 0 15 6.716 15 15s-6.716 15-15 15h-51.242c-22.056 0-40-17.944-40-40s17.944-40 40-40h56.978a9.986 9.986 0 009.486-6.838l4.302-12.905c2.619-7.859 11.11-12.106 18.974-9.487 7.859 2.619 12.106 11.114 9.487 18.973zm-196.575-55.825c-14.899 13.215-14.899 34.641 0 47.855l8.301 7.362c19.483 17.281 51.071 17.281 70.554 0l8.301-7.362c14.899-13.215 14.899-34.64 0-47.855-7.155-6.346-16.858-9.911-26.977-9.911h-33.202c-10.118 0-19.822 3.565-26.977 9.911z"
        fill="#b4d2d7"
      />
      <path
        d="M402.507 91.119c12.896 12.471 16.704 37.793 8.04 63.224s-27.141 43.16-44.968 45.164c-12.896-12.471-16.704-37.793-8.04-63.224s27.141-43.16 44.968-45.164zm-165.269 0c-12.896 12.471-16.704 37.793-8.04 63.224s27.141 43.16 44.968 45.164c12.896-12.471 16.704-37.793 8.04-63.224s-27.141-43.16-44.968-45.164z"
        fill="#87a0af"
      />
      <path
        d="M410.548 154.343c-5.076 14.9-13.521 27.156-23.23 35.155l-.079.009c-12.895-12.471-16.704-37.793-8.04-63.224 4.98-14.616 13.201-26.688 22.677-34.692a4.873 4.873 0 012.534 1.535c11.349 13.047 14.36 37.084 6.138 61.217zm-181.35 0c5.076 14.9 13.521 27.156 23.23 35.155l.079.009c12.895-12.471 16.704-37.793 8.04-63.224-4.98-14.616-13.201-26.688-22.677-34.692a4.873 4.873 0 00-2.534 1.535c-11.349 13.047-14.36 37.084-6.138 61.217z"
        fill="#fd92d2"
      />
      <path
        d="M291.588 119.507h56.569a65 65 0 0145.962 19.038c25.384 25.384 25.384 66.54 0 91.924l-14.142 14.142c-33.195 33.195-87.014 33.195-120.208 0l-14.142-14.142c-25.384-25.384-25.384-66.54 0-91.924a64.996 64.996 0 0145.961-19.038z"
        fill="#9bb9c3"
      />
      <path
        d="M274.626 138.545a65 65 0 0145.962-19.038h27.569a65 65 0 0145.962 19.038c25.384 25.384 25.384 66.54 0 91.924l-14.142 14.142c-10.398 10.398-26.745 20.506-41.443 25.54-7.865 2.693-16.492 1.899-23.692-2.255-9.463-5.46-17.052-14.264-26.072-23.284l-14.142-14.142c-25.386-25.385-25.386-66.541-.002-91.925z"
        fill="#b4d2d7"
      />
      <path
        d="M302.422 159.993h34.902c10.636 0 20.837 5 28.358 13.9 15.661 18.533 15.661 48.58 0 67.113l-8.725 10.325c-20.48 24.235-53.686 24.235-74.166 0l-8.725-10.325c-15.661-18.533-15.661-48.58 0-67.113 7.519-8.9 17.72-13.9 28.356-13.9z"
        fill="#e1ebf0"
      />
      <path
        d="M320.103 159.993h17.22c10.636 0 20.836 5 28.357 13.9 15.661 18.533 15.661 48.58 0 67.113l-8.726 10.325c-7.983 9.447-17.899 15.211-28.242 17.293-10.343-2.082-20.259-7.846-28.242-17.293l-8.725-10.325c-15.661-18.533-15.661-48.58 0-67.113 7.522-8.9 17.722-13.9 28.358-13.9z"
        fill="#fff5f5"
      />
      <path
        d="M345.749 244.717c-6.997 6.997-17.625 8.206-25.876 3.625-8.251 4.58-18.879 3.372-25.876-3.625a5.916 5.916 0 118.367-8.367c3.1 3.1 7.767 3.7 11.474 1.801.038-.086.077-.171.119-.255v-18.389h11.833v18.389c.042.084.082.169.119.255 3.707 1.899 8.374 1.299 11.474-1.801a5.916 5.916 0 118.366 8.367z"
        fill="#87a0af"
      />
      <path
        d="M312.7 191.558h14.346c4.372 0 8.565 1.215 11.656 3.379 6.437 4.505 6.437 11.809 0 16.314l-10.759 7.53c-4.457 3.119-11.682 3.119-16.139 0l-10.759-7.53c-6.437-4.505-6.437-11.809 0-16.314 3.09-2.164 7.283-3.379 11.655-3.379z"
        fill="#fd73c4"
      />
      <path
        d="M342.413 207.274c-3.732 2.007-8.649 3.226-14.038 3.226-11.667 0-21.125-5.714-21.125-12.763 0-2.164.892-4.202 2.465-5.988a23.384 23.384 0 012.985-.192h14.346c4.372 0 8.565 1.215 11.656 3.379 4.766 3.336 6.003 8.206 3.711 12.338z"
        fill="#fd92d2"
      />
      <path
        d="M293.58 223.114a5 5 0 01-3.312 6.247c-19.084 5.861-44.735 21.371-57.179 34.575a4.997 4.997 0 01-7.068.209 5 5 0 01-.21-7.068c13.672-14.507 40.696-30.881 61.52-37.276a5.001 5.001 0 016.249 3.313zm-5.193-10.454a5 5 0 00-.796-9.968c-18.087 1.445-47.515-4.258-65.599-12.713a5 5 0 00-4.235 9.059c19.734 9.226 50.759 15.21 70.63 13.622zm64.027 7.142c-2.638-.813-5.438.672-6.248 3.312a5 5 0 003.312 6.247c19.083 5.861 44.735 21.371 57.179 34.575a4.996 4.996 0 007.067.209 5 5 0 00.209-7.068c-13.671-14.506-40.695-30.88-61.519-37.275zm71.987-27.412a5 5 0 00-6.647-2.412c-18.084 8.455-47.513 14.158-65.599 12.713a4.995 4.995 0 00-5.383 4.586 5 5 0 004.585 5.382c19.872 1.588 50.897-4.396 70.631-13.622a4.998 4.998 0 002.413-6.647zm-119.096-16.556a5 5 0 003.048-6.381 16.951 16.951 0 00-15.957-11.281c-7.16 0-13.573 4.534-15.957 11.282a5 5 0 009.43 3.331c.975-2.759 3.598-4.613 6.527-4.613s5.554 1.854 6.529 4.614a5.003 5.003 0 006.38 3.048zm54.953 0a5 5 0 003.048-6.381c-2.385-6.747-8.797-11.281-15.956-11.281s-13.572 4.534-15.957 11.281a5 5 0 109.428 3.333c.976-2.76 3.6-4.614 6.529-4.614s5.553 1.854 6.528 4.614a5.003 5.003 0 006.38 3.048z"
        fill="#607882"
      />
      <path
        d="M461.198 395.412C417.457 462.303 341.89 506.5 256 506.5S94.544 462.303 50.802 395.412A42.628 42.628 0 0152.5 393c5.491-7.241 19.3-20.525 65-21 68.423-.711 79.788 8.898 138.5 13.5 58.712-4.602 70.077-14.211 138.5-13.5 45.7.475 59.509 13.759 65 21a41.628 41.628 0 011.698 2.412z"
        fill="#0cc33c"
      />
      <path
        d="M449.948 411.216C405.141 469.176 334.929 506.5 256 506.5c-85.89 0-161.456-44.197-205.198-111.088A42.628 42.628 0 0152.5 393c5.197-6.853 17.844-19.118 57.921-20.816 44.928 54.982 113.271 90.082 189.813 90.082 56.38 0 108.312-19.044 149.714-51.05z"
        fill="#46853e"
      />
      <path
        d="M509.061 418.337c-4.515 4.416-9.791 8.191-15.64 11.158-2.755 1.398-6.162.053-7.059-2.904-3.032-9.993-11.14-19.087-22.51-24.093-71.383 27.553-177.104 30.313-207.806 30.502-30.794-.189-136.515-2.949-207.898-30.501-11.37 5.006-19.478 14.1-22.51 24.093-.897 2.956-4.303 4.301-7.058 2.904-5.85-2.967-11.125-6.743-15.64-11.158a9.813 9.813 0 01-2.324-10.414c4.866-12.996 19.34-22.424 36.438-22.424 5.389 0 16.054 2.835 16.492 3.003 69.004 26.637 172.441 29.312 202.5 29.497 29.967-.185 133.404-2.86 202.409-29.497.438-.169 11.104-3.003 16.492-3.003 17.098 0 31.572 9.427 36.438 22.424a9.81 9.81 0 01-2.324 10.413z"
        fill="#fdbf43"
      />
      <path
        d="M70 395.5c0 8.284-6.716 15-15 15s-15-6.716-15-15 6.716-15 15-15 15 6.716 15 15zm387-15c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15z"
        fill="#f4aa39"
      />
      <path
        d="M281 368.937c0 12.944-11.193 23.438-25 23.438s-25-10.493-25-23.438c0-12.944 11.193-23.438 25-23.438s25 10.494 25 23.438zm-25 79.688c-13.807 0-25 10.493-25 23.438 0 12.944 11.193 23.438 25 23.438s25-10.493 25-23.438-11.193-23.438-25-23.438zM204.437 395.5c-12.944 0-23.438 11.193-23.438 25s10.493 25 23.438 25 23.438-11.193 23.438-25-10.493-25-23.438-25zm103.125 0c-12.944 0-23.438 11.193-23.438 25s10.493 25 23.438 25S331 434.307 331 420.5s-10.493-25-23.438-25z"
        fill="#fded32"
      />
      <path
        d="M237.217 366.362c9.153 9.153 8.658 24.487-1.105 34.25s-25.097 10.258-34.25 1.105-8.658-24.487 1.105-34.25 25.098-10.258 34.25-1.105zm38.67 74.025c-9.763 9.763-10.258 25.098-1.105 34.25 9.153 9.153 24.487 8.658 34.25-1.105s10.258-25.098 1.105-34.25c-9.152-9.152-24.487-8.658-34.25 1.105zm-74.025-1.104c-9.153 9.153-8.658 24.487 1.105 34.25s25.098 10.258 34.25 1.105c9.153-9.153 8.658-24.487-1.105-34.25-9.763-9.764-25.097-10.258-34.25-1.105zm108.276-37.566c9.153-9.153 8.658-24.487-1.105-34.25s-25.098-10.258-34.25-1.105c-9.153 9.153-8.658 24.487 1.105 34.25 9.762 9.764 25.097 10.258 34.25 1.105z"
        fill="#f1ca50"
      />
      <path
        d="M311 420.5c0 30.376-24.624 55-55 55s-55-24.624-55-55 24.624-55 55-55 55 24.624 55 55z"
        fill="#fd2aa7"
      />
      <path
        d="M311 420.5c0 8.87-2.1 17.25-5.83 24.67-7.42 3.73-15.8 5.83-24.67 5.83-30.376 0-55-24.624-55-55 0-8.87 2.1-17.25 5.83-24.67 7.419-3.73 15.799-5.83 24.67-5.83 30.376 0 55 24.624 55 55z"
        fill="#fd73c4"
      />
      <path
        d="M302.732 387.809l-42.257 58.103a7.497 7.497 0 01-5.818 3.085c-.083.002-.165.004-.247.004a7.502 7.502 0 01-5.762-2.699l-26.41-31.692a7.5 7.5 0 0111.523-9.603l20.246 24.295 36.594-50.315c2.437-3.351 7.127-4.09 10.477-1.654s4.091 7.126 1.654 10.476z"
        fill="#fff5f5"
      />
    </svg>
  );
}

export default SvgPetFriendly;
