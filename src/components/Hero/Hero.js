import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        <p>
          As a full-stack developer with 2 years of experience, I have a proven
          track record of designing and developing robust, scalable, and
          efficient web applications. My technical expertise includes
          proficiency in a wide range of programming languages, including
          JavaScript, HTML and CSS as well as experience with various frameworks
          and libraries such as React, Node.js, Express.js, and MongoDB. I have
          a strong understanding of software development principles and
          practices, including Agile methodologies and test-driven development,
          and I am passionate about delivering high-quality, user-focused
          solutions that meet business needs.
        </p>
      </SectionText>
      <Button>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
