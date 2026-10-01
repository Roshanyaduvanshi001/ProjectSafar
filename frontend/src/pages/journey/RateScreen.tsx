import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopNavigation } from '../../components/layout/TopNavigation';
import { Rating } from '../../components/common/Rating';
import { Button } from '../../components/common/Button';
import { useJourney } from '../../context/JourneyContext';

export const RateScreen: React.FC = () => {
  const navigate = useNavigate();
  const { submitRating } = useJourney();

  const [agentRating, setAgentRating] = useState<number>(5);
  const [hotelRating, setHotelRating] = useState<number>(5);
  const [overallRating, setOverallRating] = useState<number>(5);
  const [feedback, setFeedback] = useState<string>('Arjun was extremely helpful and Hotel XYZ was clean & comfortable!');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitRating(agentRating, hotelRating, overallRating, feedback);
    alert('Thank you for rating your Safar! Your feedback helps us maintain premium quality.');
    navigate('/home');
  };

  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 overflow-hidden">
      <TopNavigation title="Rate Your Safar" subtitle="Share Feedback" />

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-black text-slate-900">How was your Safar?</h1>
          <p className="text-xs font-semibold text-slate-500 mt-1">Your review helps maintain trusted companion standards.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Overall Rating Box */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center space-y-2 shadow-sm">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">OVERALL SAFAR EXPERIENCE</span>
            <div className="flex justify-center py-1">
              <Rating value={overallRating} onChange={setOverallRating} size="lg" />
            </div>
            <span className="text-sm font-bold text-blue-600">
              {overallRating === 5 ? 'Loved It! ⭐⭐⭐⭐⭐' : `${overallRating} / 5 Stars`}
            </span>
          </div>

          {/* Individual Category Ratings */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Safar Agent (Arjun Sharma)</h4>
                <p className="text-[11px] text-slate-400 font-medium">Communication & Assistance</p>
              </div>
              <Rating value={agentRating} onChange={setAgentRating} size="md" />
            </div>

            <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Hotel (Hotel XYZ)</h4>
                <p className="text-[11px] text-slate-400 font-medium">Cleanliness & Comfort</p>
              </div>
              <Rating value={hotelRating} onChange={setHotelRating} size="md" />
            </div>
          </div>

          {/* Feedback Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 block">Tell us about your experience...</label>
            <textarea
              rows={4}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your review..."
              className="w-full bg-white border border-slate-200 text-slate-900 text-xs font-semibold rounded-2xl p-3.5 focus:outline-none focus:border-blue-600 shadow-sm"
            ></textarea>
          </div>

          <Button type="submit" size="lg">
            Submit Review
          </Button>
        </form>
      </div>
    </div>
  );
};
