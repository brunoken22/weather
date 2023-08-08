import styled from "styled-components";

export const DivHamburg = styled.div`
   backdrop-filter: blur(10px);
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   z-index: 9;
   transition: all 0.15s linear;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   flex-direction: column;
   font-size: 1.5rem;
`;
