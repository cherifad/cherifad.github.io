export type Education = {
  id: number;
  title: string;
  year: string;
  place: string;
  keysInformations: Array<string>;
}

export interface Technologie {
  name: string;
  description: string;
  icon: string;
}

export interface Project {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: ProjectStatus;
  technologies: Array<Technologie>;
  url: string;
  image: string;
}

export enum ProjectStatus {
  Active = "Active",
  InProgress = "In Progress",
  Completed = "Completed",
  OnHold = "On Hold",
}
