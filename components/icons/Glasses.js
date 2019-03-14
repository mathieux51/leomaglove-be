import React from "react"
import styled from "styled-components"

const Path = styled.path`
  fill: black;
  fill-rule: evenodd;
  clip-rule: evenodd;
`

const Sun = ({ className }) => (
  <svg width="100%" viewBox="0 0 45 50" className={className}>
    <Path d="M37.6989 47.8886C38.5863 47.8886 39.4431 47.9192 40.2999 47.8886C40.8813 47.8733 41.7534 48.6689 41.2638 49.2503C41.019 49.541 40.5447 49.7705 40.1622 49.8011C39.3054 49.8623 38.4333 49.7705 37.5612 49.7552C36.888 49.7399 36.2148 49.7552 35.5569 49.7246C34.6083 49.6787 33.675 49.6175 32.7264 49.541C32.5887 49.5257 32.4357 49.4492 32.3286 49.3727C32.0226 49.1432 32.0685 48.776 32.4357 48.6536C33.0324 48.47 33.6291 48.2711 34.2411 48.1793C35.0826 48.0569 35.9394 48.0263 36.7962 47.9192C36.888 47.9039 37.041 47.7356 37.041 47.6438C37.041 47.3684 36.9186 47.0777 36.9339 46.8023C36.9339 45.869 36.9645 44.9357 36.9951 44.0024C37.0104 43.6506 37.0563 43.2987 37.0563 42.9621C37.0716 40.9731 37.1022 38.9841 37.1022 36.9951C37.1022 36.2454 36.9339 35.4957 36.9186 34.746C36.9033 33.675 36.9492 32.604 36.9798 31.533C36.9951 31.1353 36.888 30.9976 36.429 30.9211C35.1132 30.6916 33.9045 30.202 33.0783 29.0698C32.757 28.6414 32.4816 28.1824 32.2062 27.7234C31.9002 27.2338 31.839 26.6983 31.8543 26.1169C31.8849 24.8929 31.8237 23.6689 31.8237 22.4449C31.8237 21.2362 31.8849 20.0275 31.8543 18.8342C31.8237 17.6408 31.7319 16.4474 31.5942 15.2693C31.4565 14.03 31.1964 12.806 31.0587 11.5667C30.9822 10.7711 31.0282 9.97552 31.0435 9.17993C31.0435 9.01163 31.1352 8.82803 31.2576 8.70563C31.8849 8.04774 32.6346 7.75704 33.5526 7.86414C34.0422 7.92534 34.5471 7.87944 35.052 7.91004C36.4596 8.00184 37.8672 8.10894 39.2748 8.23134C39.8409 8.27724 40.407 8.27724 40.9578 8.38433C41.5392 8.49143 41.9523 8.95043 42.0747 9.48593C42.2583 10.3274 42.3807 11.1995 42.396 12.0563C42.4266 13.571 42.3348 15.101 42.3195 16.6157C42.3195 17.09 42.3501 17.5643 42.3654 18.0386C42.4113 19.8133 42.3501 21.5728 42.1206 23.3476C41.8758 25.2907 41.2485 27.0808 40.4529 28.8097C40.0245 29.7277 39.1524 30.2938 38.2038 30.6763C37.806 30.8446 37.6683 31.0588 37.6683 31.5024C37.6377 32.6193 37.4847 33.7362 37.4541 34.8378C37.4388 35.6181 37.5918 36.3984 37.6377 37.1787C37.6836 38.0049 37.6989 38.8311 37.6989 39.6726C37.6989 40.0704 37.5918 40.4682 37.5918 40.8507C37.5612 42.6561 37.5306 44.4614 37.5306 46.2668C37.5153 46.7717 37.6377 47.3072 37.6989 47.8886ZM41.784 15.866C41.1873 15.9272 40.6671 15.9884 40.1316 16.0649C39.7491 16.1108 39.3666 16.2332 38.9994 16.2026C37.9131 16.1261 36.8268 15.9578 35.7405 15.8813C34.593 15.7895 33.4455 15.7436 32.2674 15.6824C32.298 16.5698 32.3439 17.4419 32.3898 18.3293C32.3898 18.4976 32.4663 18.6506 32.4663 18.8189C32.451 19.9663 32.4204 21.1291 32.4204 22.2766C32.4204 22.7509 32.4663 23.2405 32.4816 23.7148C32.4969 24.6328 32.451 25.5661 32.5275 26.4841C32.5734 26.9431 32.757 27.4174 32.9865 27.8152C33.6597 28.9168 34.6083 29.6665 35.8629 30.1255C37.3929 30.6916 39.2136 29.8348 39.8715 28.6567C40.3458 27.7999 40.6824 26.8513 40.9731 25.918C41.5392 24.1279 41.8146 22.2919 41.784 20.4253C41.7687 18.926 41.784 17.4419 41.784 15.866ZM41.325 9.47063C40.6671 9.45533 39.9939 9.40943 39.336 9.45533C38.1579 9.53183 36.9798 9.71542 35.7864 9.76132C34.4247 9.82252 33.063 9.79192 31.7013 9.79192C31.5177 11.4443 31.7319 13.1579 32.1144 14.8256C32.3592 14.7644 32.5734 14.7032 32.7723 14.6726C33.3996 14.5655 34.0269 14.4584 34.6542 14.3972C35.1897 14.3513 35.7252 14.3513 36.2607 14.3819C36.9951 14.4278 37.7295 14.5655 38.4792 14.6114C39.5655 14.6879 40.6518 14.7185 41.8146 14.7644C41.7993 14.7797 41.8911 14.6726 41.8911 14.5808C41.8758 12.8672 41.8146 11.1689 41.325 9.47063ZM31.8849 9.05753C32.7723 9.25643 33.5832 9.37883 34.4247 9.31763C35.2203 9.25643 36.0159 9.16463 36.7962 9.11873C37.7142 9.05753 38.6322 9.04223 39.5502 8.99633C39.5502 8.91983 39.5502 8.85863 39.5502 8.78213C38.5557 8.69033 37.5459 8.58323 36.5514 8.52203C35.8017 8.46083 35.052 8.41493 34.3023 8.43023C33.5067 8.43023 32.6499 8.29254 31.8849 9.05753ZM40.6671 15.407C40.0704 14.9327 34.7307 14.7644 34.0881 15.2387C36.3372 15.101 38.4486 15.7742 40.6671 15.407ZM40.7895 48.9443C40.6824 48.5312 40.407 48.5006 40.1163 48.5159C39.8868 48.5312 39.6726 48.5465 39.4431 48.5465C39.0606 48.5465 38.6781 48.4853 38.2956 48.5159C38.1732 48.5312 38.0508 48.6995 37.9284 48.8066C38.0355 48.9443 38.1273 49.1585 38.265 49.1891C39.1065 49.3574 39.9327 49.235 40.7895 48.9443ZM33.981 48.776C33.981 48.8678 33.9657 48.9749 33.9657 49.0667C35.0214 49.082 36.0924 49.082 37.1481 49.0973C37.2858 48.6842 37.0716 48.6383 36.7809 48.6536C35.8476 48.6995 34.9143 48.7454 33.981 48.776Z" />
    <Path d="M19.1248 35.1744C18.7271 35.5416 19.0024 35.7864 19.3237 36.1689C19.8133 36.7503 20.2111 37.4388 20.5477 38.112C20.6395 38.2956 20.4712 38.8311 20.3029 38.8923C19.7215 39.1065 19.6909 39.6726 19.6603 40.0398C19.5685 40.9425 19.1248 41.6616 18.7883 42.4419C18.2528 43.6811 17.5796 44.8745 17.1359 46.1597C16.7993 47.1542 16.2179 48.011 15.8201 48.9443C15.5906 49.4798 15.2387 49.6634 14.7338 49.7093C13.8005 49.7858 12.8672 49.7705 11.9492 49.9235C10.2662 50.1989 8.69033 49.7705 7.05325 49.5257C6.34945 49.4186 5.85985 49.2044 5.41616 48.7148C5.24786 48.5312 5.07956 48.3323 4.97246 48.1181C4.40637 47.0012 3.84027 45.8843 3.28948 44.7521C2.84578 43.8647 2.43268 42.9774 1.97369 42.1053C1.45349 41.0955 0.979194 40.0398 0.305999 39.1524C-0.183597 38.4945 -0.0611976 37.9896 0.2295 37.4082C0.351899 37.1634 0.566097 36.9492 0.749696 36.735C1.11689 36.3372 1.57589 36.0006 1.54529 35.3886C1.54529 35.2203 1.52999 35.0061 1.43819 34.8837C1.25459 34.6083 1.34639 34.4706 1.60649 34.3329C2.66218 33.7362 3.71787 33.1089 4.77356 32.5122C5.96695 31.839 7.29804 31.6554 8.64443 31.6554C9.62362 31.6554 10.6181 31.6401 11.582 31.7625C12.8672 31.9308 14.1524 32.1756 15.407 32.5275C15.9425 32.6805 16.3862 33.1854 16.8911 33.522C17.1512 33.6903 17.4419 33.8127 17.702 33.9657C17.9621 34.1187 18.2375 34.2564 18.467 34.4553C18.7118 34.6542 18.8801 34.899 19.1248 35.1744ZM18.2222 35.8323C17.8244 35.9088 17.4725 36.0312 17.1206 36.0159C16.2026 35.9853 15.2846 35.9241 14.3513 35.9547C13.0967 36.0006 11.8421 35.5875 10.5875 35.4498C9.65422 35.358 8.69033 35.2815 7.75704 35.3886C6.10465 35.5875 4.48287 35.9853 2.83048 36.1842C2.14198 36.2607 1.72889 36.6585 1.26989 37.0563C1.08629 37.2093 0.979194 37.4694 0.917995 37.6989C0.887395 37.8213 0.979194 38.0967 1.08629 38.1426C2.03489 38.5098 2.99878 38.8617 3.96267 39.1677C4.16157 39.2289 4.43697 39.1524 4.63586 39.0453C5.33966 38.6475 5.99755 38.1885 6.71665 37.8213C6.93085 37.7142 7.26744 37.7295 7.49694 37.806C8.29254 38.0661 9.05753 38.4333 9.86842 38.6628C10.4345 38.8311 11.0771 38.9688 11.6432 38.877C12.1328 38.7852 12.5612 38.3262 13.0355 38.0814C13.2956 37.9437 13.6322 37.7907 13.9076 37.8366C14.5808 37.959 15.254 38.1426 15.8966 38.4027C17.0135 38.8311 18.0692 38.8617 19.1248 38.2497C19.5532 38.0049 19.6756 37.7754 19.4002 37.3776C19.033 36.8268 18.6047 36.3219 18.2222 35.8323ZM9.97552 49.4492C10.0061 48.2558 10.0367 47.1083 10.0673 45.9761C10.0979 44.9816 10.1744 43.9871 10.1897 42.9774C10.205 41.8758 10.1744 40.7742 10.1132 39.6726C10.0979 39.5043 9.80722 39.3054 9.60833 39.2136C8.98103 38.9688 8.33844 38.7699 7.69584 38.571C7.32864 38.4639 6.97675 38.2956 6.57895 38.5557C5.92105 38.9841 5.23256 39.3513 4.55937 39.7644C4.48287 39.8103 4.43697 40.0092 4.46757 40.1163C4.68176 40.9272 4.92656 41.7228 5.15606 42.5337C5.69156 44.4155 5.73746 46.4198 6.53305 48.2558C6.67075 48.5618 6.80845 48.7301 7.06855 48.7913C8.01714 49.0208 8.98103 49.2197 9.97552 49.4492ZM16.4321 39.1371C15.5753 38.9076 14.8103 38.6934 14.0147 38.5098C13.8311 38.4639 13.6016 38.4945 13.4333 38.5863C12.6377 38.9841 11.8421 39.3972 10.9394 39.8562C10.8476 42.9009 10.7558 46.1291 10.664 49.3574C11.5055 49.3421 12.2705 49.3421 13.0202 49.3115C13.1579 49.3115 13.3721 49.2044 13.4027 49.0973C13.6628 48.2864 13.9076 47.4755 14.1524 46.6646C14.489 45.5324 14.8256 44.4002 15.1622 43.2681C15.4835 42.2277 15.8201 41.2026 16.1414 40.1775C16.2638 39.8256 16.3403 39.4737 16.4321 39.1371ZM8.41493 32.0685C6.71665 32.1909 5.92105 32.4357 4.78886 33.0324C4.19217 33.3537 3.58017 33.6444 2.96818 33.9351C2.52448 34.1493 2.18788 34.7919 2.32558 35.2662C2.34088 35.3274 2.40208 35.4039 2.46328 35.4345C2.81518 35.6334 3.15178 35.7711 3.59547 35.6028C3.90147 35.4957 4.26867 35.511 4.60526 35.4804C5.21726 35.4192 5.89045 35.4957 6.45655 35.2968C7.84884 34.8072 9.25643 34.9449 10.6487 34.9908C11.7197 35.0214 12.7601 35.2968 13.8311 35.4345C14.1065 35.4651 14.4125 35.4039 14.7032 35.3886C15.2081 35.3733 15.713 35.358 16.2026 35.3733C16.7993 35.3886 17.3807 35.6793 17.9774 35.2815C18.2375 35.0979 18.3293 35.0061 18.0692 34.8225C17.549 34.4553 17.0288 34.1034 16.5086 33.7515C16.0496 33.4455 15.6365 33.0018 15.1316 32.8794C13.8617 32.5428 12.5765 32.2521 11.276 32.0991C10.1897 31.9767 9.10343 32.0838 8.41493 32.0685ZM13.9382 49.1585C14.0147 49.2197 14.0912 49.2809 14.1677 49.3421C14.489 49.2044 14.9021 49.1585 15.1163 48.929C15.4376 48.5924 15.6365 48.1334 15.8354 47.6897C16.3556 46.5575 16.8146 45.3947 17.3195 44.2472C18.008 42.702 18.8495 41.2026 19.1707 39.5196C19.2166 39.3054 19.2166 39.0912 19.2319 38.8464C18.7118 39.03 18.2834 39.2748 17.8397 39.336C17.0288 39.4431 16.7993 40.0551 16.6004 40.6671C16.2179 41.7993 15.866 42.9468 15.5141 44.0942C14.9939 45.7772 14.4737 47.4602 13.9382 49.1585ZM5.24786 47.1695C5.29376 47.1542 5.33966 47.1542 5.38556 47.1389C5.21726 46.2668 5.09486 45.3794 4.88066 44.5226C4.49817 42.9927 4.06977 41.4627 3.64137 39.948C3.61077 39.8562 3.53427 39.7491 3.45777 39.7185C2.67748 39.4125 1.88189 39.1218 1.10159 38.8311C1.07099 38.877 1.04039 38.9229 1.00979 38.9688C2.43268 41.7075 3.84027 44.4461 5.24786 47.1695Z" />
    <Path d="M26.8666 10.5875C26.5759 10.4651 26.2546 10.3733 25.9792 10.2203C25.8874 10.1744 25.7956 9.91432 25.8415 9.85312C25.9333 9.73072 26.2087 9.56242 26.2546 9.60832C26.53 9.85312 26.7595 10.1591 27.0043 10.4345C26.9431 10.4957 26.8972 10.5416 26.8666 10.5875Z" />
    <Path d="M35.205 4.88068C35.4039 5.14078 35.6028 5.43147 35.2662 5.72217C35.1897 5.78337 34.9755 5.69157 34.8225 5.67627C34.8837 5.40087 34.9449 5.11018 35.0061 4.83478C35.0673 4.85008 35.1438 4.86538 35.205 4.88068Z" />
    <Path d="M34.0116 0C34.1493 0.214198 34.6236 0.275398 34.287 0.673195C34.2105 0.764994 33.9045 0.795594 33.8433 0.734394C33.5985 0.474296 33.6444 0.198898 34.0116 0Z" />
    <Path d="M44.2472 8.30782C44.3696 8.72091 44.2013 8.96571 43.8801 9.08811C43.8342 9.10341 43.6047 8.90451 43.62 8.84331C43.6812 8.53732 43.8036 8.23132 44.2472 8.30782Z" />
    <Path d="M40.56 5.47735C40.3458 5.66094 40.2081 5.87514 40.101 5.85984C39.948 5.82924 39.7491 5.67624 39.7185 5.52324C39.6879 5.41615 39.8868 5.15605 39.9939 5.15605C40.1469 5.14075 40.2999 5.32435 40.56 5.47735Z" />
    <Path d="M38.9841 1.6983C38.7546 1.91249 38.6169 2.14199 38.5098 2.12669C38.3568 2.09609 38.2191 1.92779 38.1273 1.7748C38.0967 1.7289 38.2956 1.4841 38.3874 1.4688C38.5557 1.4535 38.7087 1.5759 38.9841 1.6983Z" />
    <Path d="M28.7638 4.65117C28.6108 4.48287 28.4731 4.31458 28.3201 4.14628C28.4272 4.06978 28.519 3.91678 28.6261 3.91678C28.7791 3.91678 29.0086 4.00858 29.0392 4.10038C29.0851 4.25338 28.978 4.43697 28.9321 4.60527C28.8709 4.62057 28.825 4.63587 28.7638 4.65117Z" />
    <Path d="M44.7215 4.11566C44.5838 3.91676 44.5073 3.84026 44.4614 3.73316C44.4002 3.59546 44.3696 3.44246 44.339 3.30476C44.4461 3.30476 44.5838 3.25886 44.6297 3.30476C44.7368 3.41186 44.8286 3.56486 44.8745 3.71786C44.9051 3.79436 44.8133 3.91676 44.7215 4.11566Z" />
    <Path d="M26.3923 14.4737C26.53 14.6573 26.6677 14.7644 26.6983 14.9021C26.7136 14.948 26.5147 15.1316 26.4076 15.1163C26.3005 15.1163 26.1475 14.9633 26.1475 14.8562C26.1322 14.7644 26.2699 14.6573 26.3923 14.4737Z" />
    <Path d="M36.8115 17.7479C36.4902 17.9774 36.2607 18.3905 35.8323 18.0233C35.8017 17.9927 35.8476 17.7479 35.9241 17.702C36.1842 17.549 36.4902 17.243 36.8115 17.7479Z" />
    <Path d="M37.5612 24.4645C37.3011 24.6787 37.1787 24.8623 37.0104 24.8929C36.9339 24.9082 36.6738 24.6328 36.7044 24.541C36.7503 24.3727 36.9186 24.2197 37.0869 24.1279C37.1481 24.0973 37.3164 24.2962 37.5612 24.4645Z" />
    <Path d="M37.6683 27.9223C37.7907 28.0906 37.959 28.213 37.9284 28.2589C37.8213 28.4731 37.6683 28.6567 37.5306 28.8403C37.4082 28.7332 37.2705 28.6261 37.1481 28.5037C37.3011 28.3507 37.4541 28.1671 37.6683 27.9223Z" />
    <Path d="M40.3611 21.9094C40.7895 22.1389 40.8201 22.4296 40.5906 22.6897C40.5294 22.7662 40.2234 22.7815 40.1469 22.705C39.8256 22.3531 40.2387 22.1848 40.3611 21.9094Z" />
    <Path d="M34.6695 23.9596C34.44 24.1432 34.2105 24.3421 33.981 24.541C33.9198 24.4951 33.8433 24.4492 33.7821 24.388C33.8433 24.1891 33.8586 23.929 33.9963 23.8219C34.134 23.7148 34.3941 23.776 34.593 23.776C34.6236 23.8372 34.6389 23.8984 34.6695 23.9596Z" />
    <Path d="M34.899 20.4712C34.7001 20.6548 34.5777 20.7619 34.4553 20.869C34.3176 20.6854 34.1646 20.5018 34.0728 20.3029C34.0422 20.2417 34.1646 20.0887 34.2258 19.9816C34.4094 20.1346 34.6236 20.2723 34.899 20.4712Z" />
    <Path d="M35.6946 25.2754C35.4039 24.8011 35.7099 24.6634 35.9394 24.6022C36.0465 24.5716 36.2301 24.8011 36.3678 24.9082C36.1383 25.0306 35.9088 25.153 35.6946 25.2754Z" />
    <Path d="M35.7405 28.3966C35.5569 28.1518 35.3886 27.9988 35.4192 27.9376C35.4957 27.7693 35.6487 27.6316 35.8017 27.5245C35.8323 27.5092 36.0924 27.7081 36.0771 27.7693C36.0312 27.9529 35.9088 28.1059 35.7405 28.3966Z" />
    <Path d="M34.9296 27.7234C34.6389 27.5092 34.4094 27.295 34.6389 26.9431C34.6695 26.8819 34.9143 26.8666 34.9755 26.9278C35.1744 27.1879 35.3121 27.4633 34.9296 27.7234Z" />
    <Path d="M33.2772 26.2393C33.4455 26.5147 33.5832 26.6677 33.5985 26.8207C33.5985 26.9125 33.3843 27.0808 33.2466 27.0961C33.1548 27.1114 32.9406 26.9125 32.9406 26.836C32.9712 26.6677 33.1089 26.5147 33.2772 26.2393Z" />
    <Path d="M38.8005 24.235C38.8923 23.8219 38.9382 23.5771 38.9841 23.3323C39.0453 23.317 39.1065 23.317 39.1677 23.3017C39.2595 23.5159 39.3666 23.7301 39.4584 23.9443C39.3054 24.0208 39.1218 24.0973 38.8005 24.235Z" />
    <Path d="M37.1022 26.5606C37.1634 26.7289 37.2552 26.9125 37.2858 27.0808C37.2858 27.1267 37.0563 27.2644 36.9798 27.2338C36.8268 27.1726 36.6126 27.0196 36.6126 26.9125C36.6126 26.7595 36.7962 26.6218 36.9033 26.4688C36.9645 26.4994 37.041 26.53 37.1022 26.5606Z" />
    <Path d="M36.7809 22.0165C36.9798 21.8329 37.1022 21.6952 37.2246 21.5728C37.6683 21.8482 37.6683 21.9094 37.1634 22.4143C37.0563 22.2919 36.9339 22.1695 36.7809 22.0165Z" />
    <Path d="M40.56 17.6561C40.3611 17.8397 40.2234 17.9468 40.0857 18.0692C39.9939 17.9468 39.8256 17.8091 39.8409 17.6867C39.8562 17.549 40.0398 17.4266 40.1469 17.3042C40.254 17.396 40.3611 17.4878 40.56 17.6561Z" />
    <Path d="M39.3972 25.5355C39.4431 25.8262 39.4737 26.0404 39.5043 26.2393C39.3666 26.2393 39.1524 26.3158 39.0912 26.2393C38.8464 26.0098 38.9841 25.8109 39.3972 25.5355Z" />
    <Path d="M38.8617 18.8341C39.0606 19.0177 39.3819 19.1248 39.1065 19.4461C39.0453 19.5073 38.7852 19.492 38.6934 19.4308C38.3874 19.1707 38.6628 19.0177 38.8617 18.8341Z" />
    <Path d="M35.3886 12.2705C35.0979 12.4541 34.8378 12.653 34.5318 12.806C34.4094 12.8672 34.1952 12.806 34.0881 12.7295C34.0269 12.6836 34.0575 12.4388 34.134 12.3317C34.3788 11.9339 35.0826 11.9186 35.3886 12.2705Z" />
    <Path d="M40.2693 12.5459C40.101 12.6377 39.948 12.806 39.7797 12.806C39.6573 12.806 39.5349 12.6071 39.3972 12.5C39.5196 12.3776 39.642 12.2093 39.795 12.1481C39.8562 12.1175 40.0092 12.2705 40.1316 12.3317C40.1775 12.4082 40.2234 12.4847 40.2693 12.5459Z" />
    <Path d="M37.653 11.0465C37.8519 11.2454 38.0355 11.3678 38.0049 11.429C37.959 11.5973 37.8213 11.7503 37.7142 11.9033C37.6224 11.7962 37.4541 11.7044 37.4388 11.582C37.4235 11.4596 37.5459 11.3066 37.653 11.0465Z" />
    <Path d="M11.123 33.2313C11.3372 33.4455 11.5361 33.6444 11.5208 33.6597C11.3984 33.828 11.2148 33.981 11.0618 34.134C10.9547 34.0116 10.7558 33.8892 10.7558 33.7974C10.7864 33.6291 10.9547 33.4914 11.123 33.2313Z" />
    <Path d="M12.8366 32.7111C12.9437 32.8488 13.112 32.9712 13.1273 33.1089C13.1273 33.2313 12.959 33.369 12.8672 33.4914C12.7295 33.3843 12.5306 33.2925 12.4541 33.1395C12.4082 33.063 12.5765 32.8794 12.6377 32.7417C12.6989 32.7264 12.7754 32.7264 12.8366 32.7111Z" />
    <Path d="M8.06304 32.8794C8.29254 33.0477 8.43024 33.1395 8.58324 33.2466C8.43024 33.369 8.29254 33.5679 8.10894 33.5985C8.00184 33.6291 7.83354 33.4302 7.69584 33.3384C7.78764 33.216 7.89474 33.0783 8.06304 32.8794Z" />
    <Path d="M13.6781 33.5067C13.8617 33.675 14.0606 33.7821 14.0759 33.9045C14.0912 34.0269 13.9076 34.1646 13.8005 34.3023C13.6322 34.1646 13.4639 34.0269 13.2956 33.8892C13.4027 33.7974 13.5098 33.6903 13.6781 33.5067Z" />
    <Path d="M6.51775 33.2007C6.31885 33.4302 6.16585 33.6597 6.13525 33.6444C5.95165 33.5526 5.79866 33.3996 5.64566 33.2772C5.75276 33.1701 5.84456 33.0018 5.95165 32.9865C6.08935 32.9712 6.24235 33.0783 6.51775 33.2007Z" />
    <Path d="M10.205 32.9712C9.94492 33.3537 9.63893 33.3078 9.33293 33.1089C9.30233 33.0783 9.31763 32.8641 9.36353 32.8335C9.66953 32.6193 9.94492 32.6193 10.205 32.9712Z" />
    <Path d="M15.2693 34.3788C15.0704 34.1646 14.8868 34.0575 14.8715 33.9351C14.8715 33.8127 15.0551 33.675 15.1469 33.5373C15.2693 33.6597 15.4376 33.7515 15.4988 33.8892C15.5447 33.9963 15.3917 34.1493 15.2693 34.3788Z" />
  </svg>
)

export default Sun
