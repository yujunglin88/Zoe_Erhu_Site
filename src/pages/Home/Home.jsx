import React from "react";
import "./Home.css";

import zoeHero from "../../assests/images/logo.png";
import zoeProfile from "../../assests/images/portrait.jpg";

function Home() {
  return (
    <main className="home-page">

      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero__image">
          <img src={zoeHero} alt="Zoe Li Erhu Studio" />
        </div>

        <div className="home-hero__overlay"></div>

        <div className="home-hero__content">
          <span className="home-eyebrow">
            ZOE LI ERHU STUDIO
          </span>

          <h1>
            Discover the
            <br />
            <span>Voice of the Erhu.</span>
          </h1>

          <p>
            Traditional Chinese music, performance and inspiring
            music education in New Zealand.
          </p>

          <div className="home-hero__buttons">
            <a href="/class" className="home-button home-button--light">
              Explore Classes
              <span>→</span>
            </a>

            <a href="/about" className="home-button home-button--outline">
              Meet Zoe
            </a>
          </div>
        </div>

        <div className="home-hero__scroll">
          <span>SCROLL TO EXPLORE</span>
          <i></i>
        </div>
      </section>


      {/* Introduction */}
      <section className="home-intro">
        <div className="home-container">

          <div className="home-intro__heading">
            <span className="home-eyebrow home-eyebrow--dark">
              MUSIC • EDUCATION • PERFORMANCE
            </span>

            <h2>
              A passion for music,
              <br />
              <em>shared through the erhu.</em>
            </h2>
          </div>

          <div className="home-intro__content">
            <p className="home-intro__lead">
              Zoe Li is a Chinese erhu performer and teacher based
              in Auckland, New Zealand.
            </p>

            <p>
              From her first lessons at six years old to performing
              on international stages, Zoe has built a lifelong
              connection with the erhu. Today, she shares that
              experience with students of all ages and abilities.
            </p>

            <a href="/about" className="home-text-link">
              Discover Zoe's story
              <span>→</span>
            </a>
          </div>

        </div>
      </section>


      {/* Highlights */}
      <section className="home-highlights">
        <div className="home-container">

          <div className="home-highlight">
            <strong>9+</strong>
            <span>Years Teaching</span>
          </div>

          <div className="home-highlight">
            <strong>15+</strong>
            <span>Years Performing</span>
          </div>

          <div className="home-highlight">
            <strong>100%</strong>
            <span>Grade Exam Pass Rate*</span>
          </div>

          <div className="home-highlight">
            <strong>6+</strong>
            <span>Major Awards</span>
          </div>

        </div>
      </section>


      {/* Classes */}
      <section className="home-classes">
        <div className="home-container">

          <div className="home-section-heading">
            <div>
              <span className="home-eyebrow home-eyebrow--dark">
                LEARN WITH ZOE
              </span>

              <h2>
                Your musical journey
                <br />
                <em>starts here.</em>
              </h2>
            </div>

            <p>
              Whether you're completely new to the erhu or working
              towards your next grade, lessons are designed to be
              enjoyable, encouraging and personalised.
            </p>
          </div>

          <div className="home-class-grid">

            <article>
              <span>01</span>
              <h3>Private Lessons</h3>
              <p>
                One-on-one lessons for beginners through to advanced
                students.
              </p>
              <strong>$45 / 30 mins</strong>
            </article>

            <article>
              <span>02</span>
              <h3>Group Lessons</h3>
              <p>
                Learn music together in a supportive and enjoyable
                group environment.
              </p>
              <strong>Contact Zoe</strong>
            </article>

            <article>
              <span>03</span>
              <h3>Grade Exams</h3>
              <p>
                Grade 1–10 preparation with examinations hosted
                twice a year.
              </p>
              <strong>100% Pass Rate*</strong>
            </article>

          </div>

          <div className="home-classes__action">
            <a href="/class" className="home-dark-button">
              View All Classes
              <span>→</span>
            </a>
          </div>

        </div>
      </section>


      {/* Zoe Feature */}
      <section className="home-zoe">
        <div className="home-zoe__image">
          <img
            src={zoeProfile}
            alt="Zoe Li playing the erhu"
          />
        </div>

        <div className="home-zoe__content">
          <span className="home-eyebrow">
            THE ARTIST
          </span>

          <h2>
            From Beijing
            <br />
            <em>to New Zealand.</em>
          </h2>

          <p>
            Zoe's musical journey has taken her from competitions
            and international performances to orchestral stages and
            music education.
          </p>

          <p>
            She has performed at the Beijing Olympic Games, received
            awards in international competitions and performed as an
            erhu soloist with Wellington City Orchestra.
          </p>

          <a href="/about" className="home-light-link">
            Learn more about Zoe
            <span>→</span>
          </a>
        </div>
      </section>


      {/* Quote */}
      <section className="home-quote">
        <div className="home-quote__inner">

          <span className="home-quote__mark">“</span>

          <blockquote>
            Music education can help spark a child's imagination
            or ignite a lifetime of passion.
          </blockquote>

          <cite>— Zoe Li</cite>

        </div>
      </section>


      {/* CTA */}
      <section className="home-cta">
        <span className="home-eyebrow home-eyebrow--dark">
          BEGIN YOUR MUSICAL JOURNEY
        </span>

        <h2>
          Let the music
          <br />
          <em>begin.</em>
        </h2>

        <p>
          Discover the joy of playing the erhu with Zoe.
        </p>

        <div className="home-cta__buttons">
          <a href="/class" className="home-dark-button">
            Explore Classes
            <span>→</span>
          </a>

          <a href="/contact" className="home-outline-button">
            Contact Zoe
          </a>
        </div>
      </section>

    </main>
  );
}

export default Home;