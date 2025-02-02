import { useState, useEffect } from "react";
import Button from "./Button.jsx";
import { motion } from "framer-motion";
import { Building2, Calendar, Link, Users } from "lucide-react";
import { Linkedin, Github } from "lucide-react";
function MainContent({ darkMode }) {
  const [showPDF, setShowPDF] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("left");
  const [position, setPosition] = useState(0);
  const [isResumeOpen, setIsResumeOpen] = useState(true);
  const [role, setRole] = useState("Software Engineer");
  const roles = [
    "Software Engineer",
    "Front-End Developer",
    "Back-End Developer",
    "Full Stack Developer",
  ];
  const education = [
    {
      school: "University of Texas at Arlington",
      degree: "Master of Science in Computer Science",
      gpa: "3.89",
      field: "Big Data and Machine Learning",
      startDate: "2023",
      endDate: "present",
      description:
        "I specialize in Big Data and AI, with experience in analyzing large datasets, implementing machine learning algorithms, and developing AI-driven solutions. I am also familiar with Cloud Computing and Web Development, integrating data processing and AI models into scalable applications.",
      logo: "/uta.png",
    },
    {
      school: "Kakatiya Institute of Technology and Science",
      degree: "Bachelor of Science in Computer Science",
      gpa: "3.9",
      field: "Web Development and Software Engineering",
      startDate: "2017",
      endDate: "2021",
      description:
        "Major in Computer Science with minor in web devlopment. Dean's List all semesters.",
      logo: "/kitsw.png",
    },
  ];
  const experiences = [
    {
      company: "Tata Consultancy Services",
      title: "Software Engineer",
      location: "Hyderabad, India",
      startDate: "Jun 2021",
      endDate: "Jul 2023",
      description:
        "I have worked as a consultant for Qualcomm and Cisco, where I contributed as a Full Stack Developer, taking responsibility for the development of internal, confidential projects. Also worked on service now and provided support for the clients.",
      skills: ["Angular", "Javascript", "Java", "Spring Boot", "MySQL"],
      logo: "/tcs.png",
    },
    {
      company: "Verzeo Microsoft",
      title: "Macine Learning Intern",
      location: "Remote",
      startDate: "Jul 2020",
      endDate: "Aug 2020",
      description:
        "I have gained knowledge in various machine learning concepts and hands-on experience in building and training models using supervised learning techniques to solve real-world problems.",
      skills: ["Machine Learning", "Python"],
      logo: "/verzeo.png",
    },
  ];
  const projects = [
    {
      title: "Portfolio",
      date: "Jan 2025 - present",
      description:
        "I developed a portfolio application to effectively showcase my skills, projects, and experience. The application features a responsive design, intuitive navigation, and a well-structured layout to highlight my work and professional journey.",
      image: "/portfolio.png",
      skills: ["React", "Javascript", "Tailwind CSS"],
      projectUrl: "https://sxb3349.uta.cloud/",
    },
    {
      title: "Thesis Repository System - SecureVault",
      date: "Aug 2024 - Jan 2025",
      description:
        "I was part of the front-end team that developed a thesis repository system, enabling users to upload their theses while assigned reviewers could view, approve, or reject submissions with proper reasoning.",
      image: "/scholarvault.png",
      skills: ["React", "Node.js", "MySQL"],
      projectUrl: "https://sxb3349.uta.cloud/",
    },
    {
      title: "File Storage System - Vault",
      date: "Aug 2023 - Jan 2024",
      description:
        "I solely developed the front-end of a secure file access system that used OTP authentication, eliminating the need to remember passwords for each file. The system also featured a structured directory and allowed users to store and manage different versions of the same file efficiently.",
      image: "/vault.png",
      skills: ["Angular", "Firebase", "Javascript"],
      projectUrl: "",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setRole((prevRole) => {
        const currentIndex = roles.indexOf(prevRole);
        return roles[(currentIndex + 1) % roles.length];
      });
    }, 1000); // Change every 1 second

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  const images = [
    { id: 1, src: "/angular.jpg", alt: "Image 1" },
    { id: 2, src: "/react.jpg", alt: "Image 2" },
    { id: 3, src: "/springboot.jpg", alt: "Image 3" },
    { id: 4, src: "/java.png", alt: "Image 4" },
    { id: 5, src: "/mysql.png", alt: "Image 4" },
    { id: 6, src: "/mongodb.png", alt: "Image 4" },
  ];
  const phoneNumber = "16824067951"; // Your phone number in international format
  const message =
    "Hello, Sanketh! I visited your portfolio and I'd like to chat with you.";
  const whatsAppLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div
      className={`min-h-screen font-poppins transition-colors ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center p-8 mt-20 md:mt-24">
        {/* Left Side: Text */}
        <div className="flex-1 max-w-xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 md:mb-6 text-center">
            Hi I am{" "}
            <span
              style={{ fontFamily: "Arial, sans-serif" }}
              className="text-[#1877f2]"
            >
              S
            </span>{" "}
            {/* Meta Blue */}
            <span className="text-[#333333]">A</span> {/* Apple Dark Gray */}
            <span className="text-[#FF9900]">N</span> {/* Amazon Yellow */}
            <span className="text-[#E50914]">K</span> {/* Netflix Red */}
            <span className="text-[#4285F4]">E</span> {/* Google Blue */}
            <span className="text-[#000000]">T</span> {/* Tesla Dark Gray */}
            <span className="text-[#0096D6]">H</span> {/* HP Blue */}
          </h1>
          <div className="flex justify-center space-x-4 mt-4">
            <Button
              label="Resume"
              className="mt-4 px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300 hidden md:block"
              onClick={() => {
                setShowPDF(true);
                setIsResumeOpen(false);
              }}
            />
            <a
              href="/Resume-sanketh.pdf"
              download="Resume-sanketh.pdf"
              className="mt-4 px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300   md:hidden block"
            >
              <Button
                label={
                  <span className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-5-6l-3 3m0 0l-3-3m3 3V4"
                      />
                    </svg>
                    Resume
                  </span>
                }
              />
            </a>

            <a
              href="https://www.linkedin.com/in/sanketh-bolishetti-01494b1a7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/linkdin.png"
                alt="linkedin"
                className="w-8 h-8 sm:w-10 sm:h-10 mt-4"
              />
            </a>
            <a
              href="https://github.com/sanketh-uta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/github.png"
                alt="github"
                className="w-8 h-8 sm:w-10 sm:h-10 mt-4"
              />
            </a>
            <a
              href="mailto:sankethuta@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/gmail.gif"
                alt="gmail"
                className="w-8 h-8 sm:w-10 sm:h-10 mt-4"
              />
            </a>
          </div>
          <br></br>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 md:mb-6 text-center">
            I am <span className="text-emerald-400">{role}</span>
          </h1>
        </div>
        {showPDF && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-white w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-3/4 p-4 rounded-lg shadow-lg relative">
              <button
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
                onClick={() => {
                  setShowPDF(false);
                  setIsResumeOpen(true);
                }}
              >
                ✕
              </button>
              <iframe
                src="/Resume-sanketh.pdf"
                className="w-full h-full border-none max-w-full max-h-full"
                title="Resume PDF Viewer"
              />
            </div>
          </div>
        )}
        {/* Right Side: Vector Image */}
        <div className="flex-none flex justify-center items-center mt-8 md:mt-0">
          <img
            src={"/vector.jpg"} // Replace with your vector image path
            alt="Vector Image"
            className="w-[100%] sm:w-[300px] md:w-[900px] md:h-[500px] object-contain"
          />
        </div>
        <a
          href={whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 flex items-center space-x-3"
        >
          <span className="bg-white text-black text-sm font-bold px-2 py-1 rounded-md animate-shake">
            Chat with me!
          </span>
          <img
            src="whatsapp.png"
            alt="WhatsApp"
            className="w-12 h-12 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
          />
        </a>
      </div>
      <div
        className="p-8 mt-20 flex flex-col md:flex-row"
        style={{ marginLeft: "auto", marginRight: "auto", width: "100%" }}
      >
        <div id="about" className="flex-1 md:w-1/2 p-8">
          <h6 className="text-xl font-bold">ABOUT ME</h6>
          <h1 className="text-5xl font-bold">Introduction</h1>
          <p className="text-lg mt-4 text-center">
            Hi, I'm{" "}
            <span className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold mb-4">
              Sanketh Bolishetti
            </span>
            , a passionate software developer specializing in JavaScript, React,
            and modern front-end technologies. My journey into coding began with
            a deep curiosity about how software works, leading me to explore
            HTML, CSS, and JavaScript before diving into full-stack development
            with the MERN stack. I find immense satisfaction in solving complex
            problems, optimizing performance, and creating seamless user
            experiences.My approach to development is rooted in writing clean,
            maintainable code and continuously learning emerging technologies to
            build scalable and efficient applications. I thrive in collaborative
            environments, enjoy tackling challenges, and believe that great
            software is built through a combination of technical excellence and
            user-centric design. My goal is to become a well-rounded software
            engineer, mastering both front-end and back-end technologies while
            contributing to impactful projects that make a difference. Outside
            of coding, I love exploring UI/UX design trends, engaging in
            open-source contributions, and mentoring aspiring developers. When
            I'm not immersed in development, you'll often find me exploring new business ideas,
            reading about emerging tech, or reading ancient spiritual texts and exploring the world of spirituality. And also helping people in need.
            With a mindset of continuous growth and
            a passion for building innovative solutions, I am always excited
            about new opportunities to create and collaborate in the
            ever-evolving world of technology.
          </p>
          <br></br>
          <h6 id="skills" className="text-xl font-bold">skills</h6>
          <h1 className="text-4xl font-bold">Technical Skills</h1>
          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-6 p-6">
            {images.map((img) => (
              <motion.div
                key={img.id}
                className="w-24 h-24 bg-[#A0522D] rounded-full shadow-[0px_10px_15px_rgba(0,0,0,0.4)] flex items-center justify-center border-4 border-[#5a3212]"
                animate={{ y: [0, -3, 3, -3, 0] }} // Shaking animation
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          <br></br>
          <div id="education" className="w-full">
            {/* Header */}
            <div className="w-full pl-2  mb-8">
              <h2 className="text-4xl font-bold text-gray-900">Education</h2>
            </div>

            {/* Education List */}
            <div className="max-w-4xl mx-auto p-4 space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg shadow-md shadow-gray-200 hover:shadow-lg transition-shadow"

                >
                  {/* Container that changes layout based on screen size */}
                  <div className="sm:flex sm:gap-4">
                    {/* Logo - Top on mobile, Left side on desktop */}
                    <div className="mb-4 sm:mb-0">
                      <img
                        src={edu.logo}
                        alt={`${edu.school} logo`}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="space-y-2 sm:flex-1">
                      {/* School Name */}
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                        {edu.school}
                      </h3>

                      {/* Degree */}
                      <p className="text-sm sm:text-base text-gray-700 font-medium">
                        {edu.degree}
                      </p>
                      <p className="text-sm sm:text-base text-gray-700 font-medium">
                        GPA - {edu.gpa}
                      </p>

                      {/* Field of Study */}
                      <p className="text-sm sm:text-base text-gray-600">
                        {edu.field}
                      </p>

                      {/* Date Range */}
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm sm:text-base">
                          {edu.startDate} - {edu.endDate}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-600 pt-2">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <br></br>
          <div id="experience" className="w-full">
            {/* Header */}
            <div className="w-full pl-2  mb-8">
              <h2 className="text-4xl font-bold text-gray-900">Experience</h2>
            </div>

            <div className="max-w-4xl mx-auto p-4 space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg shadow-md shadow-gray-200 hover:shadow-lg transition-shadow"

                >
                  {/* Company Logo/Icon */}
                  <div className="sm:flex sm:gap-4">
                    {/* Logo - Top on mobile, Left side on desktop */}
                    <div className="mb-4 sm:mb-0">
                      <img
                        src={exp.logo}
                        alt={`${exp.school} logo`}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover"
                      />
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-gray-700">{exp.company}</p>
                    <div className="flex items-center gap-2 text-gray-600 mt-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {exp.startDate} - {exp.endDate}
                      </span>
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>

                    <p className="mt-3 text-gray-600">{exp.description}</p>

                    {/* Skills */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="mt-2 px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-lg hover:bg-purple-700 transition duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <br></br>
          <div id="projects" className="w-full">
            {/* Header */}
            <div className="w-full pl-2 mb-8">
              <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
            </div>

            <div className="max-w-4xl mx-auto p-4 space-y-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]"
                  style={{
                    boxShadow: "0 4px 14px 0 rgba(124, 58, 237, 0.2)",
                    borderTop: "4px solid rgb(124, 58, 237)",
                  }}
                >
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-6">
                    {/* Project Header */}
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {project.title}
                      </h3>
                      {project.projectUrl.length > 0 && (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Link className="w-5 h-5" />
                        </a>
                      )}
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-gray-600 mt-2">
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-gray-600">{project.description}</p>

                    {/* Collaborators */}
                    {/* {project.collaborators.length > 0 && (
                      <div className="flex items-center gap-2 mt-4 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>Collaborators: </span>
                        <span className="text-gray-900">
                          {project.collaborators.join(", ")}
                        </span>
                      </div>
                    )} */}

                    {/* Skills */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="mt-2 px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-lg hover:bg-purple-700 transition duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
