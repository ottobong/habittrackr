import React from 'react'
import './homepage.css'
import logo from './assets/Logo_alt.png';

const Homepage = () => {
  return (
    <div>
      <h1>This is the homepage</h1>
    </div>
  )
}


function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqItems = [
    {
      question: 'What is HabitTrackr?',
      answer:
        'HabitTrackr is a habit tracker app that helps users develop good habits and reach their goals. It typically includes features such as customizable reminders, progress tracking, and a wide range of customization options to help users track and improve their habits. Habit tracker apps can be used for a variety of purposes, such as improving productivity, maintaining a healthy lifestyle, or achieving specific goals. Users can typically create and track multiple habits, set goals, and track their progress over time, and may also have access to additional features such as social features, gamification elements, or integration with other apps or services.',
    },
    {
      question: 'How is HabitTrackr different from other habit tracker apps?',
      answer:
      'What makes HabitTrackr stand out from other habit tracker apps is its unique AI-powered personalized recommendations based on the users goals, habits, and behavior patterns. This feature helps users identify and work on specific areas of improvement, making it easier for them to achieve their desired outcomes. Additionally, HabitTrackr has a user-friendly interface, a wide variety of habit tracking options, and the ability to connect with friends for accountability and support. Overall, HabitTrackr provides a more personalized and effective approach to habit tracking than other apps on the market.'
    },
    {
      question: 'Who is eligible to join HabitTrackr?',
      answer:
      'HabitTrackr is available for anyone who wants to track and improve their habits, regardless of age, gender, or location. As long as you have access to a compatible device and internet connection, you can join HabitTrackr and start tracking your habits today.'
    },
    {
      question: 'Can I use HabitTrackr from anywhere?',
      answer:
      'Yes, HabitTrackr is a web-based application that can be accessed from anywhere as long as you have an internet connection and a compatible web browser. This means you can use it on your desktop, laptop, tablet, or smartphone, and access your habit tracking data from anywhere in the world.'
    },
    {
      question: 'How do I sign up?',
      answer:
      'To sign up for HabitTrackr, go to our website and click on the "Sign Up" button in the top right corner. You will be prompted to enter your email address and choose a password. Once you have entered your information, click on the "Create Account" button. You will receive a confirmation email, and once you have confirmed your email address, you can log in to your account and start using HabitTrackr.'
    },
  ];

  
}

export default Homepage;

