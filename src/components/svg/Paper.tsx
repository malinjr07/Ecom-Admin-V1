import React from "react";

export default function Paper({ fill }: any) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7087 1.46094H4.87533C4.42225 1.46094 3.98773 1.64092 3.66735 1.9613C3.34698 2.28167 3.16699 2.71619 3.16699 3.16927V16.8359C3.16699 17.289 3.34698 17.7235 3.66735 18.0439C3.98773 18.3643 4.42225 18.5443 4.87533 18.5443H15.1253C15.5784 18.5443 16.0129 18.3643 16.3333 18.0439C16.6537 17.7235 16.8337 17.289 16.8337 16.8359V6.58594M11.7087 1.46094L16.8337 6.58594M11.7087 1.46094L11.7087 6.58594H16.8337M13.417 10.8568H6.58366M13.417 14.2734H6.58366M8.29199 7.4401H6.58366"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
