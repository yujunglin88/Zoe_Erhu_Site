import React from "react";
import "./Class.css";

const classes = [
  {
    number: "01",
    title: "Private Lesson",
    description:
      "Personalised one-on-one tuition designed to help each student develop at their own pace.",
    details: [
      "$45 / 30 mins, once a week",
      "One on one tuition with Zoe, catered to your goals and experience",
      "Teaches from beginner to advanced, all levels and ages welcomed",
    ],
  },
  {
    number: "02",
    title: "Group Lesson",
    description:
      "Learn and enjoy music together in a supportive group environment.",
    details: [
      "Small group sessions",
      "Suitable for different levels",
      "Contact Zoe for available group lessons",
    ],
  },
  {
    number: "03",
    title: "Grade Exams",
    description:
      "Structured preparation for recognised Chinese traditional music grade examinations.",
    details: [
      "Grade 1 – 10",
      "Hosted twice a year",
      "100% pass rate over the past 8 years",
    ],
  },
];

const Class = () => {
  return (
    <main className="classes-page">
      {/* Hero */}
      <section className="classes-hero">
        <div className="classes-hero__content">
          <span className="eyebrow">LEARN • GROW • PERFORM</span>

          <h1>
            Find Your
            <span> Rhythm.</span>
          </h1>

          <p>
            Whether you are taking your first steps in music or preparing for
            your next grade exam, Zoe offers lessons tailored to your goals
            and experience.
          </p>
        </div>

        <div className="classes-hero__decoration">
          <span className="music-note music-note--one">♪</span>
          <span className="music-note music-note--two">♫</span>
          <span className="music-note music-note--three">♪</span>
        </div>
      </section>

      {/* Classes */}
      <section className="classes-list">
        <div className="section-heading">
          <span className="eyebrow">LESSONS & PROGRAMS</span>
          <h2>Classes for every stage.</h2>
        </div>

        <div className="class-grid">
          {classes.map((item) => (
            <article className="class-card" key={item.number}>
              <div className="class-card__top">
                <span className="class-card__number">{item.number}</span>
                <span className="class-card__line" />
              </div>

              <h3>{item.title}</h3>

              <p className="class-card__description">
                {item.description}
              </p>

              <ul className="class-card__details">
                {item.details.map((detail) => (
                  <li key={detail}>
                    <span className="detail-dot" />
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Grade Exam Highlight */}
      <section className="exam-section">
        <div className="exam-section__content">
          <span className="eyebrow">GRADE EXAMINATION</span>

          <h2>
            Eight years.
            <br />
            <span>100% pass rate.</span>
          </h2>

          <p>
            Grade 1–10 examinations are hosted twice a year and provided by
            CNOS — China Nationalities Orchestra Society
            (中國民族管弦樂學會考級).
          </p>

          <p>
            With Zoe's teaching, students have achieved a 100% pass rate over
            the past eight years.
          </p>
        </div>

        <div className="exam-badge">
          <strong>100%</strong>
          <span>PASS RATE</span>
          <small>PAST 8 YEARS</small>
        </div>
      </section>

      {/* CTA */}
      <section className="classes-cta">
        <span className="eyebrow">READY TO START?</span>

        <h2>Let's make music together.</h2>

        <p>
          Get in touch with Zoe to find the right lesson for you.
        </p>

        <a href="/contact" className="classes-cta__button">
          Contact Zoe
          <span>→</span>
        </a>
      </section>
    </main>
  );
};

export default Class;