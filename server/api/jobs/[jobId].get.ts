import jobs from './data.json';
import { Job } from '~/types';

jobs as Job[];

export default defineEventHandler(async event => {
  const params = event.context.params as { jobId: string }

  await new Promise((resolve) => setTimeout(resolve, 10000));

  return jobs.find(job => job.id === Number(params.jobId))
})