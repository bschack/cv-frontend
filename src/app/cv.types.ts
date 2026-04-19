type sNull = string | null;

export type DateRange = {
  type: "multiple",
  ranges: [
    {
      start: string,
      end: string
    }
  ]
} | {
  type: "range",
  start: string,
  end: string
} | {
  type: "single",
  start: string
}

export type PersonalDetailsData = {
  name: string,
  email: sNull,
  phone: sNull,
  linkedin: sNull,
  github: sNull
}

export type PersonalDetails = {
  section_name: sNull,
  data: PersonalDetailsData
}

export type SummaryData = {
  summary: sNull
}

export type Summary = {
  section_name: sNull,
  data: SummaryData
}

export type SkillItem = {
  item: string,
  proficiency: sNull
}

export type SkillSection = {
  section_name: sNull,
  data: SkillItem[]
}

export type Skills = SkillSection[]

export type ExperienceItem = {
  company: sNull,
  position: sNull,
  level: sNull,
  location: sNull,
  dates: DateRange,
  highlights: sNull[]
}

export type Experience = {
  section_name: sNull,
  data: ExperienceItem[]
}

export type EducationItem = {
  institution: sNull,
  degree: sNull,
  major: sNull,
  location: sNull,
  major_gpa: sNull,
  dates: DateRange,
  highlights: string[]
}

export type Education = {
  section_name: sNull,
  data: EducationItem[]
}

export type CertificationItem = {
  name: sNull,
  organization: sNull,
  url: sNull,
  dates: DateRange
}

export type Certifications = {
  section_name: sNull,
  data: CertificationItem[]
}

export type ProjectItem = {
  name: sNull,
  organizations: sNull[],
  dates: DateRange,
  highlights: sNull[]
}

export type Projects = {
  section_name: sNull,
  data: ProjectItem[]
}

export type AwardItem = {
  name: sNull,
  organization: sNull,
  url: sNull,
  dates: DateRange,
  highlights: sNull[]
}

export type Awards = {
  section_name: sNull,
  data: AwardItem[]
}

export type PublicationItem = {
  name: sNull,
  authors: string[],
  venue: sNull,
  url: sNull,
  proceedings: sNull,
  dates: DateRange
}

export type Publications = {
  section_name: sNull,
  data: PublicationItem[]
}

export type CommunityItem = {
  name: sNull,
  role: sNull,
  dates: DateRange,
  highlights: sNull[]
}

export type Community = {
  section_name: sNull,
  data: CommunityItem[]
}

export type AllData = {
  personal_details: PersonalDetails,
  summary: Summary,
  professional_skills: Skills,
  professional_experience: Experience,
  education: Education,
  certifications: Certifications,
  projects: Projects,
  awards: Awards,
  publications: Publications,
  community: Community
}