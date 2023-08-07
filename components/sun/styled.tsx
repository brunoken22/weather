import styled, { keyframes } from "styled-components";

export const rotateAnimation = keyframes`
   0% {
      transform: rotate(0deg) translateX(20px) rotate(0deg);
   }

   100% {
      transform: rotate(360deg) translateX(20px) rotate(-360deg);
   }
`;

export const Div = styled.div`
   position: fixed;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   background: ${({ theme }: any) => theme.dia};
`;

export const Span = styled.span<any>`
   position: absolute;
   height: 50px;
   top: ${(props: any) => props.$top};
   bottom: ${(props: any) => props.$bottom};
   left: ${(props: any) => props.$left};
   right: ${(props: any) => props.$right};
   background-color: #ddd;
   border-radius: 50%;
   width: 50px;
   opacity: 0.2;
   animation: ${rotateAnimation} 4s linear infinite;
`;
