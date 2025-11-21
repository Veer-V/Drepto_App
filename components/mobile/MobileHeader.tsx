import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface MobileHeaderProps {
    title: string;
    showBack?: boolean;
    onBack?: () => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ title, showBack = true, onBack }) => {
    const navigate = useNavigate();

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            navigate(-1);
        }
    };

    return (
        <div className="bg-white shadow-sm px-4 py-3 flex items-center sticky top-0 z-50">
            {showBack && (
                <button
                    onClick={handleBack}
                    className="mr-3 p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            )}
            <h1 className="text-lg font-bold text-gray-800 flex-1">{title}</h1>
        </div>
    );
};

export default MobileHeader;
