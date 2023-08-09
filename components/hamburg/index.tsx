import {DivHamburg, DivDev, DivEnlaces, Enlaces, GlobalStyles} from './styled';
import {SubTitle} from '@/ui/typography';
import Linkedin from '@/ui/icons/linkedin.svg';
import Github from '@/ui/icons/github.svg';

export function Hamburg() {
  return (
    <DivHamburg>
      <GlobalStyles></GlobalStyles>
      <DivEnlaces>
        <Enlaces href=''>
          <SubTitle>Mapa</SubTitle>
        </Enlaces>
        <Enlaces href=''>
          <SubTitle>Sobre nosotros</SubTitle>
        </Enlaces>
      </DivEnlaces>
      <DivDev>
        <Enlaces href=''>
          <Linkedin />
        </Enlaces>
        <Enlaces href=''>
          <Github />
        </Enlaces>
      </DivDev>
    </DivHamburg>
  );
}
