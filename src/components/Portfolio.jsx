import React from 'react';
import '../styles/Portfolio.css';
import quizPhoto from '../assets/images/quiz-game-photo.png';
import typingGame from '../assets/images/typing-game-photo.png';
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Work I’ve Done</h2>
      <div>
        <div>
          <img src={quizPhoto} alt="Project 1" className='project1' />
          <h3>QUIZ GAME</h3>
          <p>Description of Project 1.</p>
        </div>
        <div>
          <img src={typingGame} alt="Project 2" className='project2'/>
          <h3>TYPING GAME</h3>
          <p>Description of Project 2.</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
