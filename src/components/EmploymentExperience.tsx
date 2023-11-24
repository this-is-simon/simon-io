import styled from "styled-components";
import { Body, Footnote, Headline, Subhead } from "./Typography";
import { Flex } from "./Flex";

interface EmploymentProps {
  period: string;
  role: string;
  employer: string;
  details: string;
  skills: string[];
  link: string;
}

export const EmploymentExperience = ({
  period,
  role,
  employer,
  details,
  skills,
  link,
}: EmploymentProps) => {
  return (
    <EmploymentItem>
      <Flex align={"flex-start"} justify={"space-between"} gap={"var(--spacing-md)"}>
        <Flex justify={"flex-start"} flex={1}>
          <Period>{period}</Period>
        </Flex>
        <DetailsContainer flex={2} justify={"flex-start"}>
          <Flex direction={"column"} align={"baseline"}>
            <Headline>
              <StyledLink href={link} target={"_blank"}>
                {employer}
              </StyledLink>
            </Headline>
            <Role>{role}</Role>
            <Details>{details}</Details>
            <SkillsContainer gap={"var(--spacing-xxs)"}>
              {skills.map((skill, key) => (
                <Pill key={key}>
                  <Skill>{skill}</Skill>
                </Pill>
              ))}
            </SkillsContainer>
          </Flex>
        </DetailsContainer>
      </Flex>
    </EmploymentItem>
  );
};

const EmploymentItem = styled.li``;

const Period = styled(Body)`
  text-transform: uppercase;
`;

const DetailsContainer = styled(Flex)`
  max-width: 316px;
`;

const Role = styled(Body)`
  color: var(--highlight-text-color);
`;

const StyledLink = styled.a`
  color: inherit;
  cursor: pointer;
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

export const jobs = [
  {
    period: "Jul 2019 - Present",
    role: "Front-End Software Engineer",
    employer: "Vault Industries Ltd: Edinburgh",
    details:
      "Currently working as a front-end software engineer for founders of Fanduel in fast-paced startup allowing music artists to create and sell digital box-sets to superfans. Responsible for writing and maintaining clean and responsive code, working closely with designers, fellow front-end developers and back-end developers.",
    skills: ["TypeScript", "React", "NextJS", "Vercel", "Firebase"],
    link: "https://vault.fan",
  },
  {
    period: "Jul 2018 - Jul 2019",
    role: "Full-Stack Software Engineer",
    employer: "Administrate: Edinburgh",
    details:
      "Worked as a software engineer in a fast-paced Agile business creating a software product for Training Departments. Responsible for daily stand ups, writing quality code following TDD principles, conducting code reviews and functional tests, liaising with product managers, demonstrating completed tickets at weekly Code Demos. Working across the stack and continuing to learn each day.",
    skills: ["JavaScript", "React", "Angular", "Python", "Php", "GraphQL", "SQL"],
    link: "https://www.getadministrate.com",
  },
  {
    period: "Dec 2015 – Mar 2018",
    role: "Digital Marketer",
    employer: "Edinburgh Bicycle Cooperative: Edinburgh",
    details:
      "Worked as part of a team marketing bicycles and accessories within a challenging retail environment. Responsible for campaign planning, graphic design, email marketing to over 60k subscribers, managing social media accounts, and using CRM platform to rewrite sections of website. Worked closely with outside agency on PR and PPC campaigns.",
    skills: ["Wordpress", "Google Analytics", "Google Adwords", "Mailchimp"],
    link: "https://www.edinburghbicycle.com/",
  },
];
