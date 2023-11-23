import Head from "next/head";
import { Body, Footnote, HeaderTitle, Headline, Subhead } from "../components/Typography";
import { PageLayout } from "../components/Page";
import css, { styled } from "styled-components";
import { Flex } from "../components/Flex";
import {
  ADMINISTRATE_LINK,
  ARDUINO_PROPOSAL_LINK,
  CAREER_CHANGE_LINK,
  FANDUEL_LINK,
  VAULT_BILLBOARD_LINK,
} from "../constants";

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
            <Flex align={"flex-start"} direction={"column"} flex={1}>
              <HeaderTitle>Simon Atkins</HeaderTitle>
              <Headline>Front-End Engineer</Headline>
              <StyledBody>I build high-quality digital experiences for the web</StyledBody>
            </Flex>
            <Flex direction={"column"} flex={1} gap={"var(--spacing-lg)"}>
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
                When Im not at a computer I can usually be found raising an energetic toddler,
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
                  />
                ))}
              </EmploymentList>
            </Flex>
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

const StyledBody = styled(Body)`
  padding-top: var(--spacing-md);
`;

const EmploymentList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

const ExperienceItem = styled.li``;

interface EmploymentProps {
  period: string;
  role: string;
  employer: string;
  details: string;
  skills: string[];
}

const EmploymentExperience = ({ period, role, employer, details, skills }: EmploymentProps) => {
  return (
    <ExperienceItem>
      <Flex align={"flex-start"} justify={"space-between"} gap={"var(--spacing-md)"}>
        <Flex justify={"flex-start"} flex={1}>
          <Body
            css={`
              text-transform: uppercase;
            `}
          >
            {period}
          </Body>
        </Flex>
        <Flex
          flex={2}
          justify={"flex-start"}
          css={`
            max-width: 316px;
          `}
        >
          <Flex direction={"column"} align={"baseline"}>
            <Headline>{employer}</Headline>
            <Body
              css={`
                color: var(--highlight-text-color);
              `}
            >
              {role}
            </Body>
            <Subhead
              css={`
                margin-top: var(--spacing-xs);
              `}
            >
              {details}
            </Subhead>
            <Flex
              gap={"var(--spacing-xxs)"}
              css={`
                flex-wrap: wrap;
                justify-content: flex-start;
                margin-top: var(--spacing-sm);
              `}
            >
              {skills.map((skill, key) => (
                <Pill>
                  <Skill>{skill}</Skill>
                </Pill>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </ExperienceItem>
  );
};

const Pill = styled.div`
  padding: var(--spacing-xs);
  background: var(--skill-pill-color);
  border-radius: 9999px;
`;

const Skill = styled(Footnote)`
  color: var(--skill-text-color);
`;

const jobs = [
  {
    period: "Jul 2019 - Present",
    role: "Front-End Software Engineer",
    employer: "Vault Industries Ltd: Edinburgh",
    details:
      "Currently working as a front-end software engineer for founders of Fanduel in fast-paced startup allowing music artists to create and sell digital box-sets to superfans. Responsible for writing and maintaining clean and responsive code, working closely with designers, fellow front-end developers and back-end developers.",
    skills: ["TypeScript", "React", "NextJS", "Vercel", "Firebase"],
  },
  {
    period: "Jul 2018 - Jul 2019",
    role: "Full-Stack Software Engineer",
    employer: "Administrate: Edinburgh",
    details:
      "Worked as a software engineer in a fast-paced Agile business creating a software product for Training Departments. Responsible for daily stand ups, writing quality code following TDD principles, conducting code reviews and functional tests, liaising with product managers, demonstrating completed tickets at weekly Code Demos. Working across the stack and continuing to learn each day.",
    skills: ["JavaScript", "React", "Angular", "Python", "Php", "GraphQL", "SQL"],
  },
  {
    period: "Dec 2015 – Mar 2018",
    role: "Digital Marketer",
    employer: "Edinburgh Bicycle Cooperative: Edinburgh",
    details:
      "Worked as part of a team marketing bicycles and accessories within a challenging retail environment. Responsible for campaign planning, graphic design, email marketing to over 60k subscribers, managing social media accounts, and using CRM platform to rewrite sections of website. Worked closely with outside agency on PR and PPC campaigns.",
    skills: ["Wordpress", "Google Analytics", "Google Adwords", "Mailchimp"],
  },
];
