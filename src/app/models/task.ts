import { User } from './user';
import { Tag } from './tag';
import { Status } from './status';

export interface Task {
  id: number;
  name: string;
  description: string;
  requiredSkills: string;
  requiredSkillsNormalized: string;
  requiredExpertise: string;
  requiredExpertiseNormalized: string;
  descriptionNormalized: string;
  tags: Tag[];
  user: User;
  userId?: number;
  creationDate: string;
  dueDate: string;
  status: Status;
  statusId: number;
}
