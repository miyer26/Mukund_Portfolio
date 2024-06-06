import Image from "next/image";
import Skills from './Skills.client';

import React from 'react';

const SkillsSection = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <h1 className="text-3xl font-bold text-center mt-2 mb-2">Skills</h1>
            <Skills />
        </div>
    );
};

export default SkillsSection;