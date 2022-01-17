interface Props {
  fill?: string;
  stroke?: string;
}

export const vegetableVector = (
  props?: Props,
): string => `<svg width="212" height="211" viewBox="0 0 212 211" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M87.0444 174.618C95.5704 178.463 105.706 183.728 115.692 190.556C113.595 193.666 111.081 196.514 108.185 199.022L108.183 199.024C108.12 199.079 108.056 199.134 107.995 199.187L108.299 199.543L107.995 199.187C91.7613 213.082 68.2784 212.221 53.5323 197.88C61.7037 196.01 69.6223 192.145 76.5347 186.23L76.5357 186.229L76.7834 186.016L76.7846 186.015C80.6979 182.626 84.0694 178.749 86.854 174.532L87.0443 174.618L87.2434 174.177L87.0444 174.618ZM192.305 89.767L192.306 89.7661C198.089 84.7579 202.645 78.6418 205.752 71.846C209.617 78.0578 211.347 85.3944 210.648 92.9274C209.814 101.921 205.619 110.105 198.837 115.979L198.837 115.979C198.789 116.021 198.738 116.065 198.688 116.108L198.683 116.111C195.4 118.921 191.749 120.974 187.934 122.299C184.146 114.487 181.331 107.458 179.439 102.297L178.99 102.461L179.439 102.296C178.989 101.067 178.538 99.7932 178.09 98.501C183.081 96.4674 187.815 93.6111 192.076 89.9646L192.077 89.9637L192.305 89.767ZM200.654 176.234L187.398 187.578L169.196 165.357L169.195 165.355C166.666 162.294 162.186 161.926 159.188 164.539L159.517 164.916L159.188 164.539C156.203 167.143 155.827 171.723 158.349 174.777C158.349 174.777 158.35 174.777 158.35 174.777L176.485 196.918L162.638 208.768C161.566 209.686 160.184 210.121 158.804 209.978C157.415 209.835 156.142 209.119 155.278 207.989C137.789 185.115 112.075 170.232 93.1206 161.637C95.0426 155.934 96.044 149.936 96.0248 143.891C100.003 140.186 103.299 135.839 105.783 131.045C107.428 130.438 109.035 129.732 110.605 128.951L139.748 140.996L140.864 141.457L140.401 140.342L129.732 114.646C136.988 113.072 143.865 109.661 149.717 104.652L149.718 104.651L149.929 104.47L149.93 104.469C150.979 103.56 151.984 102.61 152.945 101.617C156.728 102.148 160.556 102.216 164.348 101.842C164.956 103.627 165.603 105.466 166.296 107.357C172.504 124.298 183.777 148.829 201.178 168.587C202.117 169.654 202.594 171.072 202.495 172.516C202.397 173.96 201.731 175.302 200.655 176.233C200.655 176.233 200.654 176.233 200.654 176.234ZM147.725 85.2519L147.338 85.1073L147.123 85.4604C145.369 88.3431 143.168 90.9527 140.588 93.1873L140.513 93.2514L140.439 93.3151C134.55 98.3555 127.31 100.998 119.983 100.901L119.688 100.897L119.542 101.155C117.505 104.75 114.854 107.998 111.721 110.711L111.72 110.712C107.063 114.756 101.437 117.493 95.5627 118.64L95.272 118.696L95.1821 118.979C93.3771 124.646 90.0208 129.762 85.4422 133.727C84.1382 134.85 82.7602 135.871 81.3186 136.765L81.0316 136.944L81.0896 137.276C83.4552 150.843 78.3341 165.343 67.3797 174.83C67.317 174.884 67.2551 174.938 67.1935 174.991C50.84 188.986 27.0875 187.516 14.1238 171.741C4.21067 159.678 3.21184 142.499 10.9789 128.551L11.1786 128.192L10.8658 127.926C9.65315 126.896 8.52659 125.749 7.49138 124.49C2.66228 118.613 0.49594 111.054 1.40146 103.195C2.28964 95.4899 6.04221 88.4185 11.9717 83.2825C13.3235 82.1169 14.7398 81.0809 16.2239 80.1829L16.603 79.9535L16.4209 79.5496C12.8741 71.6831 11.6587 62.7827 12.9954 53.792L12.5009 53.7184L12.9954 53.7919C14.7412 42.0484 20.7052 31.2464 29.7918 23.3777L29.793 23.3767C29.8652 23.3138 29.9389 23.2507 30.0147 23.1859C38.5208 15.9062 49.1323 11.7667 59.9247 11.5154C68.3455 11.3194 76.4789 13.4814 83.4388 17.6832L83.8135 17.9094L84.0873 17.5679C85.776 15.4618 87.6553 13.5099 89.7116 11.7292C89.7791 11.6709 89.8465 11.6126 89.9134 11.5553C107.527 -3.51832 133.102 -1.9467 147.057 15.0334C148.022 16.2083 148.917 17.4406 149.737 18.7243L149.958 19.0712L150.341 18.9205C155.876 16.742 161.837 15.9675 167.647 16.7242C175.909 17.8004 183.346 21.9098 188.592 28.2944L188.883 28.0552L188.592 28.2944C194.447 35.4177 197.071 44.5877 195.972 54.1238C194.891 63.5064 190.316 72.1217 183.088 78.3812L183.085 78.3832C183.032 78.4302 182.977 78.4769 182.92 78.5256C172.832 87.1596 159.227 89.548 147.725 85.2519Z" fill="#CBF265" stroke="#C7E96F"/>
</svg>
`;