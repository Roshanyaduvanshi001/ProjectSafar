import React, { createContext, useContext, useState } from 'react';
import { ActiveJourneyState, ScheduleEventItem } from '../types/journey';
import { mockLiveJourney } from '../mock/liveJourney';

interface JourneyContextType {
  journey: ActiveJourneyState;
  toggleScheduleItem: (id: string) => void;
  markJourneyCompleted: () => void;
  submitRating: (agentRating: number, hotelRating: number, overallRating: number, feedback: string) => void;
  ratings: {
    agent: number;
    hotel: number;
    overall: number;
    feedback: string;
  };
}

const JourneyContext = createContext<JourneyContextType | undefined>(undefined);

export const JourneyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [journey, setJourney] = useState<ActiveJourneyState>(mockLiveJourney);
  const [ratings, setRatings] = useState({
    agent: 5,
    hotel: 5,
    overall: 5,
    feedback: '',
  });

  const toggleScheduleItem = (id: string) => {
    setJourney(prev => ({
      ...prev,
      schedule: prev.schedule.map((item: ScheduleEventItem) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      ),
    }));
  };

  const markJourneyCompleted = () => {
    setJourney(prev => ({ ...prev, status: 'COMPLETED' }));
  };

  const submitRating = (agentRating: number, hotelRating: number, overallRating: number, feedback: string) => {
    setRatings({ agent: agentRating, hotel: hotelRating, overall: overallRating, feedback });
  };

  return (
    <JourneyContext.Provider
      value={{
        journey,
        toggleScheduleItem,
        markJourneyCompleted,
        submitRating,
        ratings,
      }}
    >
      {children}
    </JourneyContext.Provider>
  );
};

export const useJourney = () => {
  const context = useContext(JourneyContext);
  if (!context) {
    throw new Error('useJourney must be used within a JourneyProvider');
  }
  return context;
};
