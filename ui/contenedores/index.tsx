import styled, {keyframes} from 'styled-components';
const slidebg = keyframes`
  to {
    background-position:20vw;
  }
`;
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
  z-index: 9;
  color: #fff;
  margin: 4rem auto;
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 550px) {
    margin: 1rem;
    width: auto;
  }
`;
export const DivMap = styled(DivInfo)`
  height: 100%;
  backdrop-filter: blur(1px);
`;
export const DivSearch = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
  z-index: 9;
`;
export const Sidebar = styled.div`
  background-color: rgba(35, 55, 75, 0.9);
  color: #fff;
  padding: 6px 12px;
  font-family: monospace;
  z-index: 1;
  position: absolute;
  top: 17%;
  left: 0;
  margin: 12px;
  border-radius: 4px;
`;
export const DivUbi = styled(DivInfo)`
  gap: 3rem;
  backdrop-filter: blur(0px);
`;
export const Button = styled.button`
  background: #425df7; /* color de fondo */
  color: #fff; /* color de fuente */
  border: 2px solid #4741d7; /* tamaño y color de borde */
  padding: 16px 20px;
  border-radius: 3px; /* redondear bordes */
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: inline-block;
  &:hover {
    color: #425df7; /* color de fuente hover */
  }
  &::after {
    content: '';
    background-color: #ffffff; /* color de fondo hover */
    color: #425df7;
    position: absolute;
    z-index: -1;
    padding: 16px 20px;
    display: block;
    left: -20%;
    right: -20%;
    top: 0;
    bottom: 0;
    transform: skewX(-45deg) scale(0, 1);
    transition: all 0.3s ease;
  }
  &:hover::after {
    transition: all 0.3s ease-out;
    transform: skewX(-45deg) scale(1, 1);
  }
`;
