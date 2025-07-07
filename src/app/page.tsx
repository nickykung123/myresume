"use client";
import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaUniversity } from "react-icons/fa";
import { LuUniversity } from "react-icons/lu";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const navItems = ["Home", "About", "Skills", "Education", "Projects"];

    

  const skillList = [
    {
      title: "Frontend Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      title: "Tools & Design",
      skills: ["Figma", "GitHub", "Canva", "Visual Studio Code", "Postman"],
    },
  ];

  const projects = [
    {
      name: "Melodytune",
      image: "/MELODYTUNE.png",
      date: "Jul 2024 - Sep 2024",
      tag: "Front-end Development,Back-end Development,UX/UI",
      description:
        "In this project, I have completed the following six parts Part 1 organized SRS documents Part 2 collected Requirements Part 3 designed the Admin page Part 4 created the Customer Journey (user) Part 5 created the Customer Journey (administrator) Part 6 created the Customer Journey (article writer)",
    },
    {
      name: "Jobhouse",
      image: "/Jobhouse.png",
      date: "Jul 2024 - Sep 2024",
      tag: "Front-end Development,Back-end Development,UX/UI",
      description:
        "In this project, I was responsible for developing the job search page, as well as both front-end and back-end development.",
    },
    {
      name: "Measure sugar levels",
      image: "/login.png",
      date: "Dec 2024 - Feb 2025",
      tag: "Front-end Development,Back-end Development,UX/UI",
      description:
        "In this project, I developed the login page, sign-up page, the majority of the front-end components, and one page for sugar calculation.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow px-6 py-4 flex justify-center">
        <div className="flex gap-6 md:gap-10 text-sm font-semibold uppercase tracking-wide">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth
              duration={500}
              offset={-80}
              spy
              activeClass="opacity-80"
              className="relative group cursor-pointer hover:opacity-60 transition"
            >
              {item}
              <span className="absolute -bottom-1 left-0 h-0.5 w-full scale-x-0 group-hover:scale-x-100 bg-black transition-transform origin-left duration-300" />
            </Link>
          ))}
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="pt-20 pb-24 px-6 max-w-4xl mx-auto text-center flex flex-col justify-center items-center gap-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-64 h-64 rounded-full overflow-hidden border border-black shadow hover:scale-105 transition duration-300">
          <Image
            src="/profile.png"
            alt="portrait"
            width={256}
            height={256}
            className="object-cover w-full h-full"
          />   </div>
        </motion.div>
        
     
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6"
            animate={{
              y: [0, -20, 0], // เด้งขึ้นลง 20px แบบนุ่มนวล
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <div>
              <span className="text-black">Kittisak Wongraja </span>
            </div>
          </motion.h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        ><div className="font-bold text-2xl">
          Software Engineering
          </div>
          <div>Coding with heart, designing with purpose — making technology feel
        human.
            </div></motion.div>
        
      </section>

      {/* About Section */}

      <section
        id="about"
        className="bg-gray-100 text-black py-24 px-6 flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white text-black p-8 rounded-2xl border border-black shadow-lg hover:scale-105 transition duration-300 max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 inline-block pb-1">
              About Me
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              My name is Kittisak Wongraja, a 3rd-year Software Engineering
              student at the University of Phayao. I am seeking an internship in
              Front-End , UX/UI Design, or Business Analysis (BA) from November
              2025 to March 2026. I have experience in web development using
              React, Next.js, and back-end technologies. I'm also familiar with
              UX/UI design, system analysis, and writing SRS documents. I'm
              eager to learn and grow through real-world experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-black">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black text-black hover:bg-black hover:text-white px-6 py-2 rounded-full font-medium transition"
              >
                Resume
              </a>
              <div className="flex justify-center gap-6 text-2xl">
                <a
                  href="https://github.com/nickykung123"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="hover:opacity-60 transition" />
                </a>
                <a
                  href="https://www.facebook.com/nickykung123"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="hover:opacity-60 transition" />
                </a>
                <a href="https://www.instagram.com/nickykung123/">
                  <FaInstagram className="hover:opacity-60 transition" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white text-black py-24 px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-12  inline-block pb-2">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            {skillList.map((category, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:scale-105 transition border border-black"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {category.title}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {category.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="bg-gray-100 text-black py-24 px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
        <h2 className="text-4xl md:text-5xl font-bold mb-16  inline-block pb-2">
          Education
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
          {/* UNIVERSITY */}
          <div className="bg-white border p-6 rounded-2xl shadow-xl backdrop-blur-md hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <FaUniversity className="text-6xl text-black" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              University of Phayao
            </h3>
            <p className="text-black font-medium mb-2">
              Bachelor of Engineering (Software Engineering)
            </p>
            <p className="text-sm text-black">GPA: 3.32</p>
          </div>

          {/* SCHOOL */}
          <div className="bg-white/80 border p-6 rounded-2xl shadow-xl backdrop-blur-md hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <LuUniversity className="text-6xl text-black" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              Phayaophitthayakhom School
            </h3>
            <p className="text-black font-medium mb-2">Science & Math</p>
          </div>
        </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white text-black py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-12 inline-block pb-2">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="bg-gray-100 p-4 rounded-xl shadow hover:scale-105 transition text-left cursor-pointer"
            >
              <div className="w-full h-40 relative rounded-md overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-sm text-gray-500">{project.date}</p>
              <p className="text-sm italic text-gray-600 mb-2">
                {project.tag}
              </p>
              <p className="text-gray-700 text-sm line-clamp-3">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
            className="bg-white rounded-xl p-6 max-w-3xl w-full relative shadow-xl overflow-auto max-h-[90vh]"
          >
            <button
              className="absolute top-3 right-4 text-black text-4xl font-bold z-10"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <div className="relative w-full h-64 md:h-96 mb-4">
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">{selectedProject.name}</h3>
            <p className="text-sm text-gray-500 mb-1">{selectedProject.date}</p>
            <p className="text-sm italic text-gray-600 mb-4">
              {selectedProject.tag}
            </p>
            <p className="text-gray-700 text-base">
              {selectedProject.description}
            </p>
          </motion.div>
        </div>
      )}
    </section>
    </main>
  );
}
