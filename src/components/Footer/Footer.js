import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "../../styles/GlobalComponents";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Chat</LinkTitle>
          <LinkItem target="_blank" href="https://t.me/xdev_01">Telegram</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem target="_blank" href="mailto:ankitprajapati81261@gmail.com">
            ankitprajapati81261@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            &copy; 2022{" "}
            <Link href="#"> Ankit Prajapati</Link> . All
            rights reserved.
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target="_blank" href="https://github.com/XDeveloper1">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href="https://www.linkedin.com/in/ankit-kumar-a104341b2/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href="https://www.instagram.com/prajapati_ankit01/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
