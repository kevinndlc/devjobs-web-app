import jobs from './data.json';
import { Job } from '~/types';

jobs as Job[];

export default defineEventHandler(async (event) => {
  const { search, location, fullTime } = getQuery(event)

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return jobs.filter((job) => (job.position.toLowerCase().includes((search as string)?.toLowerCase() ?? '') || job.company.toLowerCase().includes((search as string)?.toLowerCase() ?? '')) && job.location.toLowerCase().includes((location as string)?.toLowerCase() ?? '') && (fullTime === 'true' ? job.contract === 'Full Time' : true));
});
