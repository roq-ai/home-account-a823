import { AnalysisNotesInterface } from 'interfaces/analysis-notes';
import { EarningsInterface } from 'interfaces/earnings';
import { ExpendituresInterface } from 'interfaces/expenditures';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  analysis_notes?: AnalysisNotesInterface[];
  earnings?: EarningsInterface[];
  expenditures?: ExpendituresInterface[];
  user?: UserInterface;
  _count?: {
    analysis_notes?: number;
    earnings?: number;
    expenditures?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
