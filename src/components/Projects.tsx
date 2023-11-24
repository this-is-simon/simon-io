import styled from "styled-components";
import { Body, Footnote, Headline, Subhead } from "./Typography";
import { Flex } from "./Flex";

interface EmploymentProps {
  title: string;
  imgUrl: string;
  description: string;
  skills: string[];
}

export const Projects = ({ title, imgUrl, description, skills }: EmploymentProps) => {
  return (
    <EmploymentItem>
      <Flex align={"flex-start"} justify={"space-between"} gap={"var(--spacing-md)"}>
        <Flex justify={"flex-start"} flex={1}>
          <Period>{imgUrl}</Period>
        </Flex>
        <DetailsContainer flex={2} justify={"flex-start"}>
          <Flex direction={"column"} align={"baseline"}>
            <Headline>{title}</Headline>
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
