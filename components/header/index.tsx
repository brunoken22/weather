'use client';

import React, {useState} from 'react';
import {
  Nav,
  DivNav,
  DivEnlces,
  DivHamburg,
  MiniDiv,
  DivHamburgOcu,
  DivDev,
  DivEnlaces,
  Enlaces,
  GlobalStyles,
} from './styled';
import SunSVG from '@/public/sun.svg';
import Link from 'next/link';
import Linkedin from '@/ui/icons/linkedin.svg';
import Github from '@/ui/icons/github.svg';
export function Header() {
  const [active, setActive] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    if (active) {
      setActive(false);
      return;
    }
    setActive(true);
  };

  return (
    <Nav>
      <DivNav>
        <Enlaces href='/'>
          <SunSVG />
        </Enlaces>
        <DivEnlces>
          <Link href={'/'} style={{textDecoration: 'none', color: '#fff'}}>
            Inicio
          </Link>
          <Link href={'/mapa'} style={{textDecoration: 'none', color: '#fff'}}>
            Mapa
          </Link>
          <Link href={'/info'} style={{textDecoration: 'none', color: '#fff'}}>
            Sobre nosotros
          </Link>
        </DivEnlces>
        <DivHamburg onClick={handleClick}>
          <MiniDiv $rotate='rotate(316deg)' $origin='center' $active={active} />
          <MiniDiv $display='none' $active={active} />
          <MiniDiv
            $rotate='rotate(225deg)'
            $origin='center'
            $position='absolute'
            $active={active}
          />
        </DivHamburg>
        {active ? (
          <DivHamburgOcu>
            <GlobalStyles></GlobalStyles>
            <DivEnlaces>
              <Link
                href={'/'}
                onClick={() => {
                  setActive(false);
                }}
                style={{textDecoration: 'none', color: '#fff'}}>
                Inicio
              </Link>
              <Link
                href={'/mapa'}
                onClick={() => {
                  setActive(false);
                }}
                style={{textDecoration: 'none', color: '#fff'}}>
                Mapa
              </Link>
              <Link
                href={'/info'}
                onClick={() => {
                  setActive(false);
                }}
                style={{textDecoration: 'none', color: '#fff'}}>
                Sobre nosotros
              </Link>
            </DivEnlaces>
            <DivDev>
              <Enlaces
                href='https://www.linkedin.com/in/brunoken18/'
                target='_blank'>
                <Linkedin />
              </Enlaces>
              <Enlaces href='https://github.com/brunoken22' target='_blank'>
                <Github />
              </Enlaces>
            </DivDev>
          </DivHamburgOcu>
        ) : null}
      </DivNav>
    </Nav>
  );
}
