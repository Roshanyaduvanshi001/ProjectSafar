import { ActiveJourneyState } from '../types/journey';
import { mockAgentData } from './agentData';
import { mockStayData } from './hotelData';
import { mockDocumentsData } from './documentsData';

export const mockLiveJourney: ActiveJourneyState = {
  id: 'safar_202610234',
  status: 'LIVE',
  fromCity: 'Kolkata',
  toCity: 'Delhi',
  departureDate: '20 May 2026',
  departureTime: '10:30 AM',
  timeline: [
    {
      id: 'step_1',
      title: 'Leave Home',
      subtitle: 'Kolkata, WB • 08:15 AM',
      status: 'completed',
    },
    {
      id: 'step_2',
      title: 'Reach Station',
      subtitle: 'Howrah Junction • 09:30 AM',
      status: 'completed',
    },
    {
      id: 'step_3',
      title: 'Train Departure',
      subtitle: 'Rajdhani Express (12301) • 10:30 AM',
      status: 'completed',
    },
    {
      id: 'step_4',
      title: 'Reach Delhi',
      subtitle: 'New Delhi Railway Station • Expected 06:15 AM',
      status: 'active',
    },
    {
      id: 'step_5',
      title: 'Hotel Check-in',
      subtitle: 'Hotel XYZ, New Delhi • 07:30 AM',
      status: 'upcoming',
    },
    {
      id: 'step_6',
      title: 'Interview',
      subtitle: 'ABC Technologies • 10:00 AM',
      status: 'upcoming',
    },
  ],
  agent: mockAgentData,
  stay: mockStayData,
  schedule: [
    { id: 'sch_1', time: '07:00 AM', title: 'Breakfast', category: 'meal', location: 'Hotel XYZ Dining Hall', completed: true },
    { id: 'sch_2', time: '08:15 AM', title: 'Leave Hotel', category: 'travel', location: 'Hotel XYZ Lobby', completed: false },
    { id: 'sch_3', time: '08:45 AM', title: 'Reach Interview Location', category: 'meeting', location: 'ABC Technologies, Barakhamba Road', completed: false },
    { id: 'sch_4', time: '10:00 AM', title: 'Interview', category: 'meeting', location: 'Conference Room B, 4th Floor', completed: false },
    { id: 'sch_5', time: '12:00 PM', title: 'Lunch', category: 'meal', location: 'Saravana Bhavan, CP', completed: false },
    { id: 'sch_6', time: '02:00 PM', title: 'Local Exploration', category: 'explore', location: 'India Gate & Janpath', completed: false },
    { id: 'sch_7', time: '06:00 PM', title: 'Return Hotel', category: 'hotel', location: 'Hotel XYZ', completed: false },
  ],
  documents: mockDocumentsData,
};
