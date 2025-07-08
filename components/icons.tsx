
import React from 'react';

export const CheckIcon = ({ className }: { className?: string }): React.ReactNode => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export const XMarkIcon = ({ className }: { className?: string }): React.ReactNode => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export const LightBulbIcon = ({ className }: { className?: string }): React.ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-4.5c0-2.362-1.683-4.32-3.998-4.632a4.5 4.5 0 0 0-8.216 2.531c.244 3.328 2.878 5.986 5.714 5.986zM12 18a2.25 2.25 0 0 0 2.25-2.25H9.75A2.25 2.25 0 0 0 12 18z" />
    </svg>
);

export const BookOpenIcon = ({ className }: { className?: string }): React.ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
    </svg>
);

export const PuzzlePieceIcon = ({ className }: { className?: string }): React.ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.66.539-1.2 1.2-1.2h3.3c.66 0 1.2.54 1.2 1.2v3.3c0 .66-.54 1.2-1.2 1.2h-3.3c-.66 0-1.2-.54-1.2-1.2v-3.3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.687c0 .66.54 1.2 1.2 1.2h3.3c.66 0 1.2-.54 1.2-1.2v-3.3c0-.66-.54-1.2-1.2-1.2H5.7c-.66 0-1.2.54-1.2 1.2v3.3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 11.037c0-.66.54-1.2 1.2-1.2h.05c.66 0 1.2.54 1.2 1.2v.05c0 .66-.54 1.2-1.2 1.2h-.05c-.66 0-1.2-.54-1.2-1.2v-.05Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.625 12c0-1.036.84-1.875 1.875-1.875h.375a1.875 1.875 0 0 1 0 3.75H7.5A1.875 1.875 0 0 1 5.625 12Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.625a1.875 1.875 0 0 0-1.875 1.875v.375a1.875 1.875 0 0 0 3.75 0V7.5A1.875 1.875 0 0 0 12 5.625Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12c0 1.035-.84 1.875-1.875 1.875h-.375a1.875 1.875 0 0 1 0-3.75h.375A1.875 1.875 0 0 1 18.375 12Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.375a1.875 1.875 0 0 1 1.875-1.875v-.375a1.875 1.875 0 0 1-3.75 0v.375A1.875 1.875 0 0 1 12 18.375Z" />
    </svg>
);

export const CharacterIcon = ({ className }: { className?: string }): React.ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c2.422 0 4.6-.723 6.375-1.956V11.25A9.75 9.75 0 0 0 12 1.5 9.75 9.75 0 0 0 5.625 11.25v8.544A15.39 15.39 0 0 0 12 21.75Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5h7.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5v10.5" />
    </svg>
);
