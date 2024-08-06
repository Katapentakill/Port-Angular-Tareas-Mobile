import { Role } from './role';

export interface User {
  id: number;
  email: string;
  name: string;
  lastname: string;
  job: string;
  curriculum: string;
  curriculumNormalized: string;
  password: string;
  image: string;
  role: Role;
  roleId: number;
  skills: string;
  skillsNormalized: string;
  expertise: string;
  expertiseNormalized: string;
}
