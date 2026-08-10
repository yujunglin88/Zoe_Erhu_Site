import React from "react";
import "./About.css";

import zoeProfile from "../../assests/images/portrait.jpg";
import zoeHero from "../../assests/images/logo.png";

const achievements = [
  {
    year: "2005",
    title: "Beijing Strings Music Competition",
    text: "Awarded the Silver Award for second place in Beijing's Strings Music Competition.",
  },
  {
    year: "2008",
    title: "Beijing Olympic Games",
    text: 'Invited to perform the erhu at the "Bird\'s Nest" during the closing ceremony of the Beijing Olympic Games.',
  },
  {
    year: "2017",
    title: "World Art Festival",
    text: "Received the Gold Award at the World Art Festival and met former New Zealand Prime Minister John Key.",
  },
  {
    year: "2019",
    title: "Melbourne International Shaoqin Erhu Competition",
    text: 'Received the "Rising Star" award in the Final Round of the Melbourne International Shaoqin Erhu Competition.',
  },
  {
    year: "2021",
    title: "International Music Competitions",
    text: "Awarded first place in both the IMA International Music Competition and the QMC Music Competition.",
  },
  {
    year: "2022",
    title: "Wellington City Orchestra",
    text: "Performed as an erhu soloist with Wellington City Orchestra.",
  },
  {
    year: "2023",
    title: "Kapi-Mana Music Festival",
    text: "Zoe's students achieved first prize at the Kapi-Mana Music Festival.",
  },
];

function About() {
  return (
    <main className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__overlay"></div>

        <div className="about-hero__content">
          <span className="about-eyebrow">
            ERHU PERFORMER & TEACHER
          </span>

          <h1>
            About <span>Zoe</span>
          </h1>

          <p>
            Sharing the beauty of Chinese music through performance,
            education and imagination.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="about-intro">
        <div className="about-container">

          <div className="about-section-heading">
            <span>MY STORY</span>
            <h2>A lifelong passion for music</h2>
          </div>

          <div className="about-intro__grid">

            <div className="about-intro__image">
              <img
                src={zoeProfile}
                alt="Zoe Li playing the erhu"
              />
            </div>

            <div className="about-intro__content">

              <p className="about-lead">
                Zoe Li is a Chinese erhu player and teacher based in
                Auckland, New Zealand.
              </p>

              <p>
                Zoe completed her Bachelor of Music at Wintec, Hamilton,
                in 2019, followed by a Master of Music at Victoria
                University of Wellington in 2021.
              </p>

              <p>
                Throughout her classical career, Zoe has worked with
                numerous quartets, ensembles and orchestras around the
                world, including Beijing String Ensemble, NZ ECPF
                Quartet and Singapore Folk Orchestra.
              </p>

              <p>
                With more than 9 years of teaching experience, Zoe is
                passionate about helping students from age 5 through
                to adults discover the joy of playing the erhu.
              </p>

              <div className="about-stats">

                <div>
                  <strong>9+</strong>
                  <span>Years Teaching</span>
                </div>

                <div>
                  <strong>2</strong>
                  <span>Music Degrees</span>
                </div>

                <div>
                  <strong>6+</strong>
                  <span>Major Awards</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Journey */}
      <section className="about-journey">
        <div className="about-container">

          <div className="about-journey__content">

            <span>THE BEGINNING</span>

            <h2>
              From a six-year-old student to an international performer
            </h2>

            <p>
              Zoe began learning the erhu at the age of six. At 15,
              she began taking private lessons from renowned Chinese
              erhu player Sun Huang.
            </p>

            <p>
              During the same year, she achieved her Grade 10
              examination through C.M.C.A. (Chinese Music Cultural Arts).
            </p>

            <p>
              Her musical journey has since taken her from competitions
              and international performances to orchestral stages and
              music education in New Zealand.
            </p>

          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="about-achievements">

        <div className="about-container">

          <div className="about-section-heading about-section-heading--center">
            <span>MILESTONES</span>
            <h2>Achievements & Performances</h2>
          </div>

          <div className="about-timeline">

            {achievements.map((achievement) => (
              <article
                className="about-timeline__item"
                key={achievement.year}
              >
                <div className="about-timeline__year">
                  {achievement.year}
                </div>

                <div className="about-timeline__dot"></div>

                <div className="about-timeline__card">
                  <h3>{achievement.title}</h3>

                  <p>{achievement.text}</p>
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* Beyond Traditional Music */}
      <section className="about-music">

        <div className="about-container">

          <div className="about-music__grid">

            <div>
              <span>BEYOND TRADITION</span>

              <h2>
                Exploring blues, jazz and contemporary music
              </h2>

              <p>
                Alongside performing traditional Chinese folk music,
                Zoe has developed a love for blues and jazz.
              </p>

              <p>
                She has also performed in the electronica musical
                <em> "Chole and the Ghosts of Electric Souls" </em>
                with renowned musician and composer Jeremy Mayall.
              </p>
            </div>

            <div className="about-music__card">
              <span className="about-music__icon">♫</span>

              <h3>Music Without Boundaries</h3>

              <p>
                Traditional Chinese music meets contemporary sounds,
                creating new opportunities for creativity and expression.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Quote */}
      <section className="about-quote">

        <div className="about-quote__inner">

          <span className="about-quote__mark">“</span>

          <blockquote>
            Music education can help spark a child's imagination or
            ignite a lifetime of passion. When you provide a child
            with new worlds to explore and challenges to tackle,
            the possibilities are endless.
          </blockquote>

          <cite>— Zoe Li</cite>

        </div>

      </section>

      {/* Teaching */}
      <section className="about-teaching">

        <div className="about-container">

          <div className="about-teaching__content">

            <span>MUSIC EDUCATION</span>

            <h2>
              Inspiring creativity through the erhu
            </h2>

            <p>
              Zoe loves to stimulate her students' creativity and
              imagination through the erhu. Whether a student is
              five years old or an adult discovering music later
              in life, her goal is to make learning enjoyable,
              encouraging and inspiring.
            </p>

            <a href="/classes" className="about-button">
              Explore Classes
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;