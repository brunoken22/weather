import styled, { css } from "styled-components";

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

export const DivHamburg = styled.button<any>`
   display: none;
   flex-direction: column;
   gap: 5px;
   background-color: transparent;
   border: none;
   cursor: pointer;
   z-index: 10;

   @media (max-width: 550px) {
      display: flex;
   }
`;

export const MiniDiv = styled.div<any>`
   width: 27px;
   height: 4px;
   background-color: #fff;
   transition: all 0.3s ease;
   display: ${(props: any) =>
      props.$display && props.$active ? props.$display : null};
   transform-origin: ${(props: any) =>
      props.$origin && props.$active ? props.$origin : null};
   position: ${(props: any) =>
      props.$position && props.$active ? props.$position : null};
   transform: ${(props: any) =>
      props.$rotate && props.$active ? props.$rotate : null};
`;
