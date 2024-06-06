"use client";

import React, { useState } from 'react';

const Skills: React.FC = () => {
    const skills = [
        {
            name: 'Machine Learning',
            level: 'Advanced',
            description:
                'Expertise in supervised, unsupervised, and reinforcement learning, model tuning, and evaluation. Proficient with libraries such as scikit-learn, TensorFlow, and PyTorch.',
        },
        {
            name: 'Data Analysis',
            level: 'Expert',
            description:
                'Advanced proficiency in statistical analysis, data visualization, and predictive modeling. Experienced with tools like R, Python (Pandas, NumPy), and specialized software such as SAS.',
        },
        {
            name: 'Data Engineering',
            level: 'Advanced',
            description:
                'Skilled in data pipeline construction, ETL processes, and real-time data processing using Apache Kafka, Apache Airflow, and Apache Spark.',
        },
        {
            name: 'Data Visualization',
            level: 'Expert',
            description:
                'Adept at creating actionable insights through visualizations using Tableau, Power BI, and programmatic tools like Matplotlib, Seaborn, and D3.js.',
        },
        {
            name: 'Programming',
            level: 'Advanced',
            description:
                'Strong programming skills in Python, R, SQL, Scala, and Java. Comfortable with software development best practices and version control systems like Git.',
        },
        {
            name: 'Big Data Technologies',
            level: 'Intermediate',
            description:
                'Familiar with technologies like Hadoop, Spark, and Hive, as well as cloud services such as AWS, Azure, and Google Cloud Platform for scalable big data solutions.',
        },
        {
            name: 'AI Ethics and Fairness',
            level: 'Intermediate',
            description:
                'Knowledgeable about ethical issues and fairness in AI, bias detection and mitigation techniques. Trained in responsible AI design and implementation.',
        },
        {
            name: 'Deep Learning',
            level: 'Advanced',
            description:
                'Proficient in building and deploying deep neural networks, particularly for image and natural language processing tasks, using frameworks like TensorFlow and Keras.',
        },
        {
            name: 'Statistical Modelling',
            level: 'Expert',
            description:
                'Highly skilled in statistical inference, hypothesis testing, regression models, and Bayesian statistics, capable of deriving robust models from complex datasets.',
        },
        {
            name: 'Natural Language Processing',
            level: 'Advanced',
            description:
                'Experienced in text mining, sentiment analysis, and machine translation, with projects utilizing NLP libraries such as NLTK, spaCy, and GPT models.',
        },
        {
            name: 'Quantitative Methods',
            level: 'Expert',
            description:
                'Expert in applying quantitative techniques to solve business problems, including optimization algorithms, simulation models, and decision analysis.',
        },
        // Add more skills as needed
    ];

    const [expandedSkill, setExpandedSkill] = useState<number | null>(null);

    const toggleDescription = (index: number) => {
        setExpandedSkill(expandedSkill === index ? null : index);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap -m-3">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3"
                        onClick={() => toggleDescription(index)}
                    >
                        <div className="bg-white border shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                            <h2 className="text-md font-bold text-gray-800">{skill.name}</h2>
                            <h3 className="text-md text-gray-600">{skill.level}</h3>
                            <div
                                className={`mt-2 overflow-hidden transition-all duration-500 ease-in-out ${expandedSkill === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <p className="text-gray-600">{skill.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;