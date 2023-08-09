import {Body} from '@/ui/typography';
import Github from '@/ui/icons/github.svg';
import Linkedin from '@/ui/icons/linkedin.svg';
import {DivFooter, Contacto} from './styled';
import {Enlaces} from '../header/styled';
export function Footer() {
  return (
    <DivFooter>
      <Contacto>
        <Enlaces href='https://github.com/brunoken22' target='_blank'>
          <Github></Github>
        </Enlaces>
        <Enlaces href='https://www.linkedin.com/in/brunoken18/' target='_blank'>
          <Linkedin></Linkedin>
        </Enlaces>
      </Contacto>
      <Body>Hecho por @Bruno Ken</Body>
    </DivFooter>
  );
}
