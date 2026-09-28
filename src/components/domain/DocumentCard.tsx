import React from 'react';
import { FileText, Eye, Download, Shield } from 'lucide-react';
import { DocumentItem } from '../../types/journey';

interface DocumentCardProps {
  document: DocumentItem;
  onView: () => void;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({ document, onView }) => {
  return (
    <div className="w-full bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center justify-between hover:border-slate-200 transition-all">
      <div className="flex items-center space-x-3.5">
        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
          <FileText className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900 leading-tight">{document.name}</h4>
          <p className="text-xs font-medium text-slate-500 mt-0.5">{document.issuedFor}</p>
          <div className="flex items-center space-x-2 mt-1 text-[10px] text-slate-400 font-semibold">
            <span>{document.documentNumber}</span>
            <span>•</span>
            <span>{document.fileSize}</span>
          </div>
        </div>
      </div>

      <button
        onClick={onView}
        className="py-2 px-3 bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-all shrink-0 active:scale-95"
      >
        <Eye className="w-3.5 h-3.5" />
        <span>View</span>
      </button>
    </div>
  );
};
