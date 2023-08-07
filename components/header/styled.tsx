import styled from "styled-components";

export const Nav = styled.nav``;

export const DivNav = styled.div`
   display: flex;
   position: sticky;
   justify-content: space-between;
   align-items: center;
   z-index: 10;
   margin: 1rem 2rem;
`;

export const DivEnlces = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   gap: 3rem;
   @media (max-width: 550px) {
      display: none;
   }
`;

export const Enlaces = styled.a`
   text-decoration: none;
   color: ${({ theme }) => theme.color};
`;

export const DivHamburg = styled.button`
   display: none;
   flex-direction: column;
   gap: 5px;
   background-color: transparent;
   border: none;
   cursor: pointer;
   &:hover {
      div {
         transition:
            transform 0.3s ease,
            display 0.3s ease;
      }
      div:nth-child(1) {
         transform: rotate(135deg);
         transform-origin: center;
      }
      div:nth-child(2) {
         display: none;
      }
      div:nth-child(3) {
         transform: rotate(225deg);
         transform-origin: center;
         position: absolute;
      }
   }
   @media (max-width: 550px) {
      display: flex;
   }
`;

export const MiniDiv = styled.div<any>`
   width: 27px;
   height: 4px;
   background-color: #fff;

   /* &:hover {
      display: ${(props: any) => props.$display};
      transform-origin: ${(props: any) => props.$origin};
      position: ${(props: any) => props.$position};
      transform: ${(props: any) => props.$rotate};
   } */
`;
