import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout & Contexts
import MainLayout from './components/layout/MainLayout';
import { AuthProvider } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';
import { JourneyProvider } from './context/JourneyContext';
import { ExpenseProvider } from './context/ExpenseContext';

// Core Screens
import SplashScreen from './pages/SplashScreen';
import { AuthScreen } from './pages/AuthScreen';
import { HomeScreen } from './pages/HomeScreen';
import { ProfileScreen } from './pages/ProfileScreen';
import { AlertsScreen } from './pages/AlertsScreen';
import { MySafarScreen } from './pages/MySafarScreen';

// Set My Safar Flow Screens (booking)
import { DestinationScreen } from './pages/booking/DestinationScreen';
import { PurposeScreen } from './pages/booking/PurposeScreen';
import { JourneyDetailsScreen } from './pages/booking/JourneyDetailsScreen';
import { TravellerDetailsScreen } from './pages/booking/TravellerDetailsScreen';
import { PersonalizeScreen } from './pages/booking/PersonalizeScreen';
import { PackagesScreen } from './pages/booking/PackagesScreen';
import { ReviewScreen } from './pages/booking/ReviewScreen';
import { PaymentScreen } from './pages/booking/PaymentScreen';
import { PaymentSuccessScreen } from './pages/booking/PaymentSuccessScreen';
import { AgentAssignedScreen } from './pages/booking/AgentAssignedScreen';

// My Safar Screens (journey)
import { LiveJourneyScreen } from './pages/journey/LiveJourneyScreen';
import { StayDetailsScreen } from './pages/journey/StayDetailsScreen';
import { ScheduleScreen } from './pages/journey/ScheduleScreen';
import { DocumentsScreen } from './pages/journey/DocumentsScreen';
import { CompletedScreen } from './pages/journey/CompletedScreen';
import { RateScreen } from './pages/journey/RateScreen';

// Companion Tool Screens (features)
import { EmergencySosScreen } from './pages/features/EmergencySosScreen';
import { SafarAiScreen } from './pages/features/SafarAiScreen';
import { ExploreNearbyScreen } from './pages/features/ExploreNearbyScreen';
import { ExpenseTrackerScreen } from './pages/features/ExpenseTrackerScreen';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BookingProvider>
        <JourneyProvider>
          <ExpenseProvider>
            <Router>
              <MainLayout>
                <Routes>
                  {/* Root & Auth */}
                  <Route path="/" element={<SplashScreen />} />
                  <Route path="/login" element={<AuthScreen mode="login" />} />
                  <Route path="/auth" element={<AuthScreen mode="login" />} />
                  <Route path="/signup" element={<AuthScreen mode="signup" />} />
                  <Route path="/home" element={<HomeScreen />} />

                  {/* Set My Safar Booking Flow */}
                  <Route path="/set-safar/destination" element={<DestinationScreen />} />
                  <Route path="/set-safar/purpose" element={<PurposeScreen />} />
                  <Route path="/set-safar/journey-details" element={<JourneyDetailsScreen />} />
                  <Route path="/set-safar/details" element={<JourneyDetailsScreen />} />
                  <Route path="/set-safar/traveller" element={<TravellerDetailsScreen />} />
                  <Route path="/set-safar/personalize" element={<PersonalizeScreen />} />
                  <Route path="/set-safar/packages" element={<PackagesScreen />} />
                  <Route path="/set-safar/review" element={<ReviewScreen />} />
                  <Route path="/set-safar/payment" element={<PaymentScreen />} />
                  <Route path="/set-safar/success" element={<PaymentSuccessScreen />} />
                  <Route path="/set-safar/agent" element={<AgentAssignedScreen />} />
                  <Route path="/set-safar/agent-assigned" element={<AgentAssignedScreen />} />

                  {/* My Safar Journey Management Experience */}
                  <Route path="/my-safar" element={<MySafarScreen />} />
                  <Route path="/my-safar/live" element={<LiveJourneyScreen />} />
                  <Route path="/my-safar/stay" element={<StayDetailsScreen />} />
                  <Route path="/my-safar/schedule" element={<ScheduleScreen />} />
                  <Route path="/my-safar/documents" element={<DocumentsScreen />} />
                  <Route path="/my-safar/sos" element={<EmergencySosScreen />} />
                  <Route path="/emergency-sos" element={<EmergencySosScreen />} />
                  <Route path="/my-safar/ai" element={<SafarAiScreen />} />
                  <Route path="/safar-ai" element={<SafarAiScreen />} />
                  <Route path="/my-safar/explore" element={<ExploreNearbyScreen />} />
                  <Route path="/explore" element={<ExploreNearbyScreen />} />
                  <Route path="/my-safar/expenses" element={<ExpenseTrackerScreen />} />
                  <Route path="/expenses" element={<ExpenseTrackerScreen />} />

                  {/* Completion & Feedback Flow */}
                  <Route path="/safar-completed" element={<CompletedScreen />} />
                  <Route path="/my-safar/completed" element={<CompletedScreen />} />
                  <Route path="/rate-safar" element={<RateScreen />} />
                  <Route path="/my-safar/rate" element={<RateScreen />} />

                  {/* Profile & Alerts */}
                  <Route path="/profile" element={<ProfileScreen />} />
                  <Route path="/alerts" element={<AlertsScreen />} />

                  {/* Fallback to /home */}
                  <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
              </MainLayout>
            </Router>
          </ExpenseProvider>
        </JourneyProvider>
      </BookingProvider>
    </AuthProvider>
  );
};

export default App;
