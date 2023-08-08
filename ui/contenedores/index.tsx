import styled from "styled-components";
export const Contenedor = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   padding: 3rem 1rem;
   gap: 1.5rem;
   flex-wrap: wrap;
   z-index: 2;
   @media (max-width: 550px) {
      padding: 2rem 0.5rem;
   }
`;
export const DivClima = styled(Contenedor)`
   box-shadow: 0px 0px 5px 1px;
   backdrop-filter: blur(20px);
   border-radius: 50%;
   color: #fff;
   gap: 0;
   width: 300px;
   @media (max-width: 550px) {
      height: 300px;
      padding: 1rem;
   }
`;

export const DivDias = styled(Contenedor)`
   flex-direction: row;
   justify-content: space-evenly;
   gap: 5rem;
   @media (max-width: 550px) {
      gap: 1rem;
   }
`;
export const Dias = styled(DivClima)`
   border-radius: 10px;
   padding: 1rem;
   width: 200px;
   box-shadow: 0px 0px 2px 1px;
   gap: 0.5rem;
   height: auto;
   @media (max-width: 550px) {
      flex-direction: row;
      width: auto;
      gap: 2rem;
      padding: 1rem;
      width: 100%;
   }
`;
