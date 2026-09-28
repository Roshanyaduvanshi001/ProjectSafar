import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopNavigation } from '../../components/layout/TopNavigation';
import { BottomNavigation } from '../../components/layout/BottomNavigation';
import { DocumentCard } from '../../components/domain/DocumentCard';
import { useJourney } from '../../context/JourneyContext';
import { DocumentItem } from '../../types/journey';
import { FileText, X, Download, ShieldCheck } from 'lucide-react';

export const DocumentsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { journey } = useJourney();
  const [selectedDoc, setSelectedDoc] = useState<DocumentItem | null>(null);

  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 overflow-hidden relative">
      <TopNavigation 
        title="Documents Vault" 
        subtitle="Encrypted Storage" 
        showBack={true}
        onBackClick={() => navigate('/my-safar')}
      />

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-black text-slate-900">My Documents</h1>
          <p className="text-xs font-semibold text-slate-500 mt-1">Access your travel tickets, vouchers, and verification IDs.</p>
        </div>

        <div className="space-y-3">
          {journey.documents.length === 0 ? (
            <div className="bg-white rounded-2xl p-6 text-center border border-slate-100 space-y-1">
              <p className="text-xs font-bold text-slate-700">No documents stored</p>
              <p className="text-[11px] text-slate-400 font-medium">Your travel tickets and vouchers will appear here once saved.</p>
            </div>
          ) : (
            journey.documents.map((doc) => (
              <DocumentCard
                key={doc.id}
                document={doc}
                onView={() => setSelectedDoc(doc)}
              />
            ))
          )}
        </div>
      </div>

      <BottomNavigation />

      {/* Simulated Document Viewer Modal */}
      {selectedDoc && (
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-6 animate-fade-in">
          <div className="bg-white w-full rounded-3xl p-6 space-y-4 shadow-2xl relative max-h-[90%] overflow-y-auto">
            <button
              onClick={() => setSelectedDoc(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 pt-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">{selectedDoc.name}</h3>
                <p className="text-xs text-slate-500 font-semibold">{selectedDoc.issuedFor}</p>
              </div>
            </div>

            <div className="bg-slate-100 rounded-2xl h-64 w-full flex flex-col items-center justify-center p-4 border border-slate-200">
              <ShieldCheck className="w-12 h-12 text-blue-600 mb-2" />
              <span className="text-xs font-bold text-slate-700">{selectedDoc.documentNumber}</span>
              <span className="text-[11px] font-semibold text-slate-400 mt-1">Simulated Preview Document Watermark</span>
              <div className="mt-3 px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full">
                Safar Verified Document ✓
              </div>
            </div>

            <div className="flex space-x-3 pt-2">
              <button
                onClick={() => {
                  alert(`Simulating download for ${selectedDoc.name}`);
                  setSelectedDoc(null);
                }}
                className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold text-xs flex items-center justify-center space-x-2 shadow-md hover:bg-blue-700"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
