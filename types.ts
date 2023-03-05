export interface Job {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: JobDetail
  role: JobDetail;
}

export interface JobDetail {
  content: string;
  items: string[];
}
