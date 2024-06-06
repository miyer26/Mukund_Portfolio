'use client';
// components/DownloadButton.client.js
import React from 'react';

const DownloadButton = ({ url }) => {
    const handleDownload = () => {
        window.location.href = url;
    };

    return (
        <button onClick={handleDownload} className="mt-8 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors duration-300">
            Download Resume
        </button>
    );
};

export default DownloadButton;