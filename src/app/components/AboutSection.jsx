"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li><strong> Programming languages (Backend): </strong> C, C++, Python (Django), Java, Java GUI, MATLAB, R.</li>
        <li><strong> Web development languages (Frontend): </strong>  HTML, CSS, JavaScript </li>
        <li><strong> Data Visualization:</strong>  ggplot2, Tidyverse, Matplotlib.</li>
        <li><strong> Database-related technologies: </strong>  Hadoop, HBase, Apache Hive, Pig, Apache Spark, MongoDB, SQL, NoSQL.</li>
        <li><strong> Machine Learning:</strong>  Scikit-learn, TensorFlow, Keras, PyTorch.</li>
        <li><strong> Cloud Technologies:</strong>  Azure, Cloud Data, Cloud Networking, Cloud Security, Cloud Services, Cloud Storage, Virtualization.</li>
        <li><strong> Operating systems: </strong>  Linux, Windows. </li>  
        <li><strong> Software known: </strong> MATLAB, Tanner Spice, Proteus, XAMPP, NI Multisim, Arduino, Cameo, Excel.</li> 
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li><strong> Master's Degree (MS) in Computer Science: </strong> Missouri University of Science and Technology, Rolla, Missouri </li>
        <li><strong> Bachlore's Degree (BE) in Electronics Engineering: </strong> University of Mumbai, Maharashtra, India </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Microsoft Azure</li>
      </ul>
    ),
  },
  {
    title: "Publications",
    id: "publications",
    content: (
      <ul className="list-disc pl-2">
        <li><a href = "/../../../Papers/Real-Time Object Detection Using Different Edge Detection Technique.pdf"> Real-Time Object Detection Using Different Edge Detection Techniques <br /> (Click Here)  </a> </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-top py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="./images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("publications")}
              active={tab === "publications"}
            >
              {" "}
              Publications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
