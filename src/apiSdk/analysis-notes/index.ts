import axios from 'axios';
import queryString from 'query-string';
import { AnalysisNotesInterface, AnalysisNotesGetQueryInterface } from 'interfaces/analysis-notes';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAnalysisNotes = async (
  query?: AnalysisNotesGetQueryInterface,
): Promise<PaginatedInterface<AnalysisNotesInterface>> => {
  const response = await axios.get('/api/analysis-notes', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAnalysisNotes = async (analysisNotes: AnalysisNotesInterface) => {
  const response = await axios.post('/api/analysis-notes', analysisNotes);
  return response.data;
};

export const updateAnalysisNotesById = async (id: string, analysisNotes: AnalysisNotesInterface) => {
  const response = await axios.put(`/api/analysis-notes/${id}`, analysisNotes);
  return response.data;
};

export const getAnalysisNotesById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/analysis-notes/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAnalysisNotesById = async (id: string) => {
  const response = await axios.delete(`/api/analysis-notes/${id}`);
  return response.data;
};
