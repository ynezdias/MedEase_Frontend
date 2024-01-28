import styled from "styled-components";

const StyleLoading = styled.section`
div {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
  
  @keyframes arrows {
    0%,
    100% {
      color: black;
      transform: translateY(0);
    }
    50% {
      color: #3AB493;
      transform: translateY(20px);
    }
  }
  
  span {
    --delay: 0s;
    animation: arrows 1s var(--delay) infinite ease-in;
  }
`;

export default StyleLoading;