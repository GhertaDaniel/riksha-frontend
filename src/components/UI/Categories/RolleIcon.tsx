import React from 'react';

const RolleIcon = ({ color }: { color: string }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.7926 22.5316L25.3637 26.4926C24.9392 26.7709 24.4425 26.9192 23.9348 26.9192C23.4271 26.9192 22.9305 26.7709 22.506 26.4926L17.0771 22.5316C16.8932 22.4012 16.7439 22.2277 16.6425 22.0263C16.541 21.825 16.4904 21.6018 16.4951 21.3764V21.0463C16.291 21.1001 16.0807 21.1263 15.8697 21.1245C15.573 21.1259 15.2786 21.073 15.0011 20.9681V21.5675C14.9944 21.7857 14.9377 21.9994 14.8353 22.1922C14.7328 22.385 14.5875 22.5516 14.4104 22.6793L8.95547 26.675C8.52999 26.9552 8.03174 27.1045 7.52228 27.1045C7.01282 27.1045 6.51452 26.9552 6.08904 26.675L0.668855 22.7141C0.482756 22.5851 0.331452 22.4122 0.228395 22.2106C0.125337 22.0091 0.073733 21.7851 0.0781994 21.5588V12.7076C0.0263627 12.5596 -9.21966e-05 12.404 2.41408e-07 12.2472C0.00822014 12.0031 0.0748085 11.7645 0.194199 11.5514C0.31359 11.3383 0.482341 11.1569 0.686244 11.0224L6.11512 7.07019C6.60645 6.72795 7.19285 6.54869 7.79155 6.5577C8.0782 6.5577 7.9479 6.48821 8.21717 6.5577V5.68908C8.22563 5.44403 8.29323 5.20465 8.41423 4.99139C8.53523 4.77812 8.70603 4.59729 8.91205 4.46432L14.3322 0.503417C14.8313 0.175011 15.4156 0 16.013 0C16.6104 0 17.1947 0.175011 17.6938 0.503417L23.114 4.46432C23.319 4.59836 23.489 4.77944 23.6099 4.99247C23.7308 5.20551 23.799 5.44434 23.8089 5.68908V6.42742C24.0348 6.3753 23.9653 6.42742 24.1998 6.42742C24.797 6.41986 25.3821 6.5957 25.8762 6.9312L31.3051 10.8921C31.5101 11.0261 31.6802 11.2072 31.801 11.4203C31.9219 11.6333 31.9901 11.8721 32 12.1169C31.998 12.3086 31.9566 12.4978 31.8784 12.6728L31.3833 21.4632C31.3766 21.6814 31.3198 21.8952 31.2174 22.088C31.115 22.2807 30.9697 22.4474 30.7926 22.5751V22.5316ZM0.703581 12.3861C0.799612 12.5256 0.920334 12.6462 1.05974 12.7423L6.48862 16.7032C6.90349 17.006 7.40382 17.1693 7.91747 17.1693C8.43112 17.1693 8.9315 17.006 9.34636 16.7032L14.7057 12.7944C14.8164 12.6331 14.8769 12.4427 14.8795 12.2472C14.8743 12.0739 14.8273 11.9045 14.7426 11.7533C14.658 11.6021 14.538 11.4735 14.393 11.3786L8.96417 7.41763C8.61706 7.17886 8.2041 7.05438 7.78286 7.06152C7.36193 7.05666 6.94965 7.18093 6.60155 7.41763L1.18136 11.3786C1.03481 11.4719 0.91364 11.6 0.828752 11.7516C0.743865 11.9032 0.697911 12.0735 0.694939 12.2472C0.69062 12.2934 0.69062 12.3399 0.694939 12.3861H0.703581ZM6.43651 13.8976L6.18457 13.7065L4.23018 12.2819C4.1476 12.2304 4.07954 12.1587 4.03232 12.0736C3.9851 11.9885 3.96032 11.8928 3.96032 11.7955C3.96032 11.6982 3.9851 11.6024 4.03232 11.5173C4.07954 11.4322 4.1476 11.3606 4.23018 11.3091L7.114 9.20701C7.31203 9.07911 7.54277 9.01106 7.77851 9.01106C8.01425 9.01106 8.24499 9.07911 8.44302 9.20701L9.24213 9.78897C10.05 10.3796 9.50271 11.144 8.96417 11.8476C8.74239 12.152 8.50158 12.4422 8.2432 12.7162C7.92181 13.0202 6.89688 14.2624 6.43651 13.9323V13.8976ZM11.5179 12.4296L8.64278 14.5143C8.48506 14.6167 8.30603 14.6816 8.11935 14.7042C7.93267 14.7268 7.74329 14.7064 7.5657 14.6446C6.9403 14.4274 7.65258 14.0626 7.96529 13.7759C8.27799 13.4893 8.61675 13.2374 8.83391 13.0029C9.10895 12.7343 9.36168 12.4438 9.5896 12.1343C10.3019 11.2222 10.0065 10.3275 10.8056 10.9095L11.5005 11.422C11.5852 11.4719 11.6554 11.543 11.7041 11.6283C11.7529 11.7136 11.7785 11.8102 11.7785 11.9084C11.7785 12.0067 11.7529 12.1032 11.7041 12.1885C11.6554 12.2738 11.5852 12.345 11.5005 12.3948L11.5179 12.4296ZM17.1553 10.4926L22.5841 6.53165C22.7354 6.44269 22.8609 6.31575 22.9481 6.16339C23.0353 6.01104 23.0811 5.83855 23.0811 5.66303C23.0811 5.4875 23.0353 5.31501 22.9481 5.16266C22.8609 5.0103 22.7354 4.88336 22.5841 4.7944L17.1553 0.833497C16.8081 0.594723 16.3952 0.470222 15.9739 0.47736C15.553 0.472499 15.1407 0.596798 14.7926 0.833497L9.37245 4.7944C9.22113 4.88336 9.09566 5.0103 9.00849 5.16266C8.92133 5.31501 8.87547 5.4875 8.87547 5.66303C8.87547 5.83855 8.92133 6.01104 9.00849 6.16339C9.09566 6.31575 9.22113 6.44269 9.37245 6.53165L14.7926 10.4926C15.1407 10.7293 15.553 10.8536 15.9739 10.8487C16.3952 10.8558 16.8081 10.7313 17.1553 10.4926ZM14.6276 7.3134L14.3757 7.131L12.4213 5.70645C12.3387 5.65494 12.2706 5.58327 12.2234 5.49817C12.1762 5.41307 12.1514 5.31734 12.1514 5.22002C12.1514 5.1227 12.1762 5.027 12.2234 4.9419C12.2706 4.8568 12.3387 4.7851 12.4213 4.73359L15.3051 2.63155C15.5015 2.49935 15.7329 2.42873 15.9696 2.42873C16.2063 2.42873 16.4377 2.49935 16.6341 2.63155L17.4332 3.21351C18.241 3.80417 17.6938 4.55989 17.1553 5.26347C16.9359 5.56977 16.695 5.86004 16.4343 6.13209C16.1216 6.44479 15.088 7.68691 14.6276 7.34815V7.3134ZM17.1118 12.2385C17.2134 12.3762 17.3366 12.4964 17.4766 12.5946L22.8969 16.5555C23.3117 16.8584 23.8121 17.0216 24.3257 17.0216C24.8394 17.0216 25.3397 16.8584 25.7546 16.5555L31.114 12.6467C31.2247 12.4855 31.2851 12.2951 31.2877 12.0995C31.2825 11.9263 31.2356 11.7569 31.1509 11.6056C31.0662 11.4544 30.9463 11.3259 30.8013 11.2309L25.3724 7.26998C25.0222 7.03765 24.6113 6.91374 24.1911 6.91374C23.7709 6.91374 23.3599 7.03765 23.0097 7.26998L17.5809 11.2309C17.4359 11.3259 17.316 11.4544 17.2313 11.6056C17.1466 11.7569 17.0997 11.9263 17.0944 12.0995C17.0944 12.0995 17.0944 12.1951 17.0944 12.2385H17.1118ZM22.8534 13.7499L22.6015 13.5588L20.6471 12.1343C20.5645 12.0828 20.4964 12.0111 20.4492 11.926C20.402 11.8409 20.3772 11.7452 20.3772 11.6478C20.3772 11.5505 20.402 11.4548 20.4492 11.3697C20.4964 11.2846 20.5645 11.2129 20.6471 11.1614L23.5223 9.05933C23.722 8.9317 23.9541 8.86389 24.1911 8.86389C24.4281 8.86389 24.6602 8.9317 24.8599 9.05933L25.6591 9.64132C26.4669 10.232 25.9197 10.9877 25.3724 11.6999C25.1572 11.9934 24.919 12.2693 24.6601 12.5251C24.3388 12.8378 23.3138 14.08 22.8534 13.7499ZM27.9349 12.2819L25.051 14.384C24.8949 14.4862 24.7173 14.5512 24.532 14.5738C24.3467 14.5963 24.1588 14.576 23.9827 14.5143C23.3572 14.2971 24.0695 13.9323 24.3822 13.6457C24.6949 13.359 25.0336 13.1071 25.2508 12.8726C25.5258 12.604 25.7786 12.3135 26.0065 12.0039C26.7188 11.0919 26.4234 10.1972 27.2139 10.7792L27.9175 11.2917C28.0001 11.3432 28.0682 11.4149 28.1154 11.5C28.1626 11.5851 28.1874 11.6808 28.1874 11.7781C28.1874 11.8754 28.1626 11.9712 28.1154 12.0563C28.0682 12.1414 28.0001 12.213 27.9175 12.2645L27.9349 12.2819ZM19.7177 5.82807L16.8339 7.93014C16.6793 8.03571 16.502 8.10332 16.3163 8.12747C16.1307 8.15162 15.9419 8.1316 15.7655 8.06909C15.1401 7.85194 15.8437 7.48712 16.1564 7.20047C16.4691 6.91383 16.8078 6.66194 17.025 6.42742C17.2421 6.19289 17.4767 5.9323 17.7807 5.55879C18.4843 4.63806 18.189 3.75206 18.9881 4.33404L19.6917 4.83783C19.7742 4.88933 19.8423 4.96103 19.8895 5.04613C19.9367 5.13123 19.9615 5.22695 19.9615 5.32428C19.9615 5.4216 19.9367 5.5173 19.8895 5.6024C19.8423 5.6875 19.7742 5.7592 19.6917 5.8107L19.7177 5.82807Z"
        fill="#1B1B1B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.43646 13.8976L6.18452 13.7065L4.23013 12.2819C4.14755 12.2304 4.07949 12.1587 4.03227 12.0736C3.98505 11.9885 3.96027 11.8928 3.96027 11.7955C3.96027 11.6982 3.98505 11.6024 4.03227 11.5173C4.07949 11.4322 4.14755 11.3606 4.23013 11.3091L7.11395 9.20701C7.31198 9.07911 7.54272 9.01106 7.77846 9.01106C8.0142 9.01106 8.24494 9.07911 8.44297 9.20701L9.24208 9.78897C10.0499 10.3796 9.50266 11.144 8.96412 11.8476C8.74234 12.152 8.50153 12.4422 8.24315 12.7162C7.92176 13.0202 6.89682 14.2624 6.43646 13.9323V13.8976ZM11.5179 12.4296L8.64273 14.5143C8.48501 14.6167 8.30598 14.6816 8.1193 14.7042C7.93262 14.7268 7.74324 14.7064 7.56565 14.6446C6.94025 14.4274 7.65253 14.0626 7.96524 13.7759C8.27794 13.4893 8.6167 13.2374 8.83386 13.0029C9.10889 12.7343 9.36162 12.4438 9.58955 12.1343C10.3018 11.2222 10.0065 10.3275 10.8056 10.9095L11.5005 11.422C11.5851 11.4719 11.6553 11.543 11.7041 11.6283C11.7528 11.7136 11.7784 11.8102 11.7784 11.9084C11.7784 12.0067 11.7528 12.1032 11.7041 12.1885C11.6553 12.2738 11.5851 12.345 11.5005 12.3948L11.5179 12.4296ZM14.6275 7.3134L14.3757 7.131L12.4213 5.70645C12.3387 5.65494 12.2706 5.58327 12.2234 5.49817C12.1761 5.41307 12.1514 5.31734 12.1514 5.22002C12.1514 5.1227 12.1761 5.027 12.2234 4.9419C12.2706 4.8568 12.3387 4.7851 12.4213 4.73359L15.305 2.63155C15.5014 2.49935 15.7328 2.42873 15.9695 2.42873C16.2063 2.42873 16.4377 2.49935 16.6341 2.63155L17.4332 3.21351C18.241 3.80417 17.6937 4.55989 17.1552 5.26347C16.9358 5.56977 16.6949 5.86004 16.4343 6.13209C16.1216 6.44479 15.0879 7.68691 14.6275 7.34815V7.3134ZM22.8533 13.7499L22.6015 13.5588L20.6471 12.1343C20.5645 12.0828 20.4964 12.0111 20.4492 11.926C20.4019 11.8409 20.3772 11.7452 20.3772 11.6478C20.3772 11.5505 20.4019 11.4548 20.4492 11.3697C20.4964 11.2846 20.5645 11.2129 20.6471 11.1614L23.5222 9.05933C23.7219 8.9317 23.954 8.86389 24.1911 8.86389C24.4281 8.86389 24.6601 8.9317 24.8599 9.05933L25.659 9.64132C26.4668 10.232 25.9196 10.9877 25.3724 11.6999C25.1571 11.9934 24.9189 12.2693 24.6601 12.5251C24.3387 12.8378 23.3137 14.08 22.8533 13.7499ZM27.9348 12.2819L25.051 14.384C24.8948 14.4862 24.7172 14.5512 24.532 14.5738C24.3467 14.5963 24.1587 14.576 23.9826 14.5143C23.3572 14.2971 24.0694 13.9323 24.3821 13.6457C24.6948 13.359 25.0336 13.1071 25.2508 12.8726C25.5258 12.604 25.7785 12.3135 26.0064 12.0039C26.7187 11.0919 26.4234 10.1972 27.2138 10.7792L27.9174 11.2917C28 11.3432 28.0681 11.4149 28.1153 11.5C28.1626 11.5851 28.1873 11.6808 28.1873 11.7781C28.1873 11.8754 28.1626 11.9712 28.1153 12.0563C28.0681 12.1414 28 12.213 27.9174 12.2645L27.9348 12.2819ZM19.7176 5.82807L16.8338 7.93014C16.6792 8.03571 16.5019 8.10332 16.3163 8.12747C16.1306 8.15162 15.9419 8.1316 15.7654 8.06909C15.14 7.85194 15.8436 7.48712 16.1563 7.20047C16.469 6.91383 16.8078 6.66194 17.0249 6.42742C17.2421 6.19289 17.4766 5.9323 17.7806 5.55879C18.4842 4.63806 18.1889 3.75206 18.988 4.33404L19.6916 4.83783C19.7742 4.88933 19.8423 4.96103 19.8895 5.04613C19.9367 5.13123 19.9615 5.22695 19.9615 5.32428C19.9615 5.4216 19.9367 5.5173 19.8895 5.6024C19.8423 5.6875 19.7742 5.7592 19.6916 5.8107L19.7176 5.82807Z"
        fill={color}
      />
    </svg>
  );
};

export default RolleIcon;