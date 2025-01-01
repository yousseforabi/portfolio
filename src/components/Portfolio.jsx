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
          <p>Game Features:

Game Modes:
Classic Quiz – Answer as many questions as possible.
Timed Challenge – Race against the clock to finish.
Sudden Death – One wrong answer ends the game.
Question Types:
Multiple Choice, True/False, and Fill-in-the-Blank.
Levels:
Easy, Medium, Hard.
Scoring System:
Points for speed and accuracy.
Streak bonuses for consecutive correct answers.
Lifelines:
50/50 (Removes two wrong answers).
Skip Question.
Extra Time.
Leaderboards & Achievements
Multiplayer:
Challenge friends in real-time.</p>
        </div>
        <div>
          <img src={typingGame} alt="Project 2" className='project2'/>
          <h3>TYPING GAME</h3>
          <p>Features:
            Modes:

60-second Blitz 
– Type as many words as possible.
Survival 
– Timer extends with each correct word.
Endless 
– Stop after 3 mistakes.

Levels: Easy, Medium, Hard.

Power-ups: Freeze time, Double points, Skip word.

Combos: Bonus for streaks.

Leaderboards & Achievements

Multiplayer: Race or battle mode.

Random Events: Scrambled words, Invisible text.

Scoring: Based on speed, accuracy, and combo streaks.</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
