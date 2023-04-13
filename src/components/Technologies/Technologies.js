import React from 'react';
import { DiFirebase, DiNodejs, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      As a fullstack Developer, I have worked with a wide range of technologies
      in the world of web development from Front-end to Back-end
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          React.js
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiNodejs size="3rem" />
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          Nodejs and MongoDb
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
