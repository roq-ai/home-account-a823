import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface EarningsInterface {
  id?: string;
  amount: number;
  date: any;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface EarningsGetQueryInterface extends GetQueryInterface {
  id?: string;
  organization_id?: string;
}
