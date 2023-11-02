import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import Educations from "../../containers/education/Educations";
import { experience } from "../../portfolio.js";
import { projectsHeader, projects, socialMediaLinks } from "../../portfolio.js";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Contact from "../contact/ContactComponent";
import "../projects/Projects.css";
import "../contact/ContactComponent.css";
import { Fade } from "react-reveal";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";
import SocialMedia from "../../components/socialMedia/SocialMedia";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
function Home(props) {
  const styles = style({
    backgroundColor: `${props.theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${props.theme.accentBright}`,
    },
  });
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <ExperienceAccordion sections={experience["sections"]} theme={props.theme} />
      <Educations theme={props.theme} />
          <h1 className="skills-header" style={{ color: props.theme.text }} id="projects">
            Projects
          </h1>
      <div className="repo-cards-div-main">
        {projects.data.map((repo) => {
          return <ProjectCard repo={repo} theme={props.theme} />;
        })}
      </div>

      <div className="contact-main" id="contacts">
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt=""
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: props.theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: props.theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <br />
              <a {...styles} className="general-btn" href={greeting.resumeLink}>
                See my Resume
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
