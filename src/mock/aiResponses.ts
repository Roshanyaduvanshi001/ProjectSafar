export interface SuggestedPrompt {
  id: string;
  promptText: string;
  replyText: string;
}

export const mockSuggestedPrompts: SuggestedPrompt[] = [
  {
    id: 'next_act',
    promptText: 'What is my next activity?',
    replyText: 'Your next scheduled activity is "Train Departure" on Rajdhani Express (12301) from Howrah Junction at 10:30 AM.',
  },
  {
    id: 'interview_time',
    promptText: 'What is my interview time?',
    replyText: 'Your interview is scheduled for 10:00 AM tomorrow at ABC Technologies, Barakhamba Road, Delhi.',
  },
  {
    id: 'where_hotel',
    promptText: 'Where is my hotel?',
    replyText: 'Your stay is booked at Hotel XYZ, located in Connaught Place, New Delhi. Contact desk: +91 98765 43210.',
  },
  {
    id: 'where_go',
    promptText: 'Where should I go now?',
    replyText: 'You are currently on schedule. After reaching New Delhi Railway Station, proceed directly to Hotel XYZ for check-in at 07:30 AM.',
  },
  {
    id: 'time_left',
    promptText: 'How much time do I have?',
    replyText: 'You have approximately 1 hour 15 minutes before your next scheduled transition.',
  },
  {
    id: 'eat',
    promptText: 'Where should I eat nearby?',
    replyText: 'Near Hotel XYZ in Connaught Place, I highly recommend Saravana Bhavan (350m, South Indian) or Kake Da Hotel (450m, North Indian). Both are verified safe and popular!',
  },
  {
    id: 'explore',
    promptText: 'What can I explore nearby?',
    replyText: 'You can visit Janpath Market (800m), Agrasen ki Baoli (1.1 km), or take a peaceful evening stroll at India Gate (2.8 km).',
  },
];
