import React from "react"
import styled from "styled-components"

const Path = styled.path`
  fill: black;
  fill-rule: evenodd;
  clip-rule: evenodd;
`

const DiscoBall = ({ className }) => (
  <svg width="100%" viewBox="0 0 62 50" className={className}>
    <Path d="M53.6651 0.0168153C51.5299 0.874246 49.4116 1.74849 47.2932 2.60592C46.9906 2.72361 46.6375 2.72361 46.3517 2.87492C45.7128 3.19435 45.1244 3.68191 44.4519 3.91729C43.0565 4.38803 41.6274 4.79153 40.1816 5.11096C38.2145 5.54809 36.2307 5.91796 34.23 6.22058C32.3974 6.50639 30.5649 6.72495 28.7323 6.84264C26.2777 7.01076 23.8063 7.12845 21.3517 7.11164C19.4351 7.11164 17.5017 6.99395 15.6019 6.69133C13.0296 6.30464 10.4573 5.76665 7.93544 5.12778C6.47276 4.75791 5.07734 4.10222 3.64828 3.54741C2.60592 3.16073 1.51311 2.85811 0.655681 2.06793C0.554806 1.98386 0.235371 2.13517 0.0336227 2.1688C0.0840599 2.33692 0.0672475 2.58911 0.184934 2.67317C0.672493 2.99261 1.17686 3.34567 1.73167 3.54741C2.35373 3.76597 2.67317 4.11903 2.80766 4.74109C3.1271 6.33827 3.42972 7.91863 3.81641 9.49899C3.98453 10.2051 4.03497 10.9953 4.67384 11.5837C5.12777 11.1634 5.63214 10.8272 5.93477 10.3732C6.80901 9.06187 7.616 7.70007 8.423 6.33827C8.60793 6.00202 8.79287 5.9684 9.11231 6.06927C11.113 6.72495 13.1809 7.11164 15.2824 7.3302C15.4674 7.34701 15.7364 7.53195 15.8036 7.71688C16.039 8.37257 16.2239 9.04506 16.3921 9.71756C16.6947 10.8608 16.9805 12.0209 17.2663 13.1641C17.3504 13.5003 17.5521 13.6853 17.8379 13.4667C18.1574 13.2313 18.46 12.9287 18.6449 12.5925C19.4183 11.0794 20.1412 9.53262 20.8978 8.01951C20.9482 7.91863 21.1163 7.80094 21.234 7.78413C22.4277 7.71688 23.6214 7.68326 24.8151 7.63282C26.0592 7.58238 27.3033 7.61601 28.5306 7.49832C29.0854 7.44788 29.3712 7.53195 29.657 7.98588C30.5145 9.43174 31.4055 10.8608 32.2461 12.3067C32.616 12.9287 33.0699 12.996 33.5239 12.4075C33.6416 12.2394 33.7424 12.0545 33.8265 11.8695C34.4149 10.4909 34.9697 9.0955 35.6254 7.75051C35.8776 7.22932 35.9617 6.5232 36.7182 6.38871C38.349 6.06927 39.9798 5.74984 41.7283 5.41359C41.8124 6.50639 41.8964 7.56557 41.9805 8.64156C42.1486 10.7431 42.4681 24.4788 42.5857 25.6725L43.4432 25.538C43.3759 24.7478 43.1406 12.3739 43.0061 10.3228C42.9052 8.77606 42.8379 7.22932 42.7202 5.66577C42.6866 5.2959 42.8379 5.11097 43.1742 4.97647C44.1493 4.60659 45.1076 4.2031 46.0827 3.83322C46.2508 3.76598 46.5535 3.7996 46.6711 3.91729C47.2091 4.45528 47.7135 5.0269 48.2179 5.59852C48.8231 6.28783 49.3948 6.97714 49.9832 7.68326C50.2522 8.00269 50.5548 7.96907 50.7229 7.64963C50.9583 7.21251 51.1264 6.74177 51.2946 6.25421C51.3786 6.01883 51.3954 5.76665 51.4291 5.53127C51.6476 4.30397 51.8325 3.05986 52.1015 1.83255C52.152 1.58037 52.4378 1.34499 52.6732 1.19368C53.1103 0.924684 53.581 0.739747 54.0182 0.470749C54.119 0.420312 54.1022 0.184939 54.1358 0.0504401C53.9677 0.0336277 53.7996 -0.0336218 53.6651 0.0168153ZM4.80834 10.4573C4.20309 8.40619 4.25353 6.40552 3.74916 4.42166C5.11096 4.8924 6.3887 5.32953 7.71688 5.80027C7.26294 7.56557 6.17014 8.961 4.80834 10.4573ZM17.9892 12.1049C17.9388 12.1049 17.8716 12.1049 17.8211 12.1049C17.4849 10.5918 17.1654 9.07869 16.7956 7.4647C17.922 7.54876 18.9475 7.63282 20.074 7.71688C19.3679 9.21318 18.6785 10.659 17.9892 12.1049ZM32.9523 11.7014C32.0444 10.1715 31.2038 8.77606 30.3295 7.29657C31.9603 7.11164 33.5575 6.9267 35.2555 6.72495C34.499 8.37257 33.7592 9.96974 32.9523 11.7014ZM50.269 6.7922C49.3107 5.66577 48.4533 4.65703 47.5958 3.6651C47.3941 3.42973 47.3268 3.19435 47.6463 3.07667C48.8399 2.62273 50.0504 2.20242 51.4122 1.69805C51.1264 3.46335 50.9415 5.12778 50.269 6.7922Z" />
    <Path d="M13.7357 26.614C13.4499 24.9159 13.1809 23.3188 12.9119 21.6711C12.5084 21.772 12.1385 21.8393 11.7687 21.9401C11.382 22.0578 11.0962 22.0074 11.0289 21.5535C10.9785 21.0995 11.3147 21.1332 11.6173 21.1332C11.735 21.1332 11.8695 21.1163 11.9872 21.0995C12.8278 20.9987 12.8951 20.8978 12.7102 20.0235C12.6933 19.9395 12.6597 19.8722 12.6597 19.7882C12.6261 19.1661 12.3403 18.9475 11.7014 19.0652C10.9953 19.1997 10.2555 19.2165 9.53262 19.267C9.19637 19.2838 9.12912 19.4015 9.21318 19.7545C9.61668 21.5366 9.96974 23.3356 10.4069 25.1009C10.5077 25.538 10.8776 25.9079 11.0457 26.3282C11.1634 26.5972 11.2475 26.9839 11.1466 27.2192C10.6759 28.2616 10.39 28.9005 8.86012 28.7155C8.54069 28.6819 8.06994 28.4633 7.98588 28.2112C7.85138 27.8077 7.81775 27.236 8.00269 26.883C8.35575 26.2273 8.97781 25.7397 9.31405 25.0841C9.49899 24.7142 9.34768 24.1594 9.24681 23.7054C8.91056 22.1083 8.52387 20.4943 8.154 18.8971C8.06994 18.5104 8.17081 18.3927 8.57431 18.3759C9.86886 18.3591 11.1634 18.3255 12.458 18.2582C12.8783 18.2414 13.1137 18.275 13.1809 18.7626C13.349 20.074 13.5844 21.3685 13.7693 22.6631C14.0047 24.1762 14.2233 25.6725 14.4755 27.1856C14.6268 28.1775 14.5091 29.1022 13.7525 29.8083C13.349 30.195 12.8783 30.5145 12.2394 30.2959C11.6005 30.0773 11.2979 29.573 11.1634 28.9677C10.8608 27.5387 11.5165 26.7485 12.996 26.7149C13.1977 26.7149 13.3995 26.6644 13.7357 26.614Z" />
    <Path d="M1.34499 30.1278C1.93342 31.1533 2.53867 32.1621 3.07666 33.2044C3.49697 33.9946 3.83322 34.8352 4.25353 35.6254C4.45528 35.9953 4.72428 36.3484 5.0269 36.6342C5.90114 37.4244 5.9852 38.1977 5.21184 39.1224C4.55615 39.9126 4.47209 39.9294 3.49697 39.61C3.17754 39.4923 2.82448 39.425 2.52186 39.2737C1.91661 38.9543 1.71486 37.8447 2.15198 37.3067C2.50504 36.8695 2.89173 36.4997 3.36247 35.9785C3.24479 35.6254 3.1271 35.0706 2.89173 34.5662C2.00067 32.7673 1.05918 30.9852 0.134499 29.1863C0.0336247 29.0182 0.0504371 28.7828 0 28.581C0.201748 28.5979 0.437122 28.581 0.622058 28.6483C1.64761 29.0854 2.67317 29.5057 3.6651 29.9933C4.08541 30.195 4.42165 30.5481 4.77471 30.8507C4.8924 30.9516 5.0269 31.1197 5.0269 31.2542C5.0269 31.5905 4.99328 31.9435 4.85878 32.2293C4.80834 32.3134 4.3544 32.1789 3.86685 32.1116C4.53934 31.5905 4.28716 31.3046 3.9341 31.0525C3.17754 30.5649 2.40417 30.1446 1.52993 29.9428C1.44586 30.0101 1.39543 30.0773 1.34499 30.1278Z" />
    <Path d="M21.1163 32.7841C21.0491 32.9691 20.9987 33.0363 20.9987 33.1036C20.9314 35.0034 20.8642 36.92 20.8305 38.8198C20.8137 39.2905 21.0155 39.7781 20.9818 40.232C20.9314 41.0054 20.3598 41.4593 19.7041 41.7619C19.1325 42.0141 18.0565 41.4761 17.7539 40.8036C17.1654 39.4755 17.9724 38.1641 19.4183 38.1809C20.0235 38.1809 20.0908 37.8951 20.1244 37.4243C20.1917 35.7263 20.2757 34.0282 20.3598 32.347C20.3598 32.2798 20.3766 32.2125 20.3598 32.1621C20.2421 31.8258 20.1412 31.4391 20.5447 31.3215C20.7465 31.2542 21.1332 31.4896 21.2845 31.6913C21.9065 32.5319 22.5118 33.3894 23.0161 34.2972C23.1506 34.5326 22.9825 35.0034 22.8648 35.3228C22.8312 35.4237 22.4781 35.3901 22.2596 35.4405C22.2596 35.2892 22.2428 35.1211 22.226 34.9697C22.1923 34.7007 22.226 34.3813 22.0915 34.1627C21.8561 33.7088 21.503 33.3053 21.1163 32.7841Z" />
    <Path d="M43.8467 24.3611C45.5111 24.4452 47.0242 24.4956 48.3692 25.2522C49.5965 25.9415 50.8238 26.6813 51.5131 27.9422C51.9502 28.7324 52.1856 29.6907 52.3201 30.5985C52.5723 32.2461 52.2697 33.8265 51.3786 35.2556C50.6389 36.4661 49.7478 37.542 48.6046 38.4331C47.6295 39.1897 46.5703 39.7108 45.4102 39.963C44.5696 40.148 43.6449 40.1648 42.7875 40.0303C41.4425 39.8285 40.0975 39.5595 38.8198 39.1056C37.7942 38.7357 36.9536 37.9455 36.2475 37.0881C35.6422 36.3652 35.2051 35.5582 34.8857 34.6671C34.6503 34.0283 34.4486 33.4062 34.6335 32.7169C34.7344 32.2966 34.6839 31.8258 34.768 31.4055C35.0874 29.7075 35.928 28.2616 37.0713 26.9839C37.2898 26.7317 37.542 26.5131 37.7774 26.2778C39.0551 24.9832 40.7196 24.731 42.4176 24.5293C42.9388 24.4452 43.46 24.3948 43.8467 24.3611ZM50.3026 35.1883C49.8487 35.7263 48.9576 35.4909 48.7391 36.2979C48.5878 36.8696 48.2011 37.3907 47.9153 37.9287C47.9825 37.9624 48.0498 37.996 48.117 38.0296C49.8991 36.7519 51.1096 35.0538 51.6644 32.8514C50.9079 33.6584 50.1345 32.6328 49.4284 32.9018C49.3443 33.4398 49.2434 33.9274 49.2098 34.4149C49.193 34.5494 49.3443 34.7344 49.462 34.8184C49.6974 34.9529 49.9664 35.037 50.3026 35.1883ZM42.8043 35.3733C42.8884 36.0626 42.9388 36.651 43.0397 37.2394C43.0565 37.3235 43.2078 37.4412 43.3087 37.4412C43.9139 37.5084 44.536 37.5757 45.158 37.6093C45.4943 37.6261 45.7297 37.542 45.7297 37.1049C45.7297 36.6846 45.8642 36.2811 45.8978 35.8608C45.8978 35.7599 45.7465 35.5582 45.6456 35.5414C44.7041 35.4741 43.7794 35.4405 42.8043 35.3733ZM45.7633 32.6833C45.1076 32.7505 44.5528 32.801 43.998 32.8514C43.6113 32.885 43.0733 32.7673 42.8884 32.9691C42.6698 33.2045 42.7875 33.7424 42.6866 34.1291C42.5689 34.6335 42.6866 34.768 43.1742 34.5999C43.3087 34.5494 43.4936 34.6167 43.6449 34.6167C44.3678 34.6503 45.0908 34.6839 45.7633 34.7176C45.7633 34.0114 45.7633 33.3558 45.7633 32.6833ZM51.4795 29.5225C50.7397 29.6907 50.1345 29.842 49.5292 29.9765C49.2939 30.0269 48.924 29.9933 49.0417 30.3463C49.2266 30.8843 48.8568 31.5737 49.462 31.994C49.4788 32.0108 49.5292 31.994 49.5629 31.994C50.1009 32.0612 50.6389 32.1453 51.1769 32.1957C51.5299 32.2293 51.883 32.2461 51.7149 31.6913C51.6644 31.5064 51.7149 31.3047 51.6812 31.1029C51.6308 30.5649 51.5467 30.0269 51.4795 29.5225ZM42.4008 30.1446C43.1574 30.0774 43.7626 29.9933 44.3847 29.9765C45.4943 29.926 45.3934 30.1446 45.2085 28.85C45.2085 28.7996 45.1917 28.7492 45.1748 28.6987C45.0067 27.7236 45.0067 27.7236 44.0148 27.7236C43.0565 27.7236 43.0565 27.7236 42.8379 28.6147C42.7202 29.0686 42.5689 29.5225 42.4008 30.1446ZM47.9489 26.9503C48.1843 27.7068 48.3692 28.3793 48.6046 29.0518C48.655 29.2031 48.9072 29.4217 49.0081 29.4049C49.6974 29.2199 50.3699 28.9845 51.2273 28.7155C50.5716 28.0599 50.0336 27.4546 49.4284 26.9334C48.7559 26.3786 48.6046 26.4123 47.9489 26.9503ZM42.0309 37.3907C41.9469 36.8359 41.8964 36.2643 41.7787 35.7095C41.7619 35.5918 41.4929 35.4741 41.3416 35.4573C40.77 35.3901 40.1816 35.3733 39.6099 35.3396C39.2737 35.3228 39.2065 35.5414 39.2905 35.7936C39.4418 36.2307 39.6604 36.6678 39.7781 37.1217C39.8958 37.6429 40.2488 37.6261 40.6355 37.5757C41.0726 37.5252 41.5266 37.458 42.0309 37.3907ZM39.5595 27.9254C39.1224 27.8581 38.7189 27.8077 38.3322 27.7236C37.7438 27.5891 37.0713 27.959 36.8695 28.5306C36.7855 28.766 36.651 29.0014 36.5333 29.2367C36.3988 29.4889 36.4324 29.7243 36.735 29.7579C37.3403 29.8252 37.9623 29.842 38.5844 29.8756C38.6685 29.8756 38.8198 29.7915 38.8534 29.6907C39.0888 29.119 39.3073 28.5474 39.5595 27.9254ZM35.5414 32.3975C36.4492 32.3975 37.2394 32.3975 38.0296 32.3806C38.1136 32.3806 38.2818 32.263 38.2818 32.1957C38.349 31.6745 38.3826 31.1533 38.4331 30.6322C37.5588 30.5817 36.7687 30.5481 35.9617 30.4977C35.8272 31.1029 35.7095 31.6745 35.5414 32.3975ZM35.5077 33.2213C35.5918 33.5575 35.6422 33.8097 35.7263 34.0619C35.9449 34.8521 36.0625 34.9361 36.8695 34.8857C37.3067 34.8689 37.727 34.8184 38.1977 34.768C38.1977 34.3981 38.1977 34.0451 38.1977 33.7088C38.1977 33.154 37.9455 33.0027 37.3907 33.1036C36.92 33.1876 36.4156 33.154 35.9449 33.1876C35.8104 33.2045 35.6927 33.2213 35.5077 33.2213ZM41.7283 33.0027C41.2071 33.0195 40.7028 33.07 40.2152 33.07C39.1392 33.0868 39.1392 33.07 39.156 34.1628C39.156 34.1796 39.156 34.2132 39.156 34.2132C39.2569 34.3309 39.3746 34.5663 39.4754 34.5663C40.2152 34.5999 40.9381 34.5831 41.7115 34.5831C41.7283 34.0283 41.7283 33.5071 41.7283 33.0027ZM39.4754 30.6322C39.3914 31.187 39.3073 31.7418 39.2233 32.3302C40.0134 32.3302 40.6859 32.3302 41.3584 32.3302C41.4761 32.3302 41.6947 32.2125 41.6947 32.1621C41.6779 31.7586 41.7451 31.2878 41.5434 30.9852C41.4089 30.7667 40.9381 30.7162 40.6019 30.6658C40.2656 30.5817 39.8958 30.6322 39.4754 30.6322ZM42.5857 32.0948C43.5945 32.0276 44.536 31.9603 45.4775 31.8763C45.5447 31.8763 45.6456 31.6745 45.6456 31.5737C45.6624 31.4223 45.612 31.271 45.5783 31.1029C45.5111 30.6994 45.2757 30.5649 44.8554 30.6322C44.2838 30.7162 43.6954 30.8171 43.1237 30.8171C42.5689 30.8171 42.3504 30.9348 42.5521 31.5064C42.6362 31.6577 42.5857 31.8595 42.5857 32.0948ZM39.6436 29.9092C40.3329 29.9765 40.8373 30.0437 41.3248 30.0437C41.4593 30.0437 41.6947 29.8756 41.7115 29.7579C41.7956 29.304 41.8292 28.85 41.8292 28.3961C41.8292 28.1776 41.7283 27.9422 41.6779 27.7236C41.3584 27.8245 40.8877 27.8077 40.7196 28.0262C40.2993 28.5642 40.0303 29.2199 39.6436 29.9092ZM46.2676 29.7411C46.6543 29.7411 47.0242 29.7411 47.3941 29.7411C47.6799 29.7411 47.7808 29.5898 47.6967 29.3376C47.5286 28.8164 47.31 28.3289 47.1587 27.7909C47.0074 27.2697 46.6039 27.3537 46.2676 27.4042C45.8473 27.4714 46.0155 27.8581 46.0323 28.1103C46.0827 28.6315 46.1836 29.1527 46.2676 29.7411ZM46.7216 33.7256C46.7888 34.6335 46.7888 34.6335 47.6126 34.768C48.0329 34.8353 48.2515 34.6839 48.2683 34.2468C48.2683 34.0787 48.3692 33.8938 48.3356 33.7256C48.2683 33.3894 48.2179 32.885 47.9993 32.7673C47.6967 32.616 47.2091 32.6665 46.8729 32.8346C46.7384 32.9186 46.772 33.4062 46.7216 33.7256ZM38.9375 37.8279C38.7525 37.4916 38.618 37.2899 38.534 37.0713C38.4499 36.8359 38.4163 36.6006 38.349 36.3652C38.1136 35.4069 38.2145 35.5246 37.273 35.6591C37.2394 35.6591 37.2058 35.6591 37.1722 35.6759C36.5165 35.8272 36.5165 35.8272 36.92 36.3652C36.9536 36.3988 36.9704 36.4492 37.004 36.4997C37.5252 37.0209 38.0128 37.5925 38.9375 37.8279ZM46.5703 30.5649C46.5703 31.7754 46.5703 31.7754 47.579 31.9772C47.7471 32.0108 48.1002 31.9267 48.1002 31.8931C48.1002 31.4728 48.0834 31.0525 48.0161 30.649C47.9993 30.5481 47.764 30.4304 47.6463 30.4304C47.2932 30.4304 46.9401 30.4977 46.5703 30.5649ZM43.0901 26.9671C43.5104 26.9671 43.9139 26.9503 44.3174 26.9671C44.6873 26.9839 44.7377 26.8158 44.62 26.5131C44.4687 26.1601 44.3342 25.807 44.1325 25.4708C44.0484 25.3363 43.813 25.1681 43.7122 25.2018C43.5609 25.269 43.3927 25.4708 43.3423 25.6389C43.2414 26.0424 43.1742 26.4795 43.0901 26.9671ZM41.4761 25.5716C40.2824 25.5044 39.6268 26.3786 38.7525 26.8494C39.1896 26.9839 39.6099 27.0343 40.0303 27.0679C40.1479 27.0679 40.3329 27.0175 40.4001 26.9334C40.77 26.5131 41.0894 26.076 41.4761 25.5716ZM45.3934 38.5172C44.6368 38.3995 43.998 38.3154 43.2414 38.1977C43.4768 38.6517 43.5777 39.1392 43.8635 39.2905C44.1997 39.4587 44.7041 39.3914 45.0908 39.2905C45.2253 39.2233 45.2757 38.8198 45.3934 38.5172ZM42.4681 39.2065C42.1822 38.1137 42.3336 37.9624 40.9886 38.1809C40.9045 38.1977 40.8036 38.1809 40.7364 38.2145C40.6019 38.2818 40.501 38.3659 40.3833 38.4499C40.501 38.5508 40.5851 38.6853 40.7196 38.7357C40.9549 38.8366 41.2071 38.9038 41.4593 38.9711C41.7619 39.0552 42.0814 39.1224 42.4681 39.2065ZM46.7384 37.6093C46.8056 37.6429 46.8729 37.6597 46.9401 37.6934C47.226 37.0545 47.5286 36.3988 47.848 35.6927C47.4613 35.6927 47.226 35.6927 46.9906 35.6927C46.9233 36.3316 46.8225 36.9704 46.7384 37.6093ZM46.772 25.4035C46.9233 26.2946 47.2932 26.4459 48.4028 26.0592C47.8144 25.8238 47.3436 25.6221 46.772 25.4035ZM41.5602 26.9503C42.2831 27.0511 42.1822 26.5804 42.2831 26.2273C42.2327 26.1937 42.1991 26.1601 42.1486 26.1264C41.9637 26.4123 41.7619 26.6813 41.5602 26.9503Z" />
    <Path d="M56.8258 31.8931C57.8009 32.1621 58.6584 32.3638 59.4822 32.6496C59.9866 32.8346 60.4237 33.154 60.8944 33.4398C60.9449 33.4734 60.928 33.6416 60.9449 33.7424C60.8608 33.7424 60.7599 33.7593 60.6759 33.7424C59.9866 33.5407 59.2972 33.2717 58.5911 33.1204C58.0363 33.0027 57.4647 33.0027 56.8931 32.9859C56.54 32.9691 56.3719 32.7673 56.4223 32.4815C56.4728 32.2798 56.6745 32.0948 56.8258 31.8931Z" />
    <Path d="M55.5649 45.2085C55.1446 44.9227 54.6906 44.6873 54.304 44.3679C53.9005 44.0316 53.5642 43.6281 53.2112 43.2414C53.1103 43.1406 52.9926 43.0061 52.9926 42.8884C52.9758 42.6698 53.043 42.4513 53.0767 42.2327C53.2784 42.2663 53.5642 42.2327 53.6819 42.3672C54.1527 42.8716 54.573 43.4096 54.9933 43.9476C55.2623 44.2838 55.4808 44.6537 55.733 45.0067C55.6826 45.0572 55.6153 45.1412 55.5649 45.2085Z" />
    <Path d="M25.7397 38.8198C26.967 38.4667 28.0262 38.1473 29.0854 37.8615C29.4553 37.7606 29.8756 37.6597 30.2791 38.1473C29.8588 38.2818 29.5225 38.3995 29.1695 38.4835C28.228 38.7021 27.3033 38.9039 26.3618 39.072C26.2105 39.0888 26.0087 38.9375 25.7397 38.8198Z" />
    <Path d="M33.5743 19.1997C33.5743 19.1157 33.5407 19.0148 33.5743 18.9307C33.6416 18.7962 33.7424 18.6954 33.8265 18.5777C33.9106 18.6954 34.0787 18.7962 34.0955 18.9307C34.2468 19.9227 34.8184 20.7129 35.3564 21.5198C35.4405 21.6543 35.5582 21.772 35.5918 21.9065C35.6086 21.9906 35.5245 22.1587 35.4405 22.2092C35.39 22.2428 35.2219 22.1755 35.1547 22.1083C34.499 21.4862 34.1123 20.696 33.7424 19.9227C33.6416 19.7041 33.6079 19.4519 33.5407 19.2334C33.5407 19.2166 33.5575 19.1997 33.5743 19.1997Z" />
    <Path d="M52.6563 23.033C52.2865 22.6799 52.4714 22.3437 52.6563 22.0915C53.2952 21.234 54.1022 20.5279 55.0269 19.9899C55.111 19.9395 55.2623 19.9899 55.3968 20.0067C55.3631 20.1076 55.38 20.2589 55.3127 20.3262C55.0437 20.5447 54.6906 20.696 54.4553 20.9482C53.9005 21.5703 53.3793 22.226 52.8413 22.8648C52.8077 22.9153 52.7404 22.9489 52.6563 23.033Z" />
    <Path d="M36.4324 43.5777C36.3652 43.6954 36.3483 43.8131 36.2643 43.8635C35.5414 44.5192 34.8184 45.1749 34.0955 45.8137C33.9946 45.8978 33.8433 45.9482 33.7088 45.965C33.6247 45.965 33.5071 45.8978 33.4566 45.8305C33.423 45.7969 33.4734 45.6624 33.5407 45.612C34.3141 44.9059 35.0706 44.2165 35.8608 43.5441C35.9617 43.46 36.0962 43.3759 36.2139 43.3759C36.2811 43.3591 36.3652 43.5104 36.4324 43.5777Z" />
    <Path d="M45.0404 49.9832C45.0067 49.8487 44.9395 49.7142 44.9227 49.5629C44.8554 48.7391 44.7714 47.9153 44.7209 47.0915C44.7209 46.957 44.8554 46.8057 44.9227 46.6543C45.0403 46.7384 45.2253 46.8057 45.2589 46.9065C45.3598 47.3436 45.427 47.7976 45.4438 48.2347C45.4607 48.655 45.4102 49.0753 45.3598 49.4956C45.343 49.6638 45.2925 49.8319 45.2421 49.9832C45.1748 50 45.1076 49.9832 45.0404 49.9832Z" />
    <Path d="M29.842 29.2535C29.6907 29.2367 29.5393 29.2535 29.4048 29.2199C28.497 28.9509 27.5555 28.9341 26.5972 28.9005C26.3114 28.9005 26.0256 28.8332 26.0424 28.3625C27.3369 28.5979 28.7155 28.2616 29.842 29.2535Z" />
  </svg>
)

export default DiscoBall
