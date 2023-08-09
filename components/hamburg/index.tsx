import {DivHamburg, DivDev, DivEnlaces, Enlaces, GlobalStyles} from './styled';
import Linkedin from '@/ui/icons/linkedin.svg';
import Github from '@/ui/icons/github.svg';
import Link from 'next/link';

export function Hamburg(props: any) {
  const handleClick = (e: any) => {
    e.preventDefault();
    props.ocu(true);
  };
  return (
    <DivHamburg>
      <GlobalStyles></GlobalStyles>
      <DivEnlaces>
        <Link href={'/'} style={{textDecoration: 'none', color: '#fff'}}>
          <span>Inicio</span>
        </Link>
        <Link href={'/mapa'} style={{textDecoration: 'none', color: '#fff'}}>
          Mapa
        </Link>
        <Link href={'/info'} style={{textDecoration: 'none', color: '#fff'}}>
          Sobre nosotros
        </Link>
      </DivEnlaces>
      <DivDev>
        <Enlaces href='https://www.linkedin.com/in/brunoken18/' target='_blank'>
          <Linkedin />
        </Enlaces>
        <Enlaces href='https://github.com/brunoken22' target='_blank'>
          <Github />
        </Enlaces>
      </DivDev>
    </DivHamburg>
  );
}
