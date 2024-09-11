import {
  IconButton,
  Image,
  Tag,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";
import { useState } from "react";

function IconLike() {
  return <Image src="/assets/like-icon.svg" alt="like-icon" />;
}

function DisLike() {
  return <Image src="/assets/dislike-icon.svg" alt="like-icon" />;
}

function UnLiked({ opn }: { opn: boolean }) {
  return (
    <>
      {!opn ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M21.3401 4.61012C20.8294 4.09912 20.2229 3.69376 19.5555 3.4172C18.888 3.14064 18.1726 2.99829 17.4501 2.99829C16.7276 2.99829 16.0122 3.14064 15.3448 3.4172C14.6773 3.69376 14.0709 4.09912 13.5601 4.61012L12.5001 5.67012L11.4401 4.61012C10.4084 3.57842 9.00915 2.99883 7.55012 2.99883C6.09109 2.99883 4.69181 3.57842 3.66012 4.61012C2.62843 5.64181 2.04883 7.04108 2.04883 8.50012C2.04883 9.95915 2.62843 11.3584 3.66012 12.3901L4.72012 13.4501L12.5001 21.2301L20.2801 13.4501L21.3401 12.3901C21.8511 11.8794 22.2565 11.2729 22.533 10.6055C22.8096 9.93801 22.9519 9.2226 22.9519 8.50012C22.9519 7.77763 22.8096 7.06222 22.533 6.39476C22.2565 5.7273 21.8511 5.12087 21.3401 4.61012Z"
            fill="#CCCCCC"
            stroke="#CCCCCC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20.84 4.61012C20.3292 4.09912 19.7228 3.69376 19.0554 3.4172C18.3879 3.14064 17.6725 2.99829 16.95 2.99829C16.2275 2.99829 15.5121 3.14064 14.8446 3.4172C14.1772 3.69376 13.5708 4.09912 13.06 4.61012L12 5.67012L10.94 4.61012C9.90831 3.57842 8.50903 2.99883 7.05 2.99883C5.59096 2.99883 4.19169 3.57842 3.16 4.61012C2.1283 5.64181 1.54871 7.04108 1.54871 8.50012C1.54871 9.95915 2.1283 11.3584 3.16 12.3901L4.22 13.4501L12 21.2301L19.78 13.4501L20.84 12.3901C21.351 11.8794 21.7564 11.2729 22.0329 10.6055C22.3095 9.93801 22.4518 9.2226 22.4518 8.50012C22.4518 7.77763 22.3095 7.06222 22.0329 6.39476C21.7564 5.7273 21.351 5.12087 20.84 4.61012Z"
            fill="#F44747"
            stroke="#F44747"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </>
  );
}

function Svgs() {
  return (
    <div className="svgse flex flex-row gap-2">
      <svg
        className="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white" />
        <rect
          x="0.5"
          y="0.5"
          width="47"
          height="47"
          rx="23.5"
          stroke="#CCCCCC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M32.6576 31.4859L36.2685 31.4367C36.2685 31.4367 38.1533 31.3233 37.2594 29.8789C37.1878 29.7586 36.7387 28.8116 34.5774 26.8588C32.3165 24.8145 32.6211 25.1465 35.3437 21.6113C37.0025 19.4589 37.6678 18.143 37.4572 17.5854C37.2622 17.0456 36.0412 17.1919 36.0412 17.1919L31.9839 17.211C31.9839 17.211 31.6836 17.1714 31.459 17.3012C31.2415 17.4296 31.1026 17.7248 31.1026 17.7248C31.1026 17.7248 30.4598 19.392 29.6009 20.8091C27.7947 23.7977 27.0719 23.9562 26.7744 23.7704C26.0881 23.3372 26.258 22.0308 26.258 21.1043C26.258 18.2058 26.7113 16.9992 25.3808 16.6862C24.9387 16.5824 24.6146 16.5141 23.4848 16.5031C22.0379 16.4895 20.8113 16.5072 20.118 16.8393C19.6549 17.0579 19.297 17.5499 19.5159 17.5772C19.7826 17.6141 20.3931 17.7371 20.713 18.1648C21.1299 18.7169 21.1158 19.9523 21.1158 19.9523C21.1158 19.9523 21.3558 23.3659 20.5573 23.7882C20.0099 24.0765 19.2591 23.4889 17.6466 20.7722C16.8214 19.3852 16.1955 17.8478 16.1955 17.8478C16.1955 17.8478 16.0762 17.5608 15.8614 17.4091C15.6032 17.2219 15.2355 17.1632 15.2355 17.1632L11.3803 17.1864C11.3803 17.1864 10.8035 17.2028 10.5874 17.4488C10.3993 17.6647 10.5733 18.1184 10.5733 18.1184C10.5733 18.1184 13.5935 24.9976 17.0122 28.4672C20.1503 31.6444 23.7122 31.4367 23.7122 31.4367H25.3233C25.3233 31.4367 25.8145 31.3834 26.0615 31.1238C26.2902 30.8819 26.2818 30.4337 26.2818 30.4337C26.2818 30.4337 26.2523 28.3237 27.2544 28.0149C28.248 27.7074 29.5167 30.0524 30.8668 30.9543C31.8857 31.6362 32.6576 31.4859 32.6576 31.4859Z"
          fill="#CCCCCC"
        />
      </svg>
      <svg
        className="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <rect
          x="0.5"
          y="0.5"
          width="47"
          height="47"
          rx="23.5"
          stroke="#CCCCCC"
        />
        <path
          d="M34.7636 16.7995C35.8569 17.9112 36 19.6778 36 24C36 28.3222 35.8569 30.0887 34.7636 31.2005C33.6699 32.3122 32.5311 32.4 24 32.4C15.4689 32.4 14.3301 32.3122 13.2364 31.2005C12.1431 30.0887 12 28.3222 12 24C12 19.6778 12.1431 17.9112 13.2364 16.7995C14.3297 15.6878 15.4689 15.6 24 15.6C32.5311 15.6 33.6699 15.6878 34.7636 16.7995ZM22.056 27.5599L27.8859 24.1814L22.056 20.8559V27.5599Z"
          fill="#CCCCCC"
        />
      </svg>
      <div className="odnoklasnik cursor-pointer w-12 h-12 border border-[#CCCCCC] flex items-center justify-center rounded-[100px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_1826_20166)">
            <mask
              id="mask0_1826_20166"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <path d="M24 0H0V24H24V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_1826_20166)">
              <path
                d="M0 11.5192C0 6.09084 0 3.37667 1.68833 1.68833C3.37667 0 6.09084 0 11.5192 0H12.4808C17.9092 0 20.6233 0 22.3117 1.68833C24 3.37667 24 6.09084 24 11.5192V12.4808C24 17.9092 24 20.6233 22.3117 22.3117C20.6233 24 17.9092 24 12.4808 24H11.5192C6.09084 24 3.37667 24 1.68833 22.3117C0 20.6233 0 17.9092 0 12.4808V11.5192Z"
                fill="#CCCCCC"
              />
              <path
                d="M12 11.9359C13.1754 11.9359 14.2334 11.4658 15.0027 10.6964C15.7721 9.92706 16.2422 8.85849 16.2422 7.69374C16.2422 6.51831 15.7721 5.46043 15.0027 4.69107C14.2334 3.92171 13.1754 3.45154 12 3.45154C10.8246 3.45154 9.76673 3.92171 8.99738 4.69107C8.22802 5.46043 7.75781 6.51831 7.75781 7.69374C7.75781 8.86918 8.22802 9.92706 8.99738 10.6964C9.76673 11.4551 10.8246 11.9359 12 11.9359ZM10.643 6.32598C10.9956 5.97334 11.4765 5.75964 12 5.75964C12.5343 5.75964 13.0152 5.97334 13.3571 6.32598C13.7097 6.67862 13.9235 7.15946 13.9235 7.68306C13.9235 8.20665 13.7097 8.69818 13.3571 9.04014C13.0045 9.39278 12.5236 9.60648 12 9.60648C11.4658 9.60648 10.9849 9.39278 10.643 9.04014C10.2903 8.68749 10.0766 8.20665 10.0766 7.68306C10.0766 7.15946 10.2903 6.67862 10.643 6.32598Z"
                fill="white"
              />
              <path
                d="M17.7061 13.6456L16.4559 11.9466C16.381 11.8505 16.2528 11.8398 16.1566 11.9145C14.9812 12.919 13.5386 13.5601 11.9892 13.5601C10.4398 13.5601 8.99724 12.9083 7.82181 11.9145C7.73635 11.8398 7.59741 11.8505 7.5226 11.9466L6.28309 13.6456C6.21896 13.7311 6.24034 13.8486 6.31515 13.9128C7.36234 14.7676 8.58048 15.334 9.8521 15.6332L7.2234 20.2601C7.15932 20.3883 7.25546 20.5486 7.40509 20.5486H9.9803C10.0551 20.5486 10.1299 20.5058 10.162 20.431L11.9999 16.3277L13.8378 20.431C13.8699 20.5058 13.9447 20.5486 14.0195 20.5486H16.5947C16.7443 20.5486 16.8405 20.3883 16.7657 20.2601L14.137 15.6332C15.4086 15.334 16.6161 14.7676 17.6633 13.9128C17.7488 13.8486 17.7595 13.7311 17.7061 13.6456Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1826_20166">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <svg
        className="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white" />
        <rect
          x="0.5"
          y="0.5"
          width="47"
          height="47"
          rx="23.5"
          stroke="#CCCCCC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.864 23.7467C17.8605 20.6984 22.5259 18.6888 24.8603 17.7179C31.5253 14.9456 32.9103 14.4641 33.813 14.4482C34.0115 14.4447 34.4554 14.4939 34.743 14.7272C34.9858 14.9242 35.0526 15.1904 35.0845 15.3771C35.1165 15.5639 35.1563 15.9895 35.1247 16.322C34.7635 20.1169 33.2007 29.3263 32.4056 33.5767C32.0692 35.3752 31.4067 35.9783 30.7654 36.0373C29.3717 36.1655 28.3134 35.1162 26.9635 34.2314C24.8512 32.8467 23.6578 31.9848 21.6075 30.6336C19.2379 29.0721 20.774 28.2139 22.1244 26.8113C22.4778 26.4442 28.6186 20.8587 28.7374 20.352C28.7523 20.2886 28.7661 20.0524 28.6258 19.9277C28.4854 19.803 28.2783 19.8456 28.1289 19.8795C27.917 19.9276 24.5426 22.158 18.0055 26.5707C17.0477 27.2284 16.1801 27.5489 15.4028 27.5321C14.5459 27.5136 12.8975 27.0476 11.6721 26.6492C10.1691 26.1607 8.97456 25.9024 9.07858 25.0726C9.13276 24.6404 9.72791 24.1985 10.864 23.7467Z"
          fill="#CCCCCC"
        />
      </svg>
      <div className="whatsapp cursor-pointer transition-all hover:bg-[#F8F8F8] hover:border-none w-12 h-12 border border-[#CCCCCC] flex items-center justify-center rounded-[100px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M15.0141 3C8.40686 3 3.02818 8.37405 3.02578 14.9812C3.02458 17.0932 3.57776 19.1551 4.62656 20.9719L3 27L9.2789 25.5164C11.0297 26.4716 13.0006 26.973 15.007 26.9742H15.0117C21.6177 26.9742 26.994 21.599 26.9976 14.993C27 11.7902 25.7546 8.77888 23.4914 6.51328C21.2282 4.24888 18.2205 3.0012 15.0141 3ZM15.0117 5.4C17.5749 5.4012 19.9837 6.40055 21.7945 8.21015C23.6053 10.0222 24.6 12.4298 24.5976 14.9906C24.5952 20.2754 20.2966 24.5742 15.0094 24.5742C13.4098 24.573 11.8253 24.1714 10.4297 23.4094L9.62109 22.9687L8.72812 23.1797L6.36562 23.7375L6.94219 21.5953L7.20234 20.6344L6.70547 19.7719C5.86787 18.3223 5.42458 16.6648 5.42578 14.9812C5.42818 9.69885 9.72811 5.4 15.0117 5.4ZM10.7719 9.45C10.5715 9.45 10.2475 9.525 9.97265 9.825C9.69785 10.1238 8.92265 10.8475 8.92265 12.3211C8.92265 13.7947 9.99609 15.2191 10.1461 15.4195C10.2949 15.6187 12.2181 18.7383 15.2625 19.9383C17.7921 20.9355 18.3059 20.7387 18.8555 20.6883C19.4051 20.6391 20.6285 19.9652 20.8781 19.2656C21.1277 18.566 21.1283 17.9642 21.0539 17.8406C20.9795 17.7158 20.7797 17.6414 20.4797 17.4914C20.1809 17.3414 18.7084 16.6183 18.4336 16.5187C18.1588 16.4191 17.9578 16.3687 17.7586 16.6687C17.5594 16.9687 16.9869 17.6414 16.8117 17.8406C16.6365 18.041 16.4625 18.068 16.1625 17.918C15.8625 17.7668 14.8979 17.4497 13.7531 16.4297C12.8627 15.6365 12.2619 14.6578 12.0867 14.3578C11.9127 14.059 12.0703 13.8949 12.2203 13.7461C12.3547 13.6117 12.518 13.3963 12.668 13.2211C12.8168 13.0459 12.8684 12.9211 12.968 12.7219C13.0676 12.5227 13.0166 12.3469 12.9422 12.1969C12.8678 12.0469 12.2851 10.5678 12.0187 9.975C11.7943 9.477 11.5573 9.46543 11.3437 9.45703C11.1697 9.44983 10.9711 9.45 10.7719 9.45Z"
            fill="#CCCCCC"
          />
        </svg>
      </div>
    </div>
  );
}

const MiniContent = ({openZabronit, pozvonitOpen}: {openZabronit: ()=>void, pozvonitOpen: ()=>void}) => {
  const FireIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M11.7286 10.7994C12.9582 10.0924 13.6667 9.14331 13.7449 7.80859C13.7449 7.7641 13.7501 7.72456 13.7449 7.68006C13.7397 7.48727 13.8178 7.33897 14.0054 7.26482C14.2086 7.18572 14.3649 7.25987 14.5108 7.40323C15.0422 7.94701 15.459 8.55999 15.7612 9.24218C17.0794 12.2231 15.6414 15.6785 12.5309 16.9885C8.76922 18.5753 4.42397 16.3063 3.83522 12.4406C3.59035 10.8537 3.85085 9.35588 4.90851 8.06565C5.34616 7.53176 5.90885 7.08685 6.41424 6.59746C6.91441 6.11795 7.45105 5.65821 7.90954 5.14409C8.47224 4.51628 8.75358 3.76488 8.75879 2.92945C8.75879 2.76137 8.82131 2.6279 8.98283 2.5488C9.14955 2.46477 9.30586 2.49443 9.45695 2.59824C11.0096 3.68579 11.9526 5.12926 12.2756 6.93855C12.4997 8.22384 12.3329 9.46463 11.7859 10.6659C11.765 10.6906 11.7546 10.7203 11.7286 10.7994Z"
          fill="#F13E5F"
        />
      </svg>
    );
  };

  const GiftIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M4.58825 5.80661C4.52041 5.45177 4.41605 5.1178 4.40561 4.77861C4.37952 3.79758 5.0318 2.90526 5.96065 2.59216C6.89472 2.27907 7.90706 2.58695 8.50716 3.38012C8.97159 3.99066 9.4308 4.60641 9.89522 5.22217C9.93175 5.27435 9.9735 5.32131 10.0257 5.38393C10.0726 5.32653 10.1092 5.28479 10.1405 5.24304C10.5997 4.6325 11.0589 4.02718 11.5129 3.41665C12.2278 2.46692 13.4802 2.19558 14.4925 2.78002C15.5049 3.35925 15.9119 4.58554 15.4579 5.67094C15.4422 5.70747 15.4318 5.73877 15.4005 5.81183C15.6771 5.81183 15.938 5.78574 16.1884 5.81705C16.4389 5.84836 16.7103 5.89532 16.9294 6.01012C17.3156 6.21886 17.5139 6.58413 17.5191 7.02247C17.5295 7.90957 17.5243 8.79146 17.5243 9.67856C17.5243 9.87686 17.4356 9.97601 17.2425 9.97601C15.0561 9.97601 12.8696 9.97601 10.6571 9.97601C10.6571 9.01063 10.6571 8.05047 10.6571 7.07465C10.2344 7.07465 9.82738 7.07465 9.39949 7.07465C9.39949 8.03481 9.39949 8.99497 9.39949 9.96557C9.316 9.97079 9.25338 9.97601 9.19076 9.97601C7.09302 9.97601 4.99528 9.97601 2.90275 9.97601C2.58444 9.97601 2.5166 9.90817 2.5166 9.58464C2.5166 8.76537 2.5166 7.9461 2.5166 7.12161C2.5166 6.33887 3.04365 5.81183 3.82639 5.80139C4.09773 5.80139 4.35343 5.80661 4.58825 5.80661ZM8.77851 5.80661C8.31409 5.19086 7.88619 4.62207 7.44264 4.0585C7.36437 3.95935 7.24956 3.88629 7.13476 3.82889C6.76427 3.64103 6.30506 3.71409 5.99196 3.99588C5.67887 4.27766 5.56928 4.72121 5.71539 5.1178C5.85629 5.51439 6.21113 5.78574 6.62859 5.79618C7.0304 5.80661 7.4322 5.80139 7.83923 5.80139C8.13145 5.80661 8.42889 5.80661 8.77851 5.80661ZM11.2781 5.80139C12.0295 5.80139 12.7287 5.81183 13.428 5.79618C13.8976 5.78574 14.2786 5.43612 14.3777 4.96125C14.4716 4.5177 14.2368 4.04806 13.8246 3.83933C13.4019 3.62538 12.8905 3.70365 12.5983 4.06893C12.1547 4.62207 11.7425 5.19608 11.2781 5.80139Z"
          fill="#4BBD64"
        />
        <path
          d="M9.39903 11.2336C9.39903 12.5382 9.39903 13.8219 9.39903 15.1056C9.39903 15.784 9.39903 16.4571 9.39903 17.1355C9.39903 17.3912 9.31554 17.4747 9.05984 17.4747C8.03706 17.4747 7.01428 17.4799 5.9915 17.4747C5.67319 17.4747 5.34966 17.4956 5.04178 17.4329C4.06596 17.2346 3.34062 16.3423 3.33541 15.3456C3.33019 14.0828 3.34062 12.82 3.34584 11.5572C3.34584 11.3171 3.42933 11.2284 3.65372 11.2232C5.52708 11.2232 7.40565 11.2232 9.27901 11.2232C9.32075 11.2284 9.35206 11.2284 9.39903 11.2336Z"
          fill="#4BBD64"
        />
        <path
          d="M10.667 11.2284C11.1158 11.2284 11.5489 11.2284 11.9872 11.2284C13.4327 11.2284 14.8782 11.2284 16.3236 11.2284C16.6211 11.2284 16.6941 11.3014 16.6993 11.5937C16.7046 12.8252 16.7098 14.0567 16.715 15.283C16.7202 16.5875 15.6192 17.5738 14.3146 17.4955C13.4588 17.4433 12.5978 17.4799 11.7368 17.4747C11.4759 17.4747 11.2149 17.4747 10.954 17.4747C10.7453 17.4747 10.6514 17.3859 10.6514 17.1824C10.6514 15.2204 10.6514 13.2635 10.6514 11.3015C10.6514 11.2858 10.6618 11.2649 10.667 11.2284Z"
          fill="#4BBD64"
        />
      </svg>
    );
  };

  const [opnL, setOpnL] = useState(false);

  return (
    <div className="minicontente bg-white shadow-sm p-6 rounded-2xl">
      <div className="tope-mn">
        <div className="tags flex flex-row gap-2">
          <Tag
            size="md"
            w="max-content"
            padding="8px"
            variant="subtle"
            bgColor="#FEECEF"
          >
            <TagLeftIcon boxSize="20px" as={FireIcon} />
            <TagLabel className="!text-[10px] sm:!text-[12px] ml-1 text-[#F13E5F] font-OpenSans font-semibold uppercase">
              Популярное заведение
            </TagLabel>
          </Tag>
          <Tag
            size="md"
            w="max-content"
            padding="8px"
            variant="subtle"
            bgColor="#EDF9F0"
          >
            <TagLeftIcon boxSize="20px" as={GiftIcon} />
            <TagLabel className="!text-[10px] sm:!text-[12px] ml-1 text-[#4BBD64] font-OpenSans font-semibold uppercase">
              Акции
            </TagLabel>
          </Tag>
        </div>
        <div className="badge px-5 py-[10px] bg-[#FFF3DE] rounded-3xl w-max mt-3">
          <h5 className="text-sm sm:text-[18px] font-OpenSans font-semibold text-[#3B4255]">
            Банный комплекс
          </h5>
        </div>
      </div>
      <div className="content-mn mt-4">
        <h3 className="text-xl lg:text-2xl font-OpenSans font-semibold text-[#3B4255] mb-4">
          Воронцовские бани
        </h3>
        <div className="like-dislike flex flex-wrap flex-row gap-3">
          <label
            htmlFor="icon-like"
            className="flex flex-row items-center gap-1 sm:gap-[6px] md:gap-0 relative left-[1px] md:-left-[7px]"
          >
            <IconButton
              aria-label="Search database"
              size="sm"
              className="!w-[16px] !h-[16px] sm:!w-[17px] sm:!h-[17px] md:w-auto md:h-auto !min-w-max md:!min-w-[32px]"
              icon={<IconLike />}
              variant="outline"
              style={{ border: "none" }}
            />
            <p className="m-0 text-[#4C4C4C] text-sm md:text-base font-normal font-OpenSans">
              115
            </p>
          </label>
          <label
            htmlFor="icon-like"
            className="flex flex-row gap-1 sm:gap-[6px] md:gap-0 items-center"
          >
            <IconButton
              aria-label="Search database"
              size="sm"
              icon={<DisLike />}
              className="!w-[16px] !h-[16px] sm:!w-[17px] sm:!h-[17px] md:w-auto md:h-auto !min-w-max md:!min-w-[32px]"
              variant="outline"
              style={{ border: "none" }}
            />
            <p className="m-0 text-[#4C4C4C] text-sm md:text-base font-normal font-OpenSans">
              115
            </p>
          </label>
        </div>
        <div className="opisaniya flex flex-col gap-3 mt-6">
          <p className="text-sm sm:text-base text-[#4C4C4C] font-OpenSans font-normal">
            Район:{" "}
            <span className="font-semibold text-[#3B4255]">Кировский</span>
          </p>
          <p className="text-sm sm:text-base text-[#4C4C4C] font-OpenSans font-normal">
            Адрес:{" "}
            <span className="font-semibold text-[#3B4255]">Дмитриева 1/8</span>
          </p>
          <p className="text-sm sm:text-base text-[#4C4C4C] font-OpenSans font-normal">
            Остановка:{" "}
            <span className="font-semibold text-[#3B4255]">Дмитриева</span>
          </p>
          <p className="text-sm sm:text-base text-[#4C4C4C] font-OpenSans font-normal">
            Количество номеров:{" "}
            <span className="font-semibold text-[#3B4255]">5</span>
          </p>
          <p className="text-sm sm:text-base text-[#4C4C4C] font-OpenSans font-normal">
            Вместимость:{" "}
            <span className="font-semibold text-[#3B4255]">20 чел.</span>
          </p>
          <p className="text-sm sm:text-base text-[#4C4C4C] font-OpenSans font-normal line-clamp-2">
            Парная:{" "}
            <span className="font-semibold text-[#3B4255]">
              Финская, с веником. Возможно потребуется доплата...
            </span>
          </p>
        </div>
        <h3 className="text-xl lg:text-2xl font-OpenSans font-semibold text-[#3B4255] mt-4">
          1600 - 2000 ₽/час
        </h3>
        <div className="btns flex flex-col sm:flex-row lg:flex-col gap-2 mt-6">
          <button onClick={pozvonitOpen} className="bg-[#FF7A01] h-12 w-full sm:max-w-[298px] lg:max-w-none rounded-xl px-6 py-2 text-[14px] sm:text-base text-white font-OpenSans font-semibold">
            Позвонить
          </button>
          <button onClick={openZabronit} className="bg-[#FFF] border h-12 border-[#CCCCCC] w-full sm:max-w-[298px] lg:max-w-none rounded-xl px-6 py-2 text-[14px] sm:text-base text-[#3B4255] hover:bg-[#FFF3DE] hover:border-[#FFF3DE] transition-colors font-OpenSans font-semibold">
            Забронировать
          </button>
          <div className="like-unlike flex sm:ml-3 lg:hidden flex-row items-center justify-center gap-4">
          <IconButton
            aria-label="Search database"
            size="sm"
            onClick={() => setOpnL(!opnL)}
            icon={<UnLiked opn={opnL} />}
            variant="outline"
            style={{ border: "none" }}
          />
          <p
            onClick={() => setOpnL(!opnL)}
            className="text-sm sm:text-base cursor-pointer text-[#3B4255] font-OpenSans font-semibold leading-[140%]"
          >
            {opnL ? "В\u00A0избранном" : `В\u00A0избранное`}
          </p>
        </div>
        </div>
        <div className="like-unlike hidden lg:flex flex-row items-center mt-5 justify-center gap-4">
          <IconButton
            aria-label="Search database"
            size="sm"
            onClick={() => setOpnL(!opnL)}
            icon={<UnLiked opn={opnL} />}
            variant="outline"
            style={{ border: "none" }}
          />
          <p
            onClick={() => setOpnL(!opnL)}
            className="text-sm sm:text-base cursor-pointer text-[#3B4255] font-OpenSans font-semibold leading-[140%]"
          >
            {opnL ? "В\u00A0избранном" : "В\u00A0избранное"}
          </p>
        </div>
        <div className="recommend mt-6 flex flex-row gap-4 px-4 py-5 bg-[#F8F8F8] rounded-xl items-start">
          <div className="svge w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#3B4255"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 8V12"
                stroke="#3B4255"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 16H12.01"
                stroke="#3B4255"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p className="lg:max-w-[230px] text-sm sm:text-base font-normal text-[#3B4255] font-OpenSans">
            Рекомендуем заранее бронировать и вносить предоплату за cауны на
            праздники. В противном случае бронь будет снята.
          </p>
        </div>
        <div className="social-icons hidden sm:block mt-6">
          <p className="text-base font-OpenSans font-semibold text-[#3B4255] mb-4">
            Соц сети заведения
          </p>
          <Svgs />
        </div>
      </div>
    </div>
  );
};

export default MiniContent;
