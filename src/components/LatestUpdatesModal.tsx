'use client';
import { hideLatestUpdatesModal } from '@/redux/slices/sidebarSlice';
import { RootState } from '@/redux/store';
import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const updates = [
    "Class XI Admission Form 2025-26",
    "Class XI Admission Form 2025-26 Class XI Form for the 2025–26 year",
    "Class XI Admission 2025-26 Class XI Form 2025-26",
    "Class XI Admission Form 2025-26",
    "Class XI Admission Form 2025-26",
    "Class XI Admission Form 2025-26",
    "Class XI Admission Form 2025-26 Class XI Form for the 2025–26 year",
    "Class XI Admission 2025-26 Class XI Form 2025-26",
    "Class XI Admission Form 2025-26",
    "Class XI Admission Form 2025-26"
];

const LatestUpdatesModal = () => {
    const dispatch = useDispatch();
    const { isLatestUpdatesModalOpen } = useSelector((state: RootState) => state.sidebarSlice);
    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        if (isLatestUpdatesModalOpen) {
            setTimeout(() => setAnimateIn(true), 50); 
        }
    }, [isLatestUpdatesModalOpen]);

    return (
            <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex justify-end rounded-lg shadow-lg overflow-hidden max-w-[400px]">
                <div
                    className={`bg-white h-[450px] w-full max-w-full shadow-lg transform transition-transform duration-300 ease-in-out ${animateIn ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    {/* Header */}
                    <div className="bg-[#2E2879] text-white px-5 py-3 flex justify-between items-center">
                        <h2 className="text-lg font-semibold tracking-wider">LATEST UPDATES</h2>
                        <button
                            onClick={() => dispatch(hideLatestUpdatesModal())}
                            className="text-white text-xl font-bold"
                        >
                            <FaTimes className="text-[#fff] text-2xl cursor-pointer" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="px-4 py-6 max-h-[calc(450px-64px)] overflow-y-auto space-y-4">
                        {updates.map((item, index) => (
                            <div key={index} className="flex justify-between border-b pb-2">
                                <div className="w-[80%]">
                                    <p className="text-sm font-medium text-gray-800">{item}</p>
                                    <div className="text-xs text-gray-500 mt-1">
                                        12-02-2025 <span className="mx-1">|</span> <a href="#" className="text-blue-600 font-semibold hover:underline">Download</a>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-center items-center w-10 h-5 text-[10px] bg-orange-500 text-white font-bold rounded-sm">NEW</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
};

export default LatestUpdatesModal;
