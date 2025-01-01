import React from 'react';
import '../styles/About.css';
import profilePhoto from '../assets/images/myphoto.jpg';  // Import the image

const About = () => {
  return (
    <section id="about">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <div className="about-content">
        <h2>Who You Are</h2>
        <p>
          Hi, I’m Youssef Orabi! I began my journey in web development and design with a passion for
          creating engaging, interactive user experiences. I love crafting modern websites that
          reflect my creativity and technical expertise.
        </p>
        <p>
          Over the years, I’ve worked on multiple projects, learning new skills and evolving as a developer. 
          Let’s build something amazing together!
        </p>
      </div>
    </section>
  );
};

export default About;
