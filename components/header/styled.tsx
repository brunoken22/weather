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
   @media (max-width: 550px) {
      display: flex;
   }
`;

export const MiniDiv = styled.div`
   width: 25px;
   height: 5px;
   background-color: #fff;
`;
