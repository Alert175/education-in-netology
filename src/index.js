import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import AppLessonOne from './Lessons/Lesson1/App';
// import AppLessonTwo from './Lessons/Lesson2/App';
// import AppLessonThree from './Lessons/Lesson3/App';
// import AppLessonFour from './Lessons/Lesson4/App';
// import AppLessonFive from './Lessons/Lesson5/App';
// import AppLessonSix from './Lessons/Lesson6/App';
// import AppLessonSeven from './Lessons/Lesson7/App';
// import AppLessonEight from './Lessons/Lesson8/App';
import AppRouter from './Lessons/Lesson9/Task1/App'

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
