import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, User, Phone, Mail, Calendar, Upload, ShieldCheck, Check } from 'lucide-react';
import { TopNavigation } from '../../components/layout/TopNavigation';
import { ProgressIndicator } from '../../components/common/ProgressIndicator';
import { InputField } from '../../components/common/InputField';
import { Button } from '../../components/common/Button';
import { useBooking } from '../../context/BookingContext';
import { IdTypeOption } from '../../types/booking';

export const TravellerDetailsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { booking, updateTraveller, setCurrentStep } = useBooking();

  const [fullName, setFullName] = useState<string>(booking.traveller.fullName);
  const [phone, setPhone] = useState<string>(booking.traveller.phone);
  const [email, setEmail] = useState<string>(booking.traveller.email);
  const [dob, setDob] = useState<string>(booking.traveller.dob);
  const [gender, setGender] = useState<string>(booking.traveller.gender);
  const [emergencyContact, setEmergencyContact] = useState<string>(booking.traveller.emergencyContact);
  const [currentCity, setCurrentCity] = useState<string>(booking.traveller.currentCity);
  const [idType, setIdType] = useState<IdTypeOption>(booking.traveller.idType);
  const [idUploaded, setIdUploaded] = useState<boolean>(booking.traveller.idUploaded);

  const handleUpload = () => {
    setIdUploaded(true);
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    updateTraveller({
      fullName,
      phone,
      email,
      dob,
      gender,
      emergencyContact,
      currentCity,
      idType,
      idUploaded,
    });
    setCurrentStep(5);
    navigate('/set-safar/personalize');
  };

  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 overflow-hidden">
      <TopNavigation
        title="Traveller Details"
        subtitle="Step 4 of 5"
        onBackClick={() => navigate('/set-safar/journey-details')}
      />

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <ProgressIndicator currentStep={4} />

        <div>
          <h1 className="text-2xl font-black text-slate-900">Traveller Details</h1>
          <p className="text-xs font-semibold text-slate-500 mt-1">Provide traveller info for safety & ticket issuance.</p>
        </div>

        <form onSubmit={handleContinue} className="space-y-4">
          <InputField
            label="Full Name"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Roshan Kumar"
            icon={<User className="w-4 h-4" />}
          />

          <div className="grid grid-cols-2 gap-3">
            <InputField
              label="Phone Number"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 XXXXX XXXXX"
              icon={<Phone className="w-4 h-4" />}
            />
            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              icon={<Mail className="w-4 h-4" />}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <InputField
              label="Date of Birth"
              type="text"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              placeholder="DD/MM/YYYY"
              icon={<Calendar className="w-4 h-4" />}
            />
            <div className="flex flex-col space-y-1.5">
              <label className="text-xs font-semibold text-slate-700">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold rounded-xl py-3 px-3 focus:outline-none focus:border-blue-600 focus:bg-white"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <InputField
            label="Emergency Contact Number"
            type="text"
            value={emergencyContact}
            onChange={(e) => setEmergencyContact(e.target.value)}
            placeholder="+91 XXXXX XXXXX"
            icon={<Phone className="w-4 h-4 text-red-500" />}
          />

          <InputField
            label="Current Home City"
            type="text"
            value={currentCity}
            onChange={(e) => setCurrentCity(e.target.value)}
            placeholder="e.g. Kolkata"
            icon={<User className="w-4 h-4" />}
          />

          {/* Verification Section */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-3">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Identity Verification (Prototype Placeholder)
              </h3>
            </div>

            <div className="flex items-center space-x-2">
              {(['Aadhaar', 'Passport', 'Driving Licence'] as IdTypeOption[]).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setIdType(type)}
                  className={`flex-1 py-2 px-1 text-[11px] font-bold rounded-xl border transition-all ${
                    idType === type
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-slate-50 text-slate-600 border-slate-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handleUpload}
              className={`w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 border border-dashed transition-all ${
                idUploaded
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                  : 'bg-slate-50 border-slate-300 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {idUploaded ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                  <span>{idType} Verification Doc Uploaded</span>
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 text-slate-500" />
                  <span>Upload {idType} Document</span>
                </>
              )}
            </button>
          </div>

          <Button type="submit" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
            Continue →
          </Button>
        </form>
      </div>
    </div>
  );
};
