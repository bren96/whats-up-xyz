export interface Event extends EventData {
  id: string;
}

export interface EventData {
  title: string;
  emailId: string;
  description: string;
  organization: string;
  link: string;
  startTime: string;
  endTime?: string;
}
