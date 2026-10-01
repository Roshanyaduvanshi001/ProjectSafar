import { DocumentItem } from '../types/journey';

export const mockDocumentsData: DocumentItem[] = [
  {
    id: 'doc_train_01',
    name: 'Train Ticket (Kolkata → Delhi)',
    type: 'ticket',
    issuedFor: 'Rajdhani Express (12301)',
    fileSize: '1.2 MB',
    documentNumber: 'PNR: 2458901234',
  },
  {
    id: 'doc_hotel_01',
    name: 'Hotel Voucher',
    type: 'hotel',
    issuedFor: 'Hotel XYZ, New Delhi',
    fileSize: '840 KB',
    documentNumber: 'HTL-DEL-2026-908',
  },
  {
    id: 'doc_letter_01',
    name: 'Interview Letter',
    type: 'letter',
    issuedFor: 'ABC Technologies',
    fileSize: '450 KB',
    documentNumber: 'INV-2026-441',
  },
  {
    id: 'doc_id_01',
    name: 'Identity Card (Aadhaar)',
    type: 'id',
    issuedFor: 'Government of India',
    fileSize: '2.1 MB',
    documentNumber: 'XXXX-XXXX-9012',
  },
  {
    id: 'doc_ins_01',
    name: 'Travel Insurance Policy',
    type: 'insurance',
    issuedFor: 'Safar Care Protection',
    fileSize: '1.5 MB',
    documentNumber: 'POL-SAF-882190',
  },
];
