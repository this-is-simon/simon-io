import styled from "styled-components";
import { Body, Footnote, Headline, Subhead } from "./Typography";
import { Flex } from "./Flex";

interface ProjectProps {
  title: string;
  imgUrl: string;
  description: string;
  skills: string[];
  link: string;
}

export const Projects = ({ title, imgUrl, description, skills, link }: ProjectProps) => {
  return (
    <ProjectItem>
      <Flex justify={"flex-start"}>
        <Period>{imgUrl}</Period>
      </Flex>
      <DetailsContainer justify={"flex-start"}>
        <Flex direction={"column"} align={"baseline"}>
          <Headline>
            <StyledLink href={link} target={"_blank"}>
              {title}
            </StyledLink>
          </Headline>
          <Details>{description}</Details>
          <SkillsContainer gap={"var(--spacing-xxs)"}>
            {skills.map((skill, key) => (
              <Pill key={key}>
                <Skill>{skill}</Skill>
              </Pill>
            ))}
          </SkillsContainer>
        </Flex>
      </DetailsContainer>
    </ProjectItem>
  );
};

const ProjectItem = styled.li`
  min-width: 200px;
`;

const Period = styled(Body)`
  text-transform: uppercase;
`;

const DetailsContainer = styled(Flex)`
  max-width: 310px;
  @media (max-width: 1024px) {
    max-width: none;
  }
`;

const StyledLink = styled.a`
  color: inherit;
`;

const Role = styled(Body)`
  color: var(--highlight-text-color);
`;

const Details = styled(Subhead)`
  margin-top: var(--spacing-xs);
`;

const Skill = styled(Footnote)`
  color: var(--skill-text-color);
`;

const SkillsContainer = styled(Flex)`
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: var(--spacing-sm);
`;

const Pill = styled.div`
  padding: var(--spacing-xs);
  background: var(--skill-pill-color);
  border-radius: 9999px;
`;

export const projects = [
  {
    title: "This website!",
    imgUrl: "",
    description:
      "A portfolio/CV website built with React, NextJS 13, and Vercel. Click on the link for the Github repo",
    skills: ["Typescript", "React", "NextJS", "Vercel"],
    link: "https://github.com/this-is-simon/simon-io",
  },
  {
    title: "Catch of the Day",
    imgUrl: "",
    description:
      "A full-stack Javascript/React web app where users can log in using Facebook or Github SSO, view fish to buy, add to basket and view a receipt. Utilises a Firebase database",
    skills: ["Javascript", "React", "SSO", "Firestore"],
    link: "https://github.com/this-is-simon/catch-of-the-day",
  },
  {
    title: "The Coal-culator",
    imgUrl: "",
    description:
      "A full-stack Javascript/Node web app to quickly and easily calculate a user’s carbon footprint, featuring data persistence using MongoDB",
    skills: ["Javascript", "Nodejs", "MongoDB"],
    link: "https://github.com/this-is-simon/coalculator_group_project",
  },
  {
    title: "Internet Troll Rehab Centre",
    imgUrl: "",
    description:
      "A web application for users to register to adopt an internet troll, and edit troll details. Built using RESTful API in Ruby, Sinatra and SQL",
    skills: ["Ruby", "Sinatra", "REST", "SQL"],
    link: "https://github.com/this-is-simon/cc_w5_PROJECT/blob/master/internet_troll_rehab_screenshot.png",
  },
  {
    title: "Model Airport",
    imgUrl: "",
    description:
      "A Java project to model an airport with planes, tickets, passengers and consumables. Built with a focus on Test-Driven Development",
    skills: ["TDD", "Java"],
    link: "https://github.com/this-is-simon/Airport_model",
  },
];
