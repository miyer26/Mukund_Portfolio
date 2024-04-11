import Image from "next/image";
import RootLayout from "./layout";

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Home() {
  return (
    <RootLayout showTitle={false}>
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Image */}
        <div className="relative w-96 h-96 border">
          <Image src="/images/mukund.jpeg" alt="Your Name" layout="fill" objectFit="cover" />
        </div>
        {/* Introduction */}
        <div className="flex flex-col justify-center items-center text-center border">
          <div className="container">
            <h1 className="text-5xl font-bold mb-4">Mukund Iyer</h1>
            <p className="text-lg">Passionate Data Scientist | AI Enthusiast</p>
          </div>
          <div className="container border w-60"><p className="text-gray-600 mt-2 flex-grow">I'm a data scientist with experience in building end-to-end AI projects. Welcome to my portfolio!</p></div>
          <div className="flex justify-center w-full md:w-1/2 mt-2 border">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mr-4"><FaLinkedin className="text-3xl" /></a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="mr-4"><FaGithub className="text-3xl" /></a>
            <a href="mailto:your-email@example.com" className="mr-4"><MdEmail className="text-3xl" /></a>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}