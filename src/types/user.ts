export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
  isVerified: boolean;
  completedSafarsCount: number;
  citiesVisitedCount: number;
  averageRating: number;
  currentCity: string;
}
