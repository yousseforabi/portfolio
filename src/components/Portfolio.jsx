import React from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Work I’ve Done</h2>
      <div>
        <div>
          <img src="path/to/image.jpg" alt="Project 1" />
          <h3>Project 1</h3>
          <p>Description of Project 1.</p>
        </div>
        <div>
          <img src="path/to/image.jpg" alt="Project 2" />
          <h3>Project 2</h3>
          <p>Description of Project 2.</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
