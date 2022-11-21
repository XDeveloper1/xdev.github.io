import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <img src="https://raw.githubusercontent.com/XDeveloper1/xdev.github.io/main/out/favicon.ico" height={40} width={40} /> <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }} >Ankit Prajapati</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <a href="#">
          <NavLink></NavLink>
        </a>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target="_blank" href="https://github.com/XDeveloper1">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href="https://www.linkedin.com/in/ankit-kumar-a104341b2/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href="https://www.instagram.com/prajapati_ankit01/">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;