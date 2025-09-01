"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Pawn to Python: AI Chess",
    description: "Pawn to Python: AI Chess is an advanced chess-playing AI system designed to simulate real-time, strategic decision-making through various search algorithms and neural network optimizations. This project focuses on developing an AI that can play chess by calculating the best moves through sophisticated search techniques.",
    image: "./images/projects/AI-Chess.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Prithviraj03/Chess_AI.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Polls App",
    description: "The Polls App is a dynamic platform designed to create and manage polls, allowing users to vote and track results in real-time. The app integrates Django to manage backend functionalities with a mobile-friendly interface for enhanced user engagement.",
    image: "./images/projects/Polls.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Prithviraj03/Polls-Django.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Gendex: Gender Detection",
    description: "Gendex uses Convolutional Neural Networks (CNN) to perform gender recognition from images with high accuracy. The model is trained on a diverse dataset of 10,000 images, achieving an impressive 95% accuracy. The system can accurately identify gender in real-time scenarios, with a 92% accuracy rate.",
    image: "./images/projects/Gender-Detection.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Prithviraj03/Gender-Detection-using-CNN.git",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "EdgeScope: Real Time Object Detection",
    description: "EdgeScope is an innovative real-time object detection system based on advanced edge detection techniques. By conducting in-depth research on 10 edge detection methods, the project optimized object detection performance, achieving a 15% improvement in accuracy and 20% faster processing speed for both still and real-time images.",
    image: "./images/projects/RTOD.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Prithviraj03/Real-Time-Object-Detection-Using-Different-Edge-Detection-Technique.git",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "SmartFlow",
    description: "This app can help you manage your tasks efficiently. UNDER DEVELOPMENT",
    image: "./images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Prithviraj03/smart-flow",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "./images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
