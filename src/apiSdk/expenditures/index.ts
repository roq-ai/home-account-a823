import axios from 'axios';
import queryString from 'query-string';
import { ExpendituresInterface, ExpendituresGetQueryInterface } from 'interfaces/expenditures';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getExpenditures = async (
  query?: ExpendituresGetQueryInterface,
): Promise<PaginatedInterface<ExpendituresInterface>> => {
  const response = await axios.get('/api/expenditures', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createExpenditures = async (expenditures: ExpendituresInterface) => {
  const response = await axios.post('/api/expenditures', expenditures);
  return response.data;
};

export const updateExpendituresById = async (id: string, expenditures: ExpendituresInterface) => {
  const response = await axios.put(`/api/expenditures/${id}`, expenditures);
  return response.data;
};

export const getExpendituresById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/expenditures/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteExpendituresById = async (id: string) => {
  const response = await axios.delete(`/api/expenditures/${id}`);
  return response.data;
};
