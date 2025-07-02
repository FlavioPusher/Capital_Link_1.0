import React, { useState } from "react";

const ArrowRightIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 17L17 7M17 7V17M17 7H7"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MapPinIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.9043 20.3398L12.042 20.2188C11.9959 20.2606 11.9499 20.3028 11.9033 20.3447C11.8521 20.2986 11.8016 20.252 11.751 20.2061L11.9043 20.3398ZM18.5 10.2959C18.5 11.6024 17.9838 13.098 16.8838 14.7949C17.9327 13.1325 18.5 11.6269 18.5 10.2959ZM5.31738 10.5996C5.39575 11.8542 5.95359 13.2564 6.92285 14.793C5.90786 13.2267 5.3906 11.8324 5.31738 10.5996ZM11.9004 9C12.2131 9.00001 12.4677 9.10511 12.6914 9.32715C12.9143 9.54848 13.0195 9.80104 13.0195 10.1123C13.0195 10.4248 12.9145 10.6797 12.6924 10.9033C12.4713 11.126 12.2186 11.2305 11.9072 11.2305C11.5946 11.2304 11.3398 11.1262 11.1162 10.9043C10.8933 10.683 10.7882 10.4303 10.7881 10.1191C10.7881 9.80663 10.8932 9.55179 11.1152 9.32812C11.3364 9.10534 11.589 9 11.9004 9ZM5.33691 9.58008C5.34307 9.50586 5.35224 9.43245 5.36035 9.35938C5.35221 9.43253 5.34309 9.50595 5.33691 9.58008ZM18.3955 8.97461C18.4277 9.17208 18.4526 9.37379 18.4697 9.58008C18.4526 9.37443 18.4278 9.17267 18.3955 8.97461ZM18.2705 8.37305C18.286 8.43388 18.3015 8.4949 18.3154 8.55664C18.3016 8.49494 18.2859 8.43396 18.2705 8.37305ZM5.49121 8.55469C5.50499 8.49351 5.52179 8.43334 5.53711 8.37305C5.52189 8.43341 5.5049 8.49354 5.49121 8.55469ZM18.3281 8.61719C18.3477 8.70778 18.3666 8.79907 18.3828 8.8916C18.3667 8.79919 18.3476 8.70791 18.3281 8.61719Z"
      stroke="white"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.1497 19.1505H16.1405V14.4379C16.1405 13.314 16.1205 11.8679 14.5754 11.8679C13.0083 11.8679 12.7681 13.0919 12.7681 14.3568V19.1505H9.75992V9.45912H12.649V10.7831H12.689C13.2785 9.77636 14.3733 9.1749 15.5391 9.21793C18.5893 9.21793 19.1507 11.2245 19.1507 13.8334L19.1497 19.1505ZM6.36446 8.13411C5.39976 8.13411 4.6182 7.35252 4.6182 6.38778C4.6182 5.42305 5.39976 4.64145 6.36446 4.64145C7.32916 4.64145 8.11072 5.42305 8.11072 6.38778C8.11072 7.35252 7.32916 8.13411 6.36446 8.13411ZM7.86855 19.1505H4.85637V9.45912H7.86855V19.1505ZM20.6498 1.84733H3.34428C2.52668 1.83832 1.8562 2.49382 1.84619 3.31144V20.6887C1.8562 21.5073 2.52668 22.1628 3.34428 22.1538H20.6498C21.4694 22.1638 22.1429 21.5083 22.1539 20.6887V3.31044C22.1419 2.49082 21.4684 1.83532 20.6498 1.84633"
      fill="white"
    />
  </svg>
);

const CertificateIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.8333 33.3333H8.33333C6.49238 33.3333 5 31.841 5 30V6.66668C5 4.82573 6.49238 3.33334 8.33333 3.33334H31.6667C33.5076 3.33334 35 4.82573 35 6.66668V30C35 31.841 33.5076 33.3333 31.6667 33.3333H29.1667M20 31.6667C22.7614 31.6667 25 29.4281 25 26.6667C25 23.9053 22.7614 21.6667 20 21.6667C17.2386 21.6667 15 23.9053 15 26.6667C15 29.4281 17.2386 31.6667 20 31.6667ZM20 31.6667L20.0357 31.6663L14.7145 36.9876L10.0004 32.2736L15.0328 27.2412M20 31.6667L25.3214 36.9876L30.0354 32.2736L25.0031 27.2412M15 10H25M11.6667 15.8333H28.3333"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UsersIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M36.6666 35V31.6667C36.6666 28.5603 34.542 25.9501 31.6666 25.21M25.8333 5.4846C28.2764 6.47358 29.9999 8.86885 29.9999 11.6667C29.9999 14.4645 28.2764 16.8598 25.8333 17.8487M28.3333 35C28.3333 31.8937 28.3333 30.3406 27.8258 29.1154C27.1492 27.4819 25.8513 26.1841 24.2178 25.5075C22.9927 25 21.4395 25 18.3333 25H13.3333C10.227 25 8.67384 25 7.4487 25.5075C5.81518 26.1841 4.51735 27.4819 3.84072 29.1154C3.33325 30.3406 3.33325 31.8937 3.33325 35M22.4999 11.6667C22.4999 15.3486 19.5152 18.3333 15.8333 18.3333C12.1514 18.3333 9.16659 15.3486 9.16659 11.6667C9.16659 7.98477 12.1514 5 15.8333 5C19.5152 5 22.4999 7.98477 22.4999 11.6667Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BuildingIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.3333 18.3333H10.3333C8.46641 18.3333 7.53299 18.3333 6.81995 18.6966C6.19274 19.0162 5.68281 19.5262 5.36323 20.1534C4.99992 20.8664 4.99992 21.7998 4.99992 23.6667V35M34.9999 35V10.3333C34.9999 8.46649 34.9999 7.53307 34.6366 6.82003C34.317 6.19282 33.8071 5.68289 33.1799 5.36331C32.4669 5 31.5334 5 29.6666 5H23.6666C21.7997 5 20.8663 5 20.1533 5.36331C19.5261 5.68289 19.0161 6.19282 18.6966 6.82003C18.3333 7.53307 18.3333 8.46649 18.3333 10.3333V35M36.6666 35H3.33325M24.1666 11.6667H29.1666M24.1666 18.3333H29.1666M24.1666 25H29.1666"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HandshakeIcon = () => (
  <svg
    width="34"
    height="31"
    viewBox="0 0 34 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5032 29.2371C16.721 29.2371 16.9442 29.1879 17.1728 29.0896C17.4014 28.9915 17.5863 28.8719 17.7274 28.7308L30.7211 15.7371C31.1397 15.3185 31.4629 14.8901 31.6907 14.4521C31.9182 14.014 32.032 13.5332 32.032 13.0096C32.032 12.4796 31.9182 11.9651 31.6907 11.4663C31.4629 10.9674 31.1397 10.5117 30.7211 10.0992L24.4711 3.84917C24.0586 3.43056 23.635 3.12348 23.2003 2.92792C22.7653 2.73236 22.2829 2.63459 21.7532 2.63459C21.2296 2.63459 20.7435 2.73236 20.2949 2.92792C19.846 3.12348 19.4229 3.43056 19.0257 3.84917L17.5736 5.30125L20.657 8.39417C20.9881 8.71889 21.2349 9.08861 21.3974 9.50334C21.5596 9.91778 21.6407 10.3386 21.6407 10.7658C21.6407 11.6336 21.3571 12.3511 20.7899 12.9183C20.2227 13.4856 19.5053 13.7692 18.6378 13.7692C18.2103 13.7692 17.7931 13.704 17.3861 13.5738C16.9792 13.4435 16.6132 13.2158 16.2882 12.8908L13.0991 9.71167L5.90364 16.9071C5.73503 17.076 5.6085 17.2678 5.52405 17.4825C5.43961 17.6972 5.39739 17.9135 5.39739 18.1313C5.39739 18.5246 5.5235 18.8489 5.77572 19.1042C6.02766 19.3594 6.3503 19.4871 6.74364 19.4871C6.96142 19.4871 7.18461 19.4379 7.41322 19.3396C7.64183 19.2415 7.82669 19.1219 7.9678 18.9808L13.2499 13.6988L14.4295 14.8783L9.15697 20.1604C8.98808 20.329 8.86141 20.5207 8.77697 20.7354C8.6928 20.9501 8.65072 21.1665 8.65072 21.3846C8.65072 21.7565 8.78211 22.0739 9.04489 22.3367C9.30766 22.5994 9.62489 22.7308 9.99655 22.7308C10.2146 22.7308 10.4379 22.6817 10.6666 22.5833C10.8952 22.485 11.08 22.3653 11.2211 22.2242L16.8878 16.5675L18.0674 17.7467L12.4103 23.4133C12.2628 23.5544 12.1416 23.7393 12.0466 23.9679C11.9513 24.1965 11.9036 24.4199 11.9036 24.6379C11.9036 25.0096 12.035 25.3268 12.2978 25.5896C12.5609 25.8526 12.8782 25.9842 13.2499 25.9842C13.4679 25.9842 13.6843 25.9419 13.8991 25.8575C14.1138 25.7731 14.3054 25.6464 14.4741 25.4775L20.1407 19.8204L21.3203 21L15.6536 26.6667C15.485 26.8356 15.3585 27.0381 15.2741 27.2742C15.1896 27.5103 15.1474 27.7265 15.1474 27.9229C15.1474 28.3163 15.2857 28.6336 15.5624 28.875C15.8391 29.1164 16.1527 29.2371 16.5032 29.2371ZM16.4936 30.9038C15.6367 30.9038 14.9032 30.5903 14.2932 29.9633C13.6832 29.3361 13.4156 28.5619 13.4903 27.6408C12.5459 27.6517 11.7595 27.3697 11.1311 26.795C10.5031 26.22 10.205 25.4176 10.237 24.3879C9.20725 24.3985 8.39586 24.1042 7.8028 23.505C7.20975 22.9056 6.94003 22.1154 6.99364 21.1346C6.06614 21.1454 5.29044 20.8847 4.66655 20.3525C4.04267 19.8206 3.73072 19.0801 3.73072 18.1313C3.73072 17.704 3.8135 17.2763 3.97905 16.8479C4.14461 16.4193 4.38975 16.0426 4.71447 15.7179L13.0991 7.34292L17.4036 11.6475C17.5447 11.795 17.7189 11.9163 17.9261 12.0113C18.1334 12.1063 18.3674 12.1538 18.6282 12.1538C18.9849 12.1538 19.3 12.0293 19.5736 11.7804C19.8472 11.5315 19.9841 11.2072 19.9841 10.8075C19.9841 10.5469 19.9364 10.3131 19.8411 10.1058C19.7461 9.89861 19.6249 9.72445 19.4774 9.58334L13.7436 3.84917C13.3311 3.43056 12.9021 3.12348 12.4566 2.92792C12.011 2.73236 11.5234 2.63459 10.9936 2.63459C10.47 2.63459 9.99461 2.73236 9.56739 2.92792C9.13989 3.12348 8.71669 3.43056 8.2978 3.84917L3.22405 8.9325C2.86739 9.28945 2.57905 9.71472 2.35905 10.2083C2.13878 10.7019 2.02225 11.2115 2.00947 11.7371C1.99669 12.1132 2.02878 12.4749 2.10572 12.8221C2.18267 13.1693 2.30447 13.4957 2.47114 13.8013L1.20822 15.0642C0.928221 14.6175 0.709193 14.1031 0.551138 13.5208C0.393082 12.9386 0.320443 12.344 0.333221 11.7371C0.345998 10.9807 0.497665 10.2558 0.788221 9.5625C1.07878 8.86917 1.49447 8.25222 2.0353 7.71167L7.07697 2.67C7.65808 2.095 8.27294 1.66764 8.92155 1.38792C9.56989 1.10792 10.2713 0.967918 11.0257 0.967918C11.7799 0.967918 12.4759 1.10792 13.1136 1.38792C13.7514 1.66764 14.3577 2.095 14.9324 2.67L16.3845 4.12167L17.8366 2.67C18.4177 2.095 19.0271 1.66764 19.6649 1.38792C20.3027 1.10792 20.9988 0.967918 21.7532 0.967918C22.5074 0.967918 23.2088 1.10792 23.8574 1.38792C24.5057 1.66764 25.1174 2.095 25.6924 2.67L31.9007 8.87834C32.4754 9.45306 32.9188 10.0983 33.2307 10.8142C33.5427 11.53 33.6986 12.265 33.6986 13.0192C33.6986 13.7736 33.5427 14.4697 33.2307 15.1075C32.9188 15.7453 32.4754 16.3515 31.9007 16.9263L18.907 29.9104C18.5609 30.2565 18.1842 30.5086 17.777 30.6667C17.37 30.8247 16.9422 30.9038 16.4936 30.9038Z"
      fill="currentColor"
    />
  </svg>
);

const PuzzleIcon = () => (
  <svg
    width="29"
    height="29"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.923 28.3333H2.33341C1.86536 28.3333 1.47064 28.1725 1.14925 27.8508C0.827581 27.5294 0.666748 27.1347 0.666748 26.6667V20.0771C1.61536 19.7993 2.40814 19.2742 3.04508 18.5017C3.68175 17.7292 4.00008 16.8397 4.00008 15.8333C4.00008 14.8269 3.68175 13.9375 3.04508 13.165C2.40814 12.3925 1.61536 11.8674 0.666748 11.5896V4.99999C0.666748 4.53194 0.827581 4.13722 1.14925 3.81583C1.47064 3.49416 1.86536 3.33333 2.33341 3.33333H9.00008C9.29925 2.38027 9.82494 1.61847 10.5772 1.04791C11.3291 0.477357 12.1923 0.192078 13.1667 0.192078C14.1412 0.192078 15.0044 0.477357 15.7563 1.04791C16.5086 1.61847 17.0342 2.38027 17.3334 3.33333H24.0001C24.4681 3.33333 24.8629 3.49416 25.1842 3.81583C25.5059 4.13722 25.6667 4.53194 25.6667 4.99999V11.6667C26.6198 11.9658 27.3816 12.4915 27.9522 13.2437C28.5227 13.9957 28.808 14.8589 28.808 15.8333C28.808 16.8078 28.5227 17.671 27.9522 18.4229C27.3816 19.1751 26.6198 19.7008 25.6667 20V26.6667C25.6667 27.1347 25.5059 27.5294 25.1842 27.8508C24.8629 28.1725 24.4681 28.3333 24.0001 28.3333H17.4105C17.1113 27.3292 16.5723 26.5225 15.7934 25.9133C15.0145 25.3044 14.139 25 13.1667 25C12.1945 25 11.319 25.3044 10.5401 25.9133C9.76119 26.5225 9.22217 27.3292 8.923 28.3333ZM2.33341 26.6667H7.83008C8.30453 25.5597 9.03744 24.7275 10.0288 24.17C11.0202 23.6122 12.0662 23.3333 13.1667 23.3333C14.2673 23.3333 15.3133 23.6122 16.3047 24.17C17.2961 24.7275 18.029 25.5597 18.5034 26.6667H24.0001V18.5258H24.7693C25.5684 18.3975 26.1636 18.0683 26.5547 17.5383C26.9455 17.0086 27.1409 16.4403 27.1409 15.8333C27.1409 15.2264 26.9455 14.6581 26.5547 14.1283C26.1636 13.5983 25.5684 13.2692 24.7693 13.1408H24.0001V4.99999H15.8592V4.23083C15.7309 3.43166 15.4017 2.83652 14.8717 2.44541C14.342 2.05458 13.7737 1.85916 13.1667 1.85916C12.5598 1.85916 11.9915 2.05458 11.4617 2.44541C10.9317 2.83652 10.6026 3.43166 10.4742 4.23083V4.99999H2.33341V10.4617C3.36341 10.9531 4.17647 11.686 4.77258 12.6604C5.36869 13.6346 5.66675 14.6922 5.66675 15.8333C5.66675 16.9681 5.36869 18.0225 4.77258 18.9967C4.17647 19.9711 3.36341 20.7072 2.33341 21.205V26.6667Z"
      fill="currentColor"
    />
  </svg>
);

const StarIcon = () => (
  <svg
    width="32"
    height="29"
    viewBox="0 0 32 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30.827 25.0129L27.0128 21.1667L28.1603 20.0192L32.0062 23.8333L30.827 25.0129ZM25.4999 5.62167L24.3524 4.47417L28.1666 0.660416L29.3462 1.8075L25.4999 5.62167ZM6.4999 5.65375L2.68574 1.8075L3.83324 0.660416L7.67949 4.47417L6.4999 5.65375ZM1.14074 25.0129L-0.00634766 23.8333L3.8074 20.0192L4.98699 21.1667L1.14074 25.0129ZM9.27574 24.8046L15.9999 20.7725L22.7562 24.8783L20.9966 17.2437L26.9037 12.1538L19.1216 11.4521L15.9999 4.24667L12.9103 11.4104L5.12824 12.08L11.0353 17.2437L9.27574 24.8046ZM6.73407 28.3333L9.18574 17.875L0.999903 10.8012L11.782 9.88792L15.9999 0L20.2499 9.88792L31.032 10.8012L22.8462 17.875L25.2978 28.3333L15.9999 22.7658L6.73407 28.3333Z"
      fill="currentColor"
    />
  </svg>
);

const CopyIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.33325 9.99992C2.712 9.99992 2.40137 9.99992 2.15634 9.89842C1.82964 9.7631 1.57007 9.50353 1.43475 9.17683C1.33325 8.9318 1.33325 8.62117 1.33325 7.99992V3.46659C1.33325 2.71985 1.33325 2.34648 1.47858 2.06126C1.60641 1.81038 1.81038 1.60641 2.06126 1.47858C2.34648 1.33325 2.71985 1.33325 3.46659 1.33325H7.99992C8.62117 1.33325 8.9318 1.33325 9.17683 1.43475C9.50353 1.57007 9.7631 1.82964 9.89842 2.15634C9.99992 2.40137 9.99992 2.712 9.99992 3.33325M8.13325 14.6666H12.5333C13.28 14.6666 13.6534 14.6666 13.9386 14.5213C14.1895 14.3934 14.3934 14.1895 14.5213 13.9386C14.6666 13.6534 14.6666 13.28 14.6666 12.5333V8.13325C14.6666 7.38651 14.6666 7.01315 14.5213 6.72793C14.3934 6.47705 14.1895 6.27307 13.9386 6.14524C13.6534 5.99992 13.28 5.99992 12.5333 5.99992H8.13325C7.38651 5.99992 7.01315 5.99992 6.72793 6.14524C6.47705 6.27307 6.27307 6.47705 6.14524 6.72793C5.99992 7.01315 5.99992 7.38651 5.99992 8.13325V12.5333C5.99992 13.28 5.99992 13.6534 6.14524 13.9386C6.27307 14.1895 6.47705 14.3934 6.72793 14.5213C7.01315 14.6666 7.38651 14.6666 8.13325 14.6666Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ItalianFlag = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.792 4V20H1.31938C0.592266 20 0 19.4299 0 18.7357V5.26429C0 4.56754 0.592266 4 1.31938 4H7.792Z"
      fill="#009246"
    />
    <path d="M16.2106 4V20H7.792V4H16.2106Z" fill="white" />
    <path
      d="M16.2106 20V4H22.6833C23.4077 4 24 4.56754 24 5.26429V18.7357C24 19.4299 23.4077 20 22.6833 20H16.2106Z"
      fill="#CE2B37"
    />
  </svg>
);

const EnglishFlag = () => (
  <svg
    width="23"
    height="24"
    viewBox="0 0 23 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.19583 20H21.8042C22.4667 19.9625 23 19.4083 23 18.7375V5.2625C23 4.57083 22.4375 4.00417 21.7458 4H1.25417C0.5625 4.00417 0 4.57083 0 5.2625V18.7333C0 19.4083 0.533333 19.9625 1.19583 20Z"
      fill="#FEFEFE"
    />
    <path
      d="M9.89167 13.5958V20H13.0917V13.5958H23V10.3958H13.0917V4H9.89167V10.3958H0V13.5958H9.89167Z"
      fill="#C8102E"
    />
    <path
      d="M14.1583 9.17917V4H21.7542C22.2792 4.00833 22.7292 4.3375 22.9125 4.8L14.1583 9.17917Z"
      fill="#012169"
    />
    <path
      d="M14.1583 14.8208V20L21.8042 20C22.3083 19.9708 22.7333 19.6458 22.9125 19.2L14.1583 14.8208Z"
      fill="#012169"
    />
    <path
      d="M8.825 14.8208V20L1.19583 20C0.691667 19.9708 0.2625 19.6458 0.0875 19.1917L8.825 14.8208Z"
      fill="#012169"
    />
    <path
      d="M8.825 9.17917V4H1.24583C0.720833 4.00833 0.266667 4.34167 0.0875 4.80833L8.825 9.17917Z"
      fill="#012169"
    />
    <path d="M0 9.33333H3.1875L0 7.7375V9.33333Z" fill="#012169" />
    <path d="M23 9.33333H19.7958L23 7.72917V9.33333Z" fill="#012169" />
    <path d="M23 14.6667H19.7958L23 16.2708V14.6667Z" fill="#012169" />
    <path d="M0 14.6667H3.1875L0 16.2625V14.6667Z" fill="#012169" />
    <path
      d="M23 5.35417L15.0625 9.33333H16.8375L23 6.25V5.35417Z"
      fill="#C8102E"
    />
    <path
      d="M6.14583 14.6667L0 17.7417V18.6375L7.9375 14.6667H6.14583Z"
      fill="#C8102E"
    />
    <path
      d="M4.38333 9.3375H6.15833L0 6.25417V7.14583L4.38333 9.3375Z"
      fill="#C8102E"
    />
    <path
      d="M18.5958 14.6625H16.8208L23 17.7583V16.8667L18.5958 14.6625Z"
      fill="#C8102E"
    />
  </svg>
);

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-capitalink-blue/15 backdrop-blur-md">
        <div className="max-w-screen-xl mx-auto px-4 md:px-20 py-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <img
            src="/capitallogotras.png"
            alt="CapitaLink Logo"
            className="h-16 md:h-20 object-contain"
          />
          {/* Hamburger button - mobile only */}
          <button
            className="md:hidden absolute right-6 top-6 z-50 flex flex-col justify-center items-center w-10 h-10"
            aria-label="Apri menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          {/* Desktop menu */}
          <div className="hidden md:flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-5">
            <a href="#" className="text-white text-sm md:text-base hover:text-gray-200 nav-animated-link">Chi siamo</a>
            <a href="#" className="text-white text-sm md:text-base hover:text-gray-200 nav-animated-link">I nostri servizi</a>
            <a href="#" className="text-white text-sm md:text-base hover:text-gray-200 nav-animated-link">Track record</a>
            <a href="#" className="text-white text-sm md:text-base hover:text-gray-200 nav-animated-link">Notizie</a>
            <a href="#" className="text-white text-sm md:text-base hover:text-gray-200 nav-animated-link">Carriere</a>
            <a href="#" className="text-white text-sm md:text-base hover:text-gray-200 nav-animated-link">Contatti</a>
          </div>
          {/* Mobile menu overlay */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-40 bg-black/60 md:hidden" onClick={() => setMobileMenuOpen(false)}></div>
          )}
          {/* Mobile menu */}
          <div
            className={`fixed top-0 left-0 right-0 z-50 bg-capitalink-blue/95 backdrop-blur-md shadow-lg transition-transform duration-300 md:hidden ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
            style={{ minHeight: '100vh' }}
          >
            {/* X close button */}
            <button
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white text-3xl focus:outline-none"
              aria-label="Chiudi menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              &times;
            </button>
            <div className="flex flex-col items-center justify-center gap-6 pt-24 pb-8">
              <a href="#" className="text-white text-lg font-medium hover:text-gray-200 nav-animated-link" onClick={() => setMobileMenuOpen(false)}>Chi siamo</a>
              <a href="#" className="text-white text-lg font-medium hover:text-gray-200 nav-animated-link" onClick={() => setMobileMenuOpen(false)}>I nostri servizi</a>
              <a href="#" className="text-white text-lg font-medium hover:text-gray-200 nav-animated-link" onClick={() => setMobileMenuOpen(false)}>Track record</a>
              <a href="#" className="text-white text-lg font-medium hover:text-gray-200 nav-animated-link" onClick={() => setMobileMenuOpen(false)}>Notizie</a>
              <a href="#" className="text-white text-lg font-medium hover:text-gray-200 nav-animated-link" onClick={() => setMobileMenuOpen(false)}>Carriere</a>
              <a href="#" className="text-white text-lg font-medium hover:text-gray-200 nav-animated-link" onClick={() => setMobileMenuOpen(false)}>Contatti</a>
              <div className="flex items-center gap-2 mt-4">
                <ItalianFlag />
                <span className="text-white text-lg">IT</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex flex-col justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.28) 100%), url('https://cdn.builder.io/api/v1/image/assets/TEMP/04ecf105a021318a8c2f62b73d3c1f6e1292c1d6?width=2880')`,
        }}
      >
        <div className="max-w-screen-xl px-4 md:px-20 pb-20 md:pb-60">
          <div className="max-w-3xl mt-16 md:mt-36 text-center md:text-left">
            <div className="mb-6 md:mb-8">
              <h1 className="text-3xl md:text-5xl text-white font-medium leading-tight mb-4">
                Consulenza finanziaria su misura per il tuo futuro
              </h1>
              <p className="text-lg md:text-2xl text-white leading-relaxed">
                Strategie indipendenti e personalizzate per ottimizzare
                investimenti, operazioni M&A e gestione patrimoniale.
              </p>
            </div>
            <button className="bg-capitalink-blue text-white px-4 py-2 rounded text-base font-medium btn-animated-blue">
              Scopri i nostri servizi
            </button>
          </div>
        </div>
      </section>

      {/* Chi siamo Section */}
      <section className="relative -mt-12 md:-mt-24 flex justify-center px-4 md:px-20">
        <div className="w-full bg-capitalink-blue rounded-lg p-6 md:p-10">
          <div className="mb-8 md:mb-15">
            <h2 className="text-2xl md:text-3xl text-white font-medium mb-4">Chi siamo</h2>
            <p className="text-white text-sm md:text-base leading-relaxed mb-6 md:mb-8">
              CapitaLink è una delle principali boutique indipendenti di
              consulenza finanziaria e merchant banking con uffici a Milano e a
              Roma.
              <br />
              <br />
              Fondata nel 2010 da Giancarlo Ciacciofera insieme ad un gruppo di
              professionisti legati da una storica amicizia con una vasta
              esperienza in importanti società internazionali attive nei campi
              dell'investment banking, della consulenza strategica, del
              corporate finance e di molti altri settori.
            </p>
            <a
              href="#"
              className="text-white text-sm md:text-base hover:text-gray-200 flex items-center gap-1"
            >
              <span className="underline-animated-link">Scopri di più</span>
              <ArrowRightIcon />
            </a>
            <br />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-6">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-4">
                <div className="text-white">
                  <CertificateIcon />
                </div>
                <span className="text-white text-3xl md:text-4xl font-bold">15</span>
              </div>
              <span className="text-white text-sm md:text-base text-center md:text-left">
                Gli anni di esperienza
              </span>
            </div>

            <div className="w-full md:w-px h-px md:h-22 bg-white"></div>

            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-4">
                <div className="text-white">
                  <UsersIcon />
                </div>
                <span className="text-white text-3xl md:text-4xl font-bold">20</span>
              </div>
              <span className="text-white text-sm md:text-base text-center md:text-left">
                I professionisti nel settore
              </span>
            </div>

            <div className="w-full md:w-px h-px md:h-22 bg-white"></div>

            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-4">
                <div className="text-white">
                  <BuildingIcon />
                </div>
                <span className="text-white text-3xl md:text-4xl font-bold">2</span>
              </div>
              <span className="text-white text-sm md:text-base text-center md:text-left">
                Le sedi a Milano e Roma
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Perché CapitaLink Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-screen-xl mx-auto px-4 md:px-20 flex flex-col lg:flex-row gap-8 lg:gap-0">
          <div className="flex-1 lg:pr-12">
            <div className="mb-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl text-neutral-950 font-medium mb-4">
                Perchè CapitaLink
              </h2>
              <p className="text-lg md:text-2xl text-neutral-800 leading-relaxed">
                Capitalink si rivolge ad aziende ed investitori operanti nel
                mid-market, attraverso una struttura giovane e indipendente.
                Offriamo un'ampia gamma di servizi di consulenza finanziaria
                nell'ambito di operazioni straordinarie.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 flex items-center justify-center text-capitalink-blue">
                    <HandshakeIcon />
                  </div>
                  <h3 className="text-3xl text-neutral-950 font-medium">
                    Consulenza finanziaria
                  </h3>
                </div>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  CapitaLink propone servizi di consulenza finanziaria
                  nell'ambito di operazioni straordinarie.
                </p>
                <div className="h-px bg-capitalink-blue rounded-full my-4"></div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 flex items-center justify-center text-capitalink-blue">
                    <PuzzleIcon />
                  </div>
                  <h3 className="text-3xl text-neutral-950 font-medium">
                    Debt Restructuring - Merger & Acquisitions
                  </h3>
                </div>
                <p className="text-xl text-neutral-600 leading-relaxed italic">
                  In particolare, CapitaLink ha murato vasta esperienza in
                  operazioni di{" "}
                  <span className="font-medium">Debt Restructuring</span> e{" "}
                  <span className="font-medium">Merger & Acquisitions</span>.
                </p>
                <div className="h-px bg-capitalink-blue rounded-full my-4"></div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 flex items-center justify-center text-capitalink-blue">
                    <StarIcon />
                  </div>
                  <h3 className="text-3xl text-neutral-950 font-medium">
                    Massimizzazione del valore
                  </h3>
                </div>
                <p className="text-xl text-neutral-600 leading-relaxed italic">
                  Attraverso forti e consolidate relazioni con gli stakeholders,
                  CapitaLink si propone come realtà in grado di far convergere
                  gli interessi di imprese, investitori e istituti di credito
                  verso l'obiettivo di{" "}
                  <span className="font-medium">
                    massimizzazione del valore
                  </span>
                  .
                </p>
                <div className="h-px bg-capitalink-blue rounded-full my-4"></div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/401e101d5458d77d7d5e65ebe1ddb174a954b6ce?width=1322"
              alt="Office building"
              className="w-full h-64 lg:h-full object-cover lg:rounded-l-lg"
            />
          </div>
        </div>
      </section>

      {/* Le nostre attività Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 md:px-20">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl text-neutral-950 font-medium mb-4">
              Le nostre attività
            </h2>
            <p className="text-lg md:text-2xl text-neutral-600 leading-relaxed max-w-4xl mx-auto">
              Forniamo servizi di consulenza personalizzata per supportare
              imprese e professionisti nelle principali aree della finanza e
              della strategia aziendale. Affianchiamo i nostri clienti con
              soluzioni su misura, orientate alla crescita, all'innovazione e
              all'ottimizzazione delle risorse.
            </p>
          </div>

          <div className="space-y-0">
            {/* Ristrutturazione del Debito */}
            <div className="flex flex-col lg:flex-row">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/da446e994e6b74a0a37d2c4cbb53689b7d924e78?width=1256"
                alt="Debt restructuring"
                className="w-full lg:w-1/2 h-64 lg:h-112 object-cover lg:rounded-l-lg"
              />
              <div className="w-full lg:w-1/2 bg-white p-6 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl text-capitalink-blue font-medium mb-4">
                  Ristrutturazione del Debito
                </h3>
                <p className="text-lg md:text-xl text-capitalink-blue leading-relaxed mb-6">
                  Affianchiamo imprese in difficoltà finanziaria nel rinegoziare
                  il debito con banche e creditori, definendo soluzioni
                  sostenibili per il riequilibrio finanziario e la continuità
                  aziendale.
                </p>
                <a
                  href="#"
                  className="text-capitalink-accent flex items-center gap-1"
                >
                  <span className="underline-animated-link">Scopri di più</span>
                  <ArrowRightIcon />
                </a>
              </div>
            </div>

            {/* Mergers & Acquisitions */}
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 bg-white p-6 md:p-10 flex flex-col justify-center order-2 lg:order-1">
                <h3 className="text-2xl md:text-4xl text-capitalink-blue font-medium mb-4">
                  Mergers & Acquisitions
                </h3>
                <p className="text-lg md:text-xl text-capitalink-blue leading-relaxed mb-6">
                  Supportiamo aziende e investitori in operazioni di fusione,
                  acquisizione e cessione, offrendo consulenza strategica e
                  operativa per massimizzare valore e minimizzare rischi.
                </p>
                <a
                  href="#"
                  className="text-capitalink-accent flex items-center gap-1"
                >
                  <span className="underline-animated-link">Scopri di più</span>
                  <ArrowRightIcon />
                </a>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7290a6b338700fd6d8465318158012fe2ce3553c?width=1302"
                alt="Mergers and acquisitions"
                className="w-full lg:w-1/2 h-64 lg:h-112 object-cover lg:rounded-r-lg order-1 lg:order-2"
              />
            </div>

            {/* Finanziamenti alle PMI */}
            <div className="flex flex-col lg:flex-row">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbbac082a6cff68d6b108364a2674c55f6a1d376?width=1256"
                alt="SME financing"
                className="w-full lg:w-1/2 h-64 lg:h-112 object-cover lg:rounded-l-lg"
              />
              <div className="w-full lg:w-1/2 bg-white p-6 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl text-capitalink-blue font-medium mb-4">
                  Finanziamenti alle PMI
                </h3>
                <p className="text-lg md:text-xl text-capitalink-blue leading-relaxed mb-6">
                  Supportiamo le Piccole e Medie Imprese nell'accesso a
                  finanziamenti mirati per crescita, innovazione e sviluppo.
                  Offriamo consulenza su prestiti agevolati, contributi a fondo
                  perduto e strumenti di finanza agevolata, con soluzioni su
                  misura e accesso ai principali bandi e fondi pubblici.
                </p>
                <a
                  href="#"
                  className="text-capitalink-accent flex items-center gap-1"
                >
                  <span className="underline-animated-link">Scopri di più</span>
                  <ArrowRightIcon />
                </a>
              </div>
            </div>

            {/* Capital Markets */}
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 bg-white p-6 md:p-10 flex flex-col justify-center order-2 lg:order-1">
                <h3 className="text-2xl md:text-4xl text-capitalink-blue font-medium mb-4">
                  Capital Markets
                </h3>
                <p className="text-lg md:text-xl text-capitalink-blue leading-relaxed mb-6">
                  I mercati dei capitali offrono alle imprese l'accesso a
                  risorse finanziarie tramite strumenti azionari e
                  obbligazionari. Forniamo consulenza strategica per operazioni
                  su mercati regolamentati e non, tra cui quotazioni in Borsa
                  (IPO), emissioni di bond, aumenti di capitale e strumenti di
                  finanza strutturata, facilitando il dialogo con investitori
                  istituzionali e operatori finanziari.
                </p>
                <a
                  href="#"
                  className="text-capitalink-accent flex items-center gap-1"
                >
                  <span className="underline-animated-link">Scopri di più</span>
                  <ArrowRightIcon />
                </a>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e4bdfc18bc894edccc382c31268e587ad269178?width=1304"
                alt="Capital markets"
                className="w-full lg:w-1/2 h-64 lg:h-112 object-cover lg:rounded-r-lg order-1 lg:order-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Le nostre operazioni Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-screen-xl mx-auto px-4 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4 md:gap-0">
            <div>
              <h2 className="text-2xl md:text-3xl text-capitalink-blue font-medium mb-3">
                Le nostre operazioni
              </h2>
              <p className="text-lg md:text-2xl text-capitalink-blue">
                Soluzioni finanziarie strategiche per far crescere la tua
                azienda.
              </p>
            </div>
            <a
              href="#"
              className="text-capitalink-accent flex items-center gap-1"
            >
              <span className="underline-animated-link">Vedi tutte le operazioni</span>
              <ArrowRightIcon />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { type: "Restructuring", year: "2025" },
              { type: "M&A", year: "2025" },
              { type: "Financing", year: "2025" },
              { type: "Financing", year: "2025" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-capitalink-blue rounded-lg p-4 shadow-lg"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-capitalink-blue text-white px-2 py-1 rounded text-xs">
                    {item.type}
                  </span>
                  <span className="text-capitalink-blue text-base">
                    {item.year}
                  </span>
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/08eec2452ad07dcca658f3dcde27613734553d77?width=420"
                  alt="Company logo"
                  className="w-full h-14 object-contain mb-6"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl text-capitalink-blue font-medium">
                    € 11.000.000
                  </h3>
                  <div className="space-y-2">
                    <p className="text-base text-capitalink-blue leading-relaxed">
                      Società attiva nell'attività di gestione e recupero
                      crediti sull'intero territorio nazionale, in forza di
                      specifica Licenza ex. Art. 115 del TULPS della Questura di
                      Torino.
                    </p>
                    <div className="h-px bg-neutral-300 rounded-full"></div>
                    <p className="text-base text-capitalink-blue leading-relaxed italic">
                      Ha finalizzato l'unwinding dell'operazione denominata{" "}
                      <span className="font-medium">Project Alan/Saip</span> di
                      acquisizione di crediti bancari secured con sottostante 2
                      terreni commerciali da AMCO classificati come NLPs del
                      valore nominale di ca.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notizie Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4 md:gap-0">
            <div>
              <h2 className="text-2xl md:text-3xl text-capitalink-blue font-medium mb-3">
                Notizie
              </h2>
              <p className="text-lg md:text-2xl text-capitalink-blue">
                Operazioni di successo, approfondimenti dei nostri analisti e
                altre notizie selezionate dal nostro team.
              </p>
            </div>
            <a
              href="#"
              className="text-capitalink-accent flex items-center gap-1 whitespace-nowrap"
            >
              <span className="underline-animated-link">Visualizza tutte le notizie disponibili</span>
              <ArrowRightIcon />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/ba47307cfc50a6bc21d7ec527770042453d50c13?width=604",
                date: "Milano, 23 Ottobre 2024",
                title:
                  "Capitalink e Krekoll S.R.L. in acquisizione € 10 mln di crediti npls da AMCO S.p.A.",
              },
              {
                image:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/781f9603d726cdf4e6f24b4621ec16e65b27a48e?width=604",
                date: "Roma, 15 Novembre 2025",
                title:
                  "Capitalink sta acquisendo € 15 mln di crediti deteriorati da BancaNova S.p.A.",
              },
              {
                image:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/c389272847211d9ecedc18d592e85bf4f5a66973?width=604",
                date: "Milano, 20 Novembre 2025",
                title:
                  "TechWave ha lanciato una nuova piattaforma di e-commerce da € 10 mln.",
              },
              {
                image:
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/3687b0dcd60a3b0486ccaf93d11e1616b1b500aa?width=604",
                date: "Torino, 25 Novembre 2025",
                title:
                  "EcoSolutions ha ottenuto un finanziamento di € 5 mln per progetti sostenibili.",
              },
            ].map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden relative"
              >
                <img
                  src={news.image}
                  alt="News image"
                  className="w-full h-50 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded p-1">
                  <CopyIcon />
                </div>
                <div className="p-4 border border-capitalink-blue rounded-b-lg">
                  <p className="text-sm text-neutral-600 mb-4">{news.date}</p>
                  <h3 className="text-2xl text-neutral-950 font-medium leading-tight mb-4">
                    {news.title}
                  </h3>
                  <a
                    href="#"
                    className="text-capitalink-accent flex items-center gap-1"
                  >
                    <span className="underline-animated-link">Scopri di più</span>
                    <ArrowUpRightIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="relative py-12 md:py-16 pb-16 md:pb-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url('https://cdn.builder.io/api/v1/image/assets/TEMP/ba77f37cb0ad8c838658a5904dff87c448f9fb9b?width=2880')`,
        }}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-20 flex flex-col lg:flex-row gap-8 lg:gap-15">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl text-white font-medium mb-8 md:mb-12">
              Come raggiungerci
            </h2>
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-white text-lg font-bold block mb-2">
                    Sede di Milano
                  </span>
                  <p className="text-white text-base leading-relaxed">
                    Via Gaetano Negri 10, Milano<br />
                    Tel +39 02 78652150
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-white text-lg font-bold block mb-2">
                    Sede di Roma
                  </span>
                  <p className="text-white text-base leading-relaxed">
                    Piazza di San Lorenzo in Lucina 26, 00186 Roma<br />
                    Tel +39 02 78652150
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-3 lg:ml-20">
            <input
              type="text"
              placeholder="Nome e Cognome"
              className="w-full p-2 border border-white bg-transparent text-white placeholder-white rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-white bg-transparent text-white placeholder-white rounded"
            />
            <input
              type="text"
              placeholder="Oggetto"
              className="w-full p-2 border border-white bg-transparent text-white placeholder-white rounded"
            />
            <textarea
              placeholder="Messaggio"
              rows={5}
              className="w-full p-2 border border-white bg-transparent text-white placeholder-white rounded resize-none"
            ></textarea>
            <button className="w-full bg-white text-capitalink-blue py-3 px-6 rounded font-medium btn-animated-blue">Invia messaggio</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-capitalink-blue">
        <div className="max-w-screen-xl mx-auto px-4 md:px-20 py-12 md:py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 md:mb-12">
            {/* Logo Section */}
            <div className="md:col-span-2 space-y-4 text-center md:text-left">
              <img
                src="/capitallogotras.png"
                alt="CapitaLink Logo"
                className="w-48 md:w-64 h-18 md:h-24 object-contain mx-auto md:mx-0"
              />
            </div>

            {/* Dove siamo Section */}
            <div className="md:col-span-5 space-y-4">
              <h3 className="text-white text-base md:text-lg font-bold mb-4">DOVE SIAMO</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center text-white mt-0.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm leading-relaxed">
                      Via Gaetano Negri 10, Milano
                    </p>
                    <p className="text-white text-sm leading-relaxed">
                      Tel +39 02 78652150
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center text-white mt-0.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm leading-relaxed">
                      Piazza di San Lorenzo in Lucina 26, 00186 Roma
                    </p>
                    <p className="text-white text-sm leading-relaxed">
                       Tel +39 02 78652150
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <LinkedInIcon />
                  <a href="#" className="text-white text-sm hover:text-gray-200 transition-colors underline-animated-link">
                    Seguici su LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* CapitaLink Links */}
            <div className="md:col-span-3 space-y-4">
              <h3 className="text-white text-lg font-bold mb-4">CAPITALINK</h3>
              <div className="space-y-3">
                <a href="#" className="block text-white text-sm hover:text-gray-200 transition-colors"><span className="underline-animated-link">Chi siamo</span></a>
                <a href="#" className="block text-white text-sm hover:text-gray-200 transition-colors"><span className="underline-animated-link">Attività</span></a>
                <a href="#" className="block text-white text-sm hover:text-gray-200 transition-colors"><span className="underline-animated-link">Track record</span></a>
                <a href="#" className="block text-white text-sm hover:text-gray-200 transition-colors"><span className="underline-animated-link">News</span></a>
                <a href="#" className="block text-white text-sm hover:text-gray-200 transition-colors"><span className="underline-animated-link">Carriere</span></a>
                <a href="#" className="block text-white text-sm hover:text-gray-200 transition-colors"><span className="underline-animated-link">Contatti</span></a>
              </div>
            </div>

            {/* Assistenza Links */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-white text-lg font-bold mb-4">ASSISTENZA</h3>
              <div className="space-y-3">
                <a href="#" className="block text-white text-sm hover:text-gray-200 transition-colors"><span className="underline-animated-link">Accessibilità</span></a>
                <a href="#" className="block text-white text-sm hover:text-gray-200 transition-colors"><span className="underline-animated-link">Cookies</span></a>
                <a href="#" className="block text-white text-sm hover:text-gray-200 transition-colors"><span className="underline-animated-link">Termini e Condizioni</span></a>
                <a href="#" className="block text-white text-sm hover:text-gray-200 transition-colors"><span className="underline-animated-link">Privacy Policy</span></a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white border-opacity-20 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-xs text-center md:text-left">
              Copyright © 2025 CapitaLink Srl – Corporate Finance. P.IVA 06868330967. Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-4">
              <ItalianFlag />
              <EnglishFlag />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
