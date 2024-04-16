import styles from './Resume.module.scss';
import { useState, useEffect } from "react";
import { fetchJSON5FileFromPublic } from '../../api';
import { isEmpty } from 'lodash-es';
import PersonalInfo from '../components/PersonalInfo';
import { ResumeJson } from '..';
import Section from '../components/Section';
import Experiences from '../components/ExperienceList';
import SkillList from '../components/SkillList';
import Educations from '../components/EducationList'
import PublicationList from '../components/PublicationList';
import Summary from '../components/Summary';

const LAYOUT_KEYS = {
  SUMMARY: "summary",
  EXPERIENCE: "experience",
  EDUCATION: "education",
  SKILL: "skill",
  STRENGTHS: "strengths",
  PUBLICATIONS: 'publications'
};

// @ts-expect-error - TODO - seems vite bug, fix later
const resumeFileName = import.meta.env.VITE_PUBLIC_RESUME_FILENAME;
console.log({ resumeFileName })

export function Resume() {
  const [data, setData] = useState({});

  useEffect(() => {
    const abortController = new AbortController();
    async function startFetching() {
      const result = await fetchJSON5FileFromPublic(
        resumeFileName,
        abortController.signal
      );

      setData(result);
    }

    startFetching();

    // avoid race condition
    return () => {
      abortController.abort();
    };
  }, []);

  if (isEmpty(data)) return `Failed to load ${resumeFileName}`;

  const {
    personal_information: PersonalInformation,
    experiences,
    educations,
    skills,
    publications,
    summary
  } = data as ResumeJson;

  return (
    <div className={styles['container']}>
      <PersonalInfo {...PersonalInformation} />
      {summary.show && (
        <Section key={LAYOUT_KEYS.SUMMARY} title="summary">
          <Summary summary={summary.value} />
        </Section>
      )}
      <Section title="skills">
        <SkillList skillList={skills} />
      </Section>
      <Section title="experiences">
        <Experiences experiences={experiences} />
      </Section>
      <Section title="educations">
        <Educations educations={educations} />
      </Section>
      {!isEmpty(publications) && <Section title={LAYOUT_KEYS.PUBLICATIONS}><PublicationList publications={publications} /></Section>}
    </div >
  );
}

export default Resume;
