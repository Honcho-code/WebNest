import React from "react";

const ProjectCard = () => {
  const projects = [
    {
      imgSrc: "/images/project-1.jpg",
      title: "Real estate website",
      tags: ["Design", "MVC"],
      projectLink: "https://home-estate-gamma.vercel.app/",
    },
    {
      imgSrc: "/images/project-2.jpg",
      title: "Fullstack bank app",
      tags: ["Development", "SPA"],
      projectLink: "https://bank-app-beryl.vercel.app",
    },
    {
      imgSrc: "/images/project-3.jpg",
      title: "eCommerce website",
      tags: ["Development", "API"],
      projectLink: "https://best-buy-lemon.vercel.app/",
    },
    {
      imgSrc: "/images/project-4.jpg",
      title: "Fullstack music player",
      tags: ["Web-design", "Development"],
      projectLink: "https://spotify-clone-theta-five.vercel.app/",
    },
    {
      imgSrc: "/images/project-5.jpg",
      title: "Portfolio website",
      tags: ["Web-design", "Development"],
      projectLink: "https://rapheal-clinton.vercel.app/",
    },
  ];
  return (
    <div className="mt-5">
      <div className="block md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-100 p-4 mb-4 md:mb-0 rounded cursor-pointer ">
            <a href={project.projectLink} target='_blank'>
            <img src={project.imgSrc} className="rounded mb-3" />
            <h2 className="text-lg md:text-xl font-medium mb-2">
              {project.title}
            </h2>
            <div className="flex items-center justify-between mt-3">
              <div className="flex gap-2">
                {project.tags.map((item, key) => (
                  <div key={key} className="bg-slate-50 p-2">
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <button className="material-symbols-rounded bg-blue-600 p-1 rounded text-white">
                arrow_outward
              </button>
            </div>
            </a>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
