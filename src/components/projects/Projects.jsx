import Section from "../section/Section";
import Project from "./project/Project";
import Icon from "../icons/Icon";
import "./Projects.scss";

const projects = [
  {
    name: "Car-Service-Registry",
    language: "Java",
    description:
      "Backend logic for an enterprise-style car service management system, built on OOP principles and strict typing.",
  },
  {
    name: "Financial-Registry",
    language: "C#",
    description:
      "Backend logic for an enterprise-style financial management system, built on OOP principles and strict typing.",
  },
  {
    name: "Healthy-Pet",
    language: "TypeScript",
    description:
      "Full-stack web application showing a modern client-server architecture and state management.",
  },
  {
    name: "CPP-Practice",
    language: "C++",
    description:
      "Exercises covering core memory management and low-level system concepts.",
  },
];

const Projects = () => {
  return (
    <Section id="projects" path="projects" title="Technical projects" alt>
      <div className="projects">
        {projects.map((project) => (
          <Project projectInfo={project} key={project.name} />
        ))}
      </div>
      <div className="projects-more">
        <a
          className="btn btn-ghost"
          href="https://github.com/MafteiMugurel"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="github" /> More on GitHub
        </a>
      </div>
    </Section>
  );
};

export default Projects;
