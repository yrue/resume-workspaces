import { CarbonIconType } from '@carbon/icons-react';
import { ReactElement } from '@types/react';

export interface IconProps {
  label: string | ReactElement;
  RenderIcon: CarbonIconType;
}

export interface Link {
  title: string;
  url: string;
  show: boolean;
}

export interface LinkProps {
  links: Link[];
}

export interface PersonalInfoProps {
  name: string;
  roles: {
    description: string;
    show: boolean;
    value: string[];
  };
  mobile: string;
  email: string;
  links: {
    show: boolean;
    title: string;
    url: string;
  }[];
}

export interface PeriodProps {
start: string;
  end: string;
}

export interface RoleProps {
  title: string;
  period: PeriodProps;
  location?: string;
  details: {
    show: boolean;
    content: string;
  }[]
}

export interface ExperienceProps {
  company: {
    name: string;
    logo: string;
  };
  location: string;
  department?: {
    show: boolean;
    data: string;
  };
  roles: RoleProps[];
  hide?: boolean;
}

export interface SkillProps {
  content: string[];
  displayText: string;
}

export interface EducationProps {
  school: string;
  location: string;
  degree: string;
  period: PeriodProps;
}

export interface PublicationProps {
  title: string;
  url: string;
}

export interface SummaryProps {
  show: boolean;
  value: string;
}

export interface ResumeJson {
  personal_information: PersonalInfoProps;
  summary: SummaryProps;
  experiences: ExperienceListProps[];
  skills: SkillProps[];
  educations: EducationProps[];
  publications: PublicationProps[];
}
