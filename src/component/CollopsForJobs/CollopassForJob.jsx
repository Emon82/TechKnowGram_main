import React, { useState } from "react";
import "./Collapse.css";

function Collapse() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleCollapse = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const items = [
    {
      title: "Data Analyst",
      text: "Job Title: Data Analyst - 200",
      content:
        "TechKnowGram Limited is looking for Data Analyst for its US Client. Data Anlyst, you will be responsible for Data scrapping, validating and CRM Maintaining.",
      skill: ["Strong experience English understanding (reading and Writing) Skill", "Experience on Online Marketplace", "Strong understanding of Digital marketing and tools","Experience with Team Work","Creative and detail oriented, good at solving problems and deriving solutions","Willing to work in a dynamic environment and keep picking up new technologies / ideas","Strong problem-solving skills and ability to work independently","Strong communication skills and ability to work in a team environment","Education: Bachelor's degree"],
      
    },
    {
      title: "NET Developer",
      text: "Senior Angular Software Engineer -02",
      content:
        "TechKnowGTechKnowGram is looking for a Senior Angular Software Engineer for its US Client to join our team and lead the development of our web applications. The ideal candidate will have a strong background in web development, with a focus on Angular, and experience leading and mentoring other developers. In this role, you will be responsible for designing and developing complex web applications using Angular and collaborating with other developers and stakeholders to ensure the delivery of high-quality productsram Limited is looking for Data Analyst for its US Client. Data Anlyst, you will be responsible for Data scrapping, validating and CRM Maintaining.",
      skill: ["Design and develop complex web applications using Angular",
       "Lead and mentor other developers on the team", 
       "Write clean, maintainable, and efficient code",
       "Collaborate with other developers and stakeholders to deliver high-quality products",
       "Stay up-to-date with the latest developments and trends in web development",
       "Provide technical guidance and support to the team",

       "Strong problem-solving skills and ability to work independently",
       "Strong communication skills and ability to work in a team environment",
       "Education: Bachelor's degree"],
      
    },
    {
      title: "Senior Flutter Developer",
      text: "Job Title: Senior Java Developer - 03",
      content:
        "TechKnowGram is looking for a Sr. JAVA Developer for its JAPANESE Client..",
      skill: ["Strong experience English understanding (reading and Writing) Skill", "Experience on Online Marketplace", "Strong understanding of Digital marketing and tools","Experience with Team Work","Creative and detail oriented, good at solving problems and deriving solutions","Willing to work in a dynamic environment and keep picking up new technologies / ideas","Strong problem-solving skills and ability to work independently","Strong communication skills and ability to work in a team environment","Education: Bachelor's degree"],
      
    },
    {
      title: "Job Opportunity in Japan",
      text: "Job Title: Job Opportunity in Japan",
      content:
        "Are you looking for an opportunity to work in Japan? ",
      skill: ["Are you looking for an opportunity to work in Japan? If so, could you send your RESUME (DOC file only) right away?  Whether you are interested in software development, web design, data analysis, or digital marketing, TechKnowGram has a position for you. Don’t miss this opportunity to work in Japan with TechKnowGram. You will have the chance to work on exciting projects with global clients, learn from experts in your field, and enjoy the benefits of living and working in Japan.Apply now and start your journey to success!jobs.tkgl@gmail.com jobs@techknowgram.com"],
      
    },
  ];

  return (
    <div>
      {items.map(({ title, skill, content, text = "" }, index) => (
        <div key={index}>
          <button
            className="collapse-button"
            onClick={() => toggleCollapse(index)}
          >
            {title}
          </button>
          {openIndex === index && (
            <div className="collapse-content">
              <p>{text}</p>
              <p>{content}</p>
              Skill set:
              {skill.map((item) => (
                <li>{item}</li>
                
              ))}
              <h6>Apply now at:</h6>
              <p>TechKnowGram Limited</p>
              <p >5/9 Block B, Suite B1, Lalmatia, Dhaka 1207, Bangladesh</p>
              <p>Jobs@techknowgram.com</p>
              <p>OR /CC</p>
              <p>Jobs.tkgl@gmail.com</p>
              <p>(Please mention the Job title in Subject Line as Data Analyst)</p>
            </div>
          )}
        </div>
      ))}

    </div>
  );
}

export default Collapse;
