import styled from 'styled-components';

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

export const DivInfo = styled.div`
  position: relative;
  z-index: 9;
  color: #fff;
  margin: 4rem;
  backdrop-filter: blur(20px);
  @media (max-width: 550px) {
    margin: 1rem;
  }
`;

export const DivMap = styled(DivInfo)`
  height: 100%;
`;

export const Sidebar = styled.div`
  background-color: rgba(35, 55, 75, 0.9);
  color: #fff;
  padding: 6px 12px;
  font-family: monospace;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  margin: 12px;
  border-radius: 4px;
`;
