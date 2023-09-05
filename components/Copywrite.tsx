import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiFileTextLine } from 'react-icons/ri';

const CopyrightSection = () => {
  return (
    <section className="bg-white border-t border-gray-300 py-3">
      <div className="container mx-auto flex items-center justify-between max-xsm:flex-col max-xsm:gap-3">
        <div className="text-gray-700">&copy; 2023 FastKar. All rights reserved.</div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-[#75c9fa]">
            <FaGithub size={20} />
          </a>
          <a href="#" className="text-gray-700 hover:text-[#75c9fa]">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="text-gray-700 hover:text-[#75c9fa]">
            <FaTwitter size={20} />
          </a>
        </div>
        <div>
          <a href="#" className="text-gray-700 hover:text-[#75c9fa]">
            Terms & Conditions
          </a>
        </div>
      </div>
    </section>
  );
};

export default CopyrightSection;
