const mapping: Record<string, string> = {
  'analysis-notes': 'analysis_notes',
  earnings: 'earnings',
  expenditures: 'expenditures',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
