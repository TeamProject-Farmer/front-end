interface PropsList {
  imageName: string;
  isCurrentPage: boolean;
}

const Icon = (props: PropsList) => {
  const { imageName, isCurrentPage } = props;
  let color = null;
  let IconComponent = null;
  
  if(isCurrentPage){
    color = '#9CDC1F';
  } else{
    color =  '#8a8a8a';
  }
  
  switch (imageName) {
    case 'home':
      IconComponent = (
        <svg
          width="26"
          height="24"
          viewBox="0 0 26 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.71426 23.3684V8.21054L0.619019 10.7369L13 0.631592L25.3809 10.7369L22.2857 8.21054V23.3684H3.71426Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'cart':
      IconComponent = (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_79_71)">
            <path
              d="M22.1667 8.16669H5.83335C5.18902 8.16669 4.66669 8.68902 4.66669 9.33335V24.5C4.66669 25.1444 5.18902 25.6667 5.83335 25.6667H22.1667C22.811 25.6667 23.3334 25.1444 23.3334 24.5V9.33335C23.3334 8.68902 22.811 8.16669 22.1667 8.16669Z"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.91669 10.5V6.41665C9.91669 4.16149 11.7449 2.33331 14 2.33331C16.2552 2.33331 18.0834 4.16149 18.0834 6.41665V10.5"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_79_71">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'product':
      IconComponent = (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.5987 17.0597L17.0702 24.5882C16.6763 24.9825 16.1418 25.2041 15.5844 25.2041C15.0271 25.2041 14.4926 24.9825 14.0987 24.5882L4.66669 15.1667V4.66669H15.1667L24.5987 14.0987C25.4129 14.9177 25.4129 16.2406 24.5987 17.0597Z"
            stroke={color}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.7917 12.25C11.5971 12.25 12.25 11.5971 12.25 10.7917C12.25 9.98629 11.5971 9.33337 10.7917 9.33337C9.98629 9.33337 9.33337 9.98629 9.33337 10.7917C9.33337 11.5971 9.98629 12.25 10.7917 12.25Z"
            fill={color}
          />
        </svg>
      );
      break;
    case 'member':
      IconComponent = (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 25.6666C20.4433 25.6666 25.6666 20.4433 25.6666 14C25.6666 7.55666 20.4433 2.33331 14 2.33331C7.55666 2.33331 2.33331 7.55666 2.33331 14C2.33331 20.4433 7.55666 25.6666 14 25.6666Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 13.4166C15.6108 13.4166 16.9166 12.1108 16.9166 10.5C16.9166 8.88915 15.6108 7.58331 14 7.58331C12.3891 7.58331 11.0833 8.88915 11.0833 10.5C11.0833 12.1108 12.3891 13.4166 14 13.4166Z"
            stroke={color}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M5.84613 22.3603C6.04664 19.3204 8.57594 16.9167 11.6667 16.9167H16.3333C19.4199 16.9167 21.9467 19.314 22.153 22.3483"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

      break;
    case 'board':
      IconComponent = (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_74_435)">
            <path
              d="M16.9166 2.33342H5.24998C4.60565 2.33342 4.08331 2.85575 4.08331 3.50008V24.5001C4.08331 25.1444 4.60565 25.6667 5.24998 25.6667H21.5833C22.2276 25.6667 22.75 25.1444 22.75 24.5001V11.6694"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.58331 10.5001H12.25"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M7.58331 16.3335H14.5833"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M23.9162 3.50049L16.9193 10.4975"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_74_435">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'promotion':
      IconComponent = (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.9167 25.6667V11.6667H4.08337V25.6667H23.9167Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 25.6667V11.6667"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.9167 25.6667H4.08337"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="2.33337"
            y="7"
            width="23.3333"
            height="4.66667"
            stroke={color}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9.33337 2.33337L14 7.00004L18.6667 2.33337"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    default:
      break;
  }
  return <>{IconComponent}</>;
};

export default Icon;
