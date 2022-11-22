import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          Hey there, This is Ankit Prajapati. I am an Android developer.
        </SectionText>
        <Button
          onClick={(e) => {
            e.preventDefault();
           window.location.href ="https://drive.google.com/file/d/1eIrg0MCE_jFUJAcVjjyrq6oUsV74LS8v/view?usp=share_link"
            // window.open('https://drive.google.com/file/d/1eIrg0MCE_jFUJAcVjjyrq6oUsV74LS8v/view?usp=share_link', "_blank") || window.location.replace('https://drive.google.com/file/d/1eIrg0MCE_jFUJAcVjjyrq6oUsV74LS8v/view?usp=share_link');
         
          }}
        >
          My Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
