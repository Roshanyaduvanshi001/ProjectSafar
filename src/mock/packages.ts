import { PackageOption } from '../types/booking';

export const mockPackages: PackageOption[] = [
  {
    id: 'basic-safar',
    name: 'Basic Safar',
    pricePerDay: 499,
    isRecommended: false,
    features: [
      'Journey planning',
      'Basic support',
      'Local recommendations',
      'Emergency assistance',
    ],
  },
  {
    id: 'standard-safar',
    name: 'Standard Safar',
    pricePerDay: 799,
    isRecommended: true,
    features: [
      'Everything in Basic',
      'Stay assistance',
      'Local travel guidance',
      'Dedicated Safar Agent',
      'Priority support',
    ],
  },
  {
    id: 'premium-safar',
    name: 'Premium Safar',
    pricePerDay: 1299,
    isRecommended: false,
    features: [
      'Everything in Standard',
      'Premium stay assistance',
      'Personal local guide',
      '24×7 assistance',
      'Pickup & drop assistance',
    ],
  },
];
