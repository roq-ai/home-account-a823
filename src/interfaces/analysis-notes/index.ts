import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AnalysisNotesInterface {
  id?: string;
  note: string;
  date: any;
  organization_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {};
}

export interface AnalysisNotesGetQueryInterface extends GetQueryInterface {
  id?: string;
  note?: string;
  organization_id?: string;
  user_id?: string;
}
