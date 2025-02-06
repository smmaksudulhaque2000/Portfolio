import { motion } from 'framer-motion';
import { FaCode, FaDumbbell, FaBook, FaMusic } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div id="about" className="py-16 px-8 md:px-24 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <motion.h3
        className="text-4xl md:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h3>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Section: Introduction */}
        <motion.div
          className="md:w-1/2 text-lg md:text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="mb-6">
            Hello! I'm <span className="text-blue-400 font-semibold">Maksudul Haque</span>, a passionate Full-Stack Web Developer with a strong interest in crafting user-centric web solutions. My programming journey started during my early academic years, and since then, it has been a thrilling adventure of constant learning and growth.
          </p>
          <p className="mb-6">
            I enjoy working on both front-end and back-end projects. I thrive on building intuitive user interfaces and scalable back-end systems. Creating meaningful digital experiences that can make a positive impact is what excites me the most.
          </p>
          <p className="mb-6">
            When I'm not coding, you’ll find me exploring new technologies, reading books, working out, or listening to music. I believe in maintaining a balance between work and personal life, as it helps fuel creativity and motivation.
          </p>
          <p>
            I’m a curious and enthusiastic person who loves collaborating with others and taking on new challenges. Let’s create something amazing together!
          </p>
        </motion.div>

        {/* Right Section: Icons Showcase */}
        <motion.div
          className="md:w-1/2 grid grid-cols-2 gap-8 text-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
            <FaCode className="text-5xl text-blue-400 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Coding</h4>
            <p className="text-gray-300">I love problem-solving and turning ideas into reality through code.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
            <FaDumbbell className="text-5xl text-green-400 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Workout</h4>
            <p className="text-gray-300">Working out keeps me healthy, focused, and energized.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
            <FaBook className="text-5xl text-yellow-400 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Reading</h4>
            <p className="text-gray-300">I enjoy reading books on technology, self-improvement, and fiction.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
            <FaMusic className="text-5xl text-pink-400 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Music</h4>
            <p className="text-gray-300">Music is my escape and a great source of inspiration.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
