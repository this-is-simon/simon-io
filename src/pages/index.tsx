import Head from "next/head";
import { Body, Footnote, HeaderTitle, Headline, Subhead, Title2 } from "../components/Typography";
import { PageLayout } from "../components/Page";
import css, { styled } from "styled-components";
import { Flex } from "../components/Flex";
import {
  ADMINISTRATE_LINK,
  ARDUINO_PROPOSAL_LINK,
  CAREER_CHANGE_LINK,
  FANDUEL_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
  VAULT_BILLBOARD_LINK,
} from "../constants";
import { EmploymentExperience, jobs } from "../components/EmploymentExperience";
import { Projects, projects } from "../components/Projects";
import Linkedin from "../../public/linkedin.svg";
import Github from "../../public/github.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Simon Atkins</title>
        <meta name="description" content="Simons personal software engineering site " />
      </Head>

      <main>
        <PageLayout>
          <Content align={"flex-start"} gap={"var(--spacing-md)"}>
            <LeftColumn
              align={"flex-start"}
              direction={"column"}
              flex={1}
              justify={"space-between"}
            >
              <Flex direction={"column"} align={"flex-start"}>
                <HeaderTitle>Simon Atkins</HeaderTitle>
                <Headline>Front-End Engineer</Headline>
                <StyledBody>I build high-quality digital experiences for the web</StyledBody>
              </Flex>
              <Flex gap={"var(--spacing-md)"}>
                <StyledIcon href={LINKEDIN_LINK} target="_blank">
                  <Linkedin height={30} width={30} />
                </StyledIcon>
                <StyledIcon href={GITHUB_LINK} target="_blank">
                  <Github height={30} width={30} />
                </StyledIcon>
              </Flex>
            </LeftColumn>
            <RightColumn direction={"column"} flex={1} gap={"var(--spacing-lg)"}>
              <Body>
                Back in 2016, I decided to propose to my girlfriend by coding a
                treasure-hunt-marriage-proposal box out of an{" "}
                <a href={ARDUINO_PROPOSAL_LINK}>antique toolbox and an Arduino microprocessor</a>.
                (She said yes.)
              </Body>
              <Body>
                I was hooked on coding, and shortly after I left my comfortable marketing job for an{" "}
                <a href={CAREER_CHANGE_LINK}>exciting new career</a> in software development. Soon I
                would be working as a full-stack developer at{" "}
                <a href={ADMINISTRATE_LINK}>Administrate</a> before moving to a new startup,{" "}
                <a href={VAULT_BILLBOARD_LINK}>VAULT</a>, led by the founders of{" "}
                <a href={FANDUEL_LINK}>FanDuel</a>.
              </Body>
              <Body>
                I naturally gravitated towards front-end development, specialising in frameworks
                such as React and NextJS, and my main focus these days is delivering responsive and
                beautiful web apps and internal tools.
              </Body>
              <Body>
                When I'm not at a computer I can usually be found raising an energetic toddler,
                taking on overly-ambitious DIY projects, and rearing chickens.
              </Body>
              <EmploymentList>
                {jobs.map((job, i) => (
                  <EmploymentExperience
                    key={i}
                    role={job.role}
                    period={job.period}
                    employer={job.employer}
                    details={job.details}
                    skills={job.skills}
                    link={job.link}
                  />
                ))}
              </EmploymentList>
              <Title2
                css={`
                  margin: var(--spacing-lg) 0;
                  text-align: left;
                  width: 100%;
                  @media (max-width: 425px) {
                    margin-bottom: 0;
                  }
                `}
              >
                Personal Projects
              </Title2>
              <ProjectList>
                {projects.map((project, i) => (
                  <Projects
                    key={i}
                    imgUrl={project.imgUrl}
                    title={project.title}
                    description={project.description}
                    skills={project.skills}
                    link={project.link}
                  />
                ))}
              </ProjectList>
            </RightColumn>
          </Content>
        </PageLayout>
      </main>
    </>
  );
}

const Content = styled(Flex)`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled(Flex)`
  position: sticky;
  top: var(--spacing-xl);
  height: 80vh;
  @media (max-width: 768px) {
    position: static;
  }
`;

const StyledIcon = styled.a`
  color: rgb(var(--text-color));
  &:hover {
    opacity: 0.6;
  }
`;

const RightColumn = styled(Flex)``;

const StyledBody = styled(Body)`
  padding: var(--spacing-md) 0;
`;

const EmploymentList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

const ProjectList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: var(--spacing-xl);
  margin: var(--spacing-md) 0;
`;
