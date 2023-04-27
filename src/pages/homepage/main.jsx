import React from "react";

const Main = () =>{
    return (

        <div>
            <div className="container hero">
        <div className="row align-items-center">
          <div className="col-6 col-xs-12">
            <h3>Take Control of</h3>
            <h1>Your Habits</h1>
            <h3>and Achieve Your Goals with HabitTrackr</h3>
            <p>
              Take control of your habits and reach your goals with HabitTrackr.
              Our powerful habit tracking tools make it easy to track your
              progress, set reminders, and stay motivated. Join the millions of
              people who have already transformed their lives with our app. Sign
              up now and start your journey to success!
            </p>
            <button type="button" className="btn btn-primary">
              Get Started Now
            </button>
          </div>
          <div className="col-6 col-xs-6">
            <img src="./assets/hero_image.png" alt="" />
          </div>
        </div>
      </div>

      <section className="features">
      <div className="container fts">
        <div className="row row-cols-3">
          <div className="card text-center">
            <img
              src="./assets/icon1.svg"
              alt="calendar"
              width="64px"
              className="rounded mx-auto d-block"
            />
            <div className="card-body">
              <h5 className="card-title">Customizable Reminders</h5>
              <p className="card-text">
                Take control of your habits and reach your goals with
                HabitTrackr. Our powerful habit tracking tools make it easy to
                track your progress, set reminders, and stay motivated.
              </p>
            </div>
          </div>
          <div className="card text-center">
            <img
              src="./assets/Icon2.svg"
              alt="chart"
              width="64px"
              className="rounded mx-auto d-block"
            />
            <div className="card-body">
              <h5 className="card-title">Habit Tracking</h5>
              <p className="card-text">
                You can create and track your habits, including setting goals
                and tracking progress towards those goals.
              </p>
            </div>
          </div>
          <div className="card text-center">
            <img
              src="./assets/Icon3.svg"
              alt="reward"
              width="64px"
              className="rounded mx-auto d-block"
            />
            <div className="card-body">
              <h5 className="card-title">Earn Rewards</h5>
              <p className="card-text">
                Complete challenges and earn exciting tokens & rewards as you
                track your habit with HabitTrackr
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="productive">
      <div className="container hero">
        <div className="row align-items-center">
          <div className="col-6">
            <img src={productiveImage} alt="productive" />
          </div>
          <div className="col-6">
            <h3>Be More Productive</h3>
            <p>Are you struggling to stay focused and get things done? Our habit tracker app can help you boost your productivity and get more done each day.<br />&nbsp; <br />With customizable reminders, progress tracking, and a wide range of features, our app makes it easy to develop good habits that will help you be more productive.</p>
            <button type="button" className="btn btn-primary">Get Started Now</button>
          </div>
        </div>
      </div>
    </section>


  
    <section className="testimonials">
      <div className="container hero">
        <div className="row text-center">
          <div className="col">
            <h3>Testimonials</h3>
            <p>What some of our users have to say about HabitTrackr</p>
          </div>
        </div>

        <div className="row row-cols-3">
          <div className="card text-center">
            <img src="./assets/user2.png" alt="calendar" className="rounded mx-auto d-block" />
            <div className="card-body">
              <h5 className="card-title">Julia Stone</h5>
              <p className="card-text">“As a busy mom, it's hard to find time to focus on my own habits and goals. HabitTrackr has been a game-changer for me, because it helps me stay organized and motivated. I love the social features, too - it's great to be able to share my progress and get encouragement from other users. I'm already seeing a big difference in my productivity and overall well-being thanks to HabitTrackr” </p>
            </div>
          </div>
          <div className="card text-center">
            <img src="./assets/user3.png" alt="calendar" className="rounded mx-auto d-block" />
            <div className="card-body">
              <h5 className="card-title">Britney Hasslehoff</h5>
              <p className="card-text">“I've always struggled with sticking to habits, but HabitTrackr has made it so much easier for me. The progress tracking feature is a great way to see my progress over time, and the customizable reminders help me stay on track. The interface is clean and easy to use, too - I'm really happy I found this app!” </p>
            </div>
          </div>
          <div className="card text-center">
            <img src="./assets/user1.png" alt="calendar" className="rounded mx-auto d-block" />
            <div className="card-body">
              <h5 className="card-title">Rian Stanley</h5>
              <p className="card-text">"I've tried so many different habit tracker apps, but HabitTrackr is the only one that has really stuck with me. The customizable reminders and progress tracking features have been a huge help, and the gamification element really makes it fun to use. I've already seen a big improvement in my habits since starting to use the app, and I'm confident I'll be able to reach all my goals with HabitTrackr by my side." </p>
            </div>
          </div>
        </div>
      </div>
    </section>
   </div>
    )}