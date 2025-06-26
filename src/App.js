// src/App.js
import React from "react";
import { FaEnvelope, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaUsers, FaRobot } from "react-icons/fa6";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaGithub, FaJs, FaDatabase, FaLinkedin } from "react-icons/fa";
import { SiMongodb, SiExpress, SiPostman, SiMysql, SiNetlify, SiVercel, SiRender, SiKaggle } from "react-icons/si";
import "./App.css"; // Assuming you have a CSS file for additional styles
import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles
import "animate.css"; // Import Animate.css for additional animations
import RotatingGlobe from "./components/PointsGlobe.jsx";
import Home from "./components/Home.jsx";



export default function App() {
  const journey = [
    {
      year: "2023",
      icon: <FaGraduationCap className="text-pink-400 text-2xl" />,
      title: "Started B.Tech CSE - Data Science",
      description:
        "Began my undergraduate studies at CMR Technical Campus, excited to explore technology and software.",
    },
    {
      year: "2023",
      icon: <FaCode className="text-pink-400 text-2xl" />,
      title: "First Projects & Learning React",
      description:
        "Built basic frontend projects and developed my personal portfolio site using React and Tailwind.",
    },
    {
      year: "2024",
      icon: <FaUsers className="text-pink-400 text-2xl" />,
      title: "Open Source & Hacktoberfest",
      description:
        "Participated in Hacktoberfest, contributed to open source projects, and joined the CodeOholics Club.",
    },
    {
      year: "2025",
      icon: <FaRobot className="text-pink-400 text-2xl" />,
      title: "Real-Time Emergency System & Anime AI Assistant",
      description:
        "Created a real-time gesture-based emergency alert system with Twilio and an anime AI prototype assistant.",
    },
  ];

  const projects = [
    {
      title: "Web-Based Calculator",
      desc: "Built a responsive calculator used by 20+ peers using HTML, CSS, and JavaScript.",
    },
    {
      title: "Real-Time Emergency Alert System",
      desc: "Developed a gesture-triggered emergency alert app using Node.js, Express.js, MongoDB, and Socket.io.",
    },
    {
      title: "Multimodal Anime AI Assistant (Prototype)",
      desc: "AI assistant that accepts text, voice, and image inputs using OpenAI APIs and Voice Recognition (Phase 1).",
    },
  ];

  const skills = [
  { name: "React.js", icon: <FaReact className="text-sky-400 text-3xl" />, proficiency: "Expert" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" />, proficiency: "Intermediate" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-3xl" />, proficiency: "Intermediate" },
  { name: "Kaggle", icon: <SiKaggle className="text-green-400 text-3xl" />, proficiency: "Intermediate" },
  { name: "Express.js", icon: <SiExpress className="text-gray-300 text-3xl" />, proficiency: "Intermediate" },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" />, proficiency: "Expert" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400 text-3xl" />, proficiency: "Expert" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-300 text-3xl" />, proficiency: "Expert" },
  { name: "Python", icon: <FaPython className="text-yellow-400 text-3xl" />, proficiency: "Intermediate" },
  { name: "MySQL", icon: <SiMysql className="text-blue-500 text-3xl" />, proficiency: "Intermediate" },
  { name: "Postman", icon: <SiPostman className="text-orange-400 text-3xl" />, proficiency: "Beginner" },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-3xl" />, proficiency: "Intermediate" },
  { name: "GitHub", icon: <FaGithub className="text-white text-3xl" />, proficiency: "Intermediate" },
  { name: "Vercel", icon: <SiVercel className="text-white text-3xl" />, proficiency: "Beginner" },
  { name: "Render", icon: <SiRender className="text-purple-400 text-3xl" />, proficiency: "Beginner" },
  { name: "Netlify", icon: <SiNetlify className="text-purple-400 text-3xl" />, proficiency: "Beginner" },
  { name: "Database", icon: <FaDatabase className="text-purple-400 text-3xl" />, proficiency: "Intermediate" },
];



  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white font-sans select-none">
      <div className="fixed top-0 right-0 w-[100vw] h-full z-0 opacity-120 pointer-events-none brightness-90 flex justify-end items-center">
  <div className="w-[100%] h-[100%]">
    <RotatingGlobe />
  </div>
</div>
      <div className="relative z-10 max-w-6xl mx-auto pt-36 px-8 py-14">
        <motion.header
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  {/* Foreground content */}
  <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 w-full">
    <img
      src="/harinath.jpeg"
      alt="Harinath Velpula"
      className="w-[15vw] min-w-[100px] h-[15vw] min-h-[100px] rounded-full object-cover border-4 border-pink-400 shadow-lg"
      draggable="false"
    />
    <div className="text-center md:text-left">
      <h1 className="text-7xl font-extrabold mb-4 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 drop-shadow-lg">
        Harinath Velpula
      </h1>
      <p className="text-xl text-purple-300 italic tracking-wide max-w-2xl mx-auto md:mx-0 drop-shadow-md">
        Aspiring Web Developer | React.js & Node.js Wizard | Open Source Enthusiast
      </p>
      <div className="flex justify-center md:justify-start mt-8 space-x-10 text-4xl">
              <motion.a
                href="mailto:harinathvelpula333@gmail.com"
                title="Email"
                className="hover:text-red-500"
                whileHover={{ scale: 1.4, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope />
              </motion.a>
              <motion.a
                href="https://github.com/Harinath333"
                target="_blank"
                title="GitHub"
                className="hover:text-gray-300"
                whileHover={{ scale: 1.4, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/harinath-velpula"
                target="_blank"
                title="LinkedIn"
                className="hover:text-blue-500"
                whileHover={{ scale: 1.4, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1Lk9gq7AAGfZoL39B4m37MDAkuoRQpRi-/view?usp=drive_link"
                target="_blank"
                title="Resume"
                className="hover:text-white-400"
                whileHover={{ scale: 1.4, rotate: -15 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFileAlt />
              </motion.a>
              <motion.a
                href="https://www.kaggle.com/harinathvelpula"
                target="_blank"
                title="Kaggle"
                className="hover:text-blue-400"
                whileHover={{ scale: 1.4, rotate: -15 }}
                whileTap={{ scale: 0.9 }}
              >
                <SiKaggle />
              </motion.a>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-8  "
            >
              <a
                href="https://www.holopin.io/@harinath333#"
                target="_blank"
                className="inline-block px-5 py-2 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 rounded-full text-white font-semibold shadow-lg hover:brightness-110 transition"
              >
                🎖️ View My Hacktoberfest Pins
              </a>
            </motion.div>
      {/* social icons and Hacktoberfest button here (unchanged) */}
    </div>
  </div>
</motion.header>


        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-24 mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 border-b-4 border-pink-500 pb-3 w-fit mx-auto tracking-wide drop-shadow-md">
            About Me
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto text-center text-lg leading-relaxed tracking-wide">
            I'm currently pursuing a B.Tech in Computer Science and Engineering specializing in Data Science. Passionate about building scalable web apps and solving complex problems with data-driven approaches. Proficient in the MERN stack, real-time systems, and open-source collaboration.
          </p>
        </motion.section>

        <motion.section
          id="journey"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mb-24"
        >
          <h2 className="text-5xl font-bold mb-12 border-b-4 border-pink-500 pb-3 w-fit mx-auto tracking-wide drop-shadow-md">
            My Journey
          </h2>
          <div className="relative border-l-4 border-pink-500 pl-6 max-w-4xl mx-auto space-y-10">
            {journey.map((event, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-black/40 rounded-xl p-6 border-l-4 border-purple-400 shadow-lg relative"
              >
                <div className="absolute -left-7 top-6 bg-pink-500 rounded-full w-10 h-10 flex items-center justify-center">
                  {event.icon}
                </div>
                <h4 className="text-2xl font-bold text-pink-400 mb-1">{event.year}</h4>
                <h5 className="text-xl font-semibold text-white mb-1">{event.title}</h5>
                <p className="text-gray-300 text-md leading-relaxed">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-5xl font-bold mb-10 border-b-4 border-pink-500 pb-3 w-fit mx-auto tracking-wide drop-shadow-md">
            Projects
          </h2>
          <div className="space-y-10 max-w-5xl mx-auto">
            {projects.map(({ title, desc }, i) => {
              // Check if this is the "Multimodal Anime AI Assistant (Prototype)" project
              const isAnimeAI = title === "Multimodal Anime AI Assistant (Prototype)";
              const cardContent = (
                <>
                  <h3 className="text-3xl font-extrabold text-white mb-3 drop-shadow-lg">
                    {title}
                  </h3>
                  <p className="text-pink-300 text-lg leading-relaxed">{desc}</p>
                </>
              );
              return isAnimeAI ? (
                <motion.a
                  key={i}
                  href="https://animbot.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.07,
                    boxShadow: "0 15px 30px rgba(219, 39, 119, 0.6)",
                    background:
                      "linear-gradient(135deg, #7e22ce 0%, #db2777 50%, #f43f5e 100%)",
                  }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className="bg-gray-900 rounded-3xl p-8 cursor-pointer block"
                  style={{ textDecoration: "none" }}
                  title="Open Multimodal Anime AI Assistant"
                >
                  {cardContent}
                </motion.a>
              ) : (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.07,
                    boxShadow: "0 15px 30px rgba(219, 39, 119, 0.6)",
                    background:
                      "linear-gradient(135deg, #7e22ce 0%, #db2777 50%, #f43f5e 100%)",
                  }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className="bg-gray-900 rounded-3xl p-8 cursor-pointer"
                >
                  {cardContent}
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-5xl font-bold mb-8 border-b-4 border-pink-500 pb-3 w-fit mx-auto tracking-wide drop-shadow-md">
            Experience
          </h2>
          <ul className="max-w-4xl mx-auto space-y-8 text-pink-200 text-xl">
            <li>
              <h3 className="text-2xl font-bold text-pink-400 mb-1 drop-shadow-md">
                Hacktoberfest 2024 - Open Source Contributor
              </h3>
              <p>Contributed to 4+ repositories. Fixed bugs, improved UIs, added documentation.</p>
            </li>
            <li>
              <h3 className="text-2xl font-bold text-pink-400 mb-1 drop-shadow-md">
                YugaYatra Retail Pvt Ltd - Web Developer Intern
              </h3>
              <p>Built responsive UIs, fixed bugs, and optimized features during internship.</p>
            </li>
            <li>
              <h3 className="text-2xl font-bold text-pink-400 mb-1 drop-shadow-md">
                CodeOholics Club - Technical Team Member
              </h3>
              <p>Organized coding events and built internal tools with React and Node.js.</p>
            </li>
          </ul>
        </motion.section>

        <motion.section
  id="skills"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9, delay: 0.9 }}
  className="mb-24"
>
  <h2 className="text-5xl font-bold mb-8 border-b-4 border-pink-500 pb-3 w-fit mx-auto tracking-wide drop-shadow-md">
    Skills
  </h2>
  <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    {skills.map((skill, i) => (
  <motion.div
    key={i}
    className="relative group bg-black/30 rounded-xl px-5 py-6 cursor-default transition-transform duration-300 font-semibold text-lg text-pink-200 flex flex-col items-center"
    whileHover={{
      scale: 1.1,
      boxShadow: "0 8px 25px rgba(236, 72, 153, 0.6)",
    }}
  >
    {skill.icon}
    <span className="block text-center text-lg mt-2">{skill.name}</span>
    {/* Tooltip */}
    <span className="absolute opacity-0 group-hover:opacity-100 transition bg-pink-500 text-white text-sm rounded px-2 py-1 left-1/2 transform -translate-x-1/2 top-full mt-2 whitespace-nowrap shadow-md z-10">
      {`Proficiency: ${skill.proficiency}`}
    </span>
  </motion.div>
))}

  </div>
</motion.section>


        <footer className="text-center mt-24 text-sm text-pink-400 select-none drop-shadow-md">
          <p>&copy; 2025 Harinath Velpula. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
