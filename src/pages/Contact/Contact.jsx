import React, { useState, useEffect } from "react";
import "./Contact.css";

import studioLogo from "../../assets/images/logo.png";
import rednoteLogo from "../../assets/icons/rednote.png";
import wechatLogo from "../../assets/icons/wechat.png";
import wechatQr from "../../assets/icons/wechat-qr.png";

// ========================================
// CHANGE YOUR CONTACT DETAILS HERE
// ========================================

// Only shown to visitors if sending fails.
// (The email that actually receives enquiries is set on the server.)
const CONTACT_EMAIL = "yujunglin88@gmail.com";

// Where the form is sent. In development the Vite proxy forwards
// /api to your Express server. In production, if the site and the
// server live at different addresses, set VITE_API_URL in the
// client's .env file (e.g. https://api.yoursite.com).
const CONTACT_API_URL =
  `${import.meta.env.VITE_API_URL || ""}/api/contact`;

// Link to Zoe's RedNote (Xiaohongshu) profile.
// On a phone with the app installed this opens in the RedNote app.
const REDNOTE_URL =
  "https://xhslink.cn/m/1FkjZydmauo";

// Shown at the top of the WeChat pop-up
const WECHAT_ID = "licaiyi1234567";


function Contact() {
  const [reason, setReason] = useState("");
  const [showWechat, setShowWechat] = useState(false);

  // "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");

  // Close the WeChat pop-up with the Escape key,
  // and stop the page scrolling behind it while it is open
  useEffect(() => {
    if (!showWechat) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setShowWechat(false);
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [showWechat]);

  const showLessonFields =
    reason === "private lesson" ||
    reason === "group lesson";


  // ========================================
  // FORM SUBMISSION
  // ========================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      reason,
      age: showLessonFields ? formData.get("age") : "",
      level: showLessonFields ? formData.get("level") : "",
      moreInfo: formData.get("moreInfo"),

      // Hidden spam trap: real visitors never fill this in
      website: formData.get("website"),
    };

    setStatus("sending");

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Request failed (${response.status})`);
      }

      form.reset();
      setReason("");
      setStatus("success");
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };


  return (
    <main className="contact-page">

      {/* =================================
          HERO
      ================================= */}

      <section className="contact-hero">

        <div className="contact-hero__content">

          <span className="contact-eyebrow">
            ZOE LI ERHU STUDIO
          </span>

          <h1>
            Let's make
            <br />
            <em>music together.</em>
          </h1>

          <p>
            Whether you're interested in private lessons, group
            lessons, grade exams, or simply want to learn more,
            Zoe would love to hear from you.
          </p>

        </div>

        <div className="contact-hero__logo">

          <img
            src={studioLogo}
            alt="Zoe Li Erhu Studio"
          />

        </div>

      </section>


      {/* =================================
          CONTACT FORM
      ================================= */}

      <section className="contact-form-section">

        <div className="contact-container">

          <div className="contact-form-heading">

            <div>

              <span className="contact-eyebrow contact-eyebrow--dark">
                GET IN TOUCH
              </span>

              <h2>
                Tell us a little
                <br />
                <em>about yourself.</em>
              </h2>

            </div>

            <p>
              Fill in the form below and let Zoe know what you're
              interested in. This will help us understand how we
              can best help you begin your musical journey.
            </p>

          </div>


          {/* =================================
              FORM
          ================================= */}

          <div className="contact-layout">

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* Name */}

            <div className="contact-form__field">

              <label htmlFor="name">
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />

            </div>


            {/* Email */}

            <div className="contact-form__field">

              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email address"
                required
              />

            </div>


            {/* Phone Number */}

            <div className="contact-form__field">

              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your phone number"
              />

            </div>


            {/* Reason for Enquiry */}

            <div className="contact-form__field">

              <label htmlFor="reason">
                Reason for enquiry
              </label>

              <select
                id="reason"
                name="reason"
                value={reason}
                onChange={(event) =>
                  setReason(event.target.value)
                }
                required
              >

                <option value="" disabled>
                  Please select an option
                </option>

                <option value="private lesson">
                  Private lesson
                </option>

                <option value="group lesson">
                  Group lesson
                </option>

                <option value="grade exams">
                  Grade exams
                </option>

                <option value="performance enquiry">
                  Performance enquiry
                </option>

                <option value="something else">
                  Something else
                </option>

              </select>

            </div>


            {/* =================================
                CONDITIONAL LESSON FIELDS
            ================================= */}

            {showLessonFields && (

              <div className="contact-form__conditional">

                {/* Age */}

                <div className="contact-form__field">

                  <label htmlFor="age">
                    Age
                  </label>

                  <input
                    id="age"
                    name="age"
                    type="number"
                    min="1"
                    max="120"
                    placeholder="Age"
                    required
                  />

                </div>


                {/* Level */}

                <div className="contact-form__field">

                  <label htmlFor="level">
                    Level
                  </label>

                  <select
                    id="level"
                    name="level"
                    defaultValue=""
                    required
                  >

                    <option value="" disabled>
                      Please select a level
                    </option>

                    <option value="beginner">
                      Beginner
                    </option>

                    <option value="intermediate">
                      Intermediate
                    </option>

                    <option value="advanced">
                      Advanced
                    </option>

                    <option value="not sure">
                      Not sure
                    </option>

                  </select>

                </div>

              </div>

            )}


            {/* More Information */}

            <div className="contact-form__field contact-form__field--full">

              <label htmlFor="moreInfo">
                More info
              </label>

              <textarea
                id="moreInfo"
                name="moreInfo"
                rows="8"
                placeholder="Tell Zoe anything else that may be helpful..."
                required
              />

            </div>


            {/* Spam trap - hidden from real visitors */}

            <div className="contact-form__hp" aria-hidden="true">
              <label htmlFor="website">Leave this field empty</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex="-1"
                autoComplete="off"
              />
            </div>


            {/* Submit */}

            <div className="contact-form__submit">

              <button
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Enquiry"}
                <span>→</span>
              </button>

              <p
                className={`contact-form__status contact-form__status--${status}`}
                role="status"
                aria-live="polite"
              >
                {status === "success" &&
                  "Thank you! Your enquiry has been sent and Zoe will be in touch soon."}

                {status === "error" &&
                  `Sorry, something went wrong. Please try again, or email ${CONTACT_EMAIL} directly.`}

                {(status === "idle" || status === "sending") &&
                  "Zoe will reply to the email address you provide."}
              </p>

            </div>

          </form>


          {/* =================================
              OTHER WAYS TO CONTACT
          ================================= */}

          <aside className="contact-aside">

            <span className="contact-eyebrow contact-eyebrow--dark">
              OTHER WAYS TO REACH ZOE
            </span>

            <p className="contact-aside__text">
              Prefer to chat on your favourite app? Message Zoe
              on RedNote or WeChat.
            </p>

            {/* RedNote - opens Zoe's profile / the RedNote app */}

            <a
              href={REDNOTE_URL}
              className="contact-method"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={rednoteLogo}
                alt=""
                className="contact-method__icon"
              />

              <span className="contact-method__text">
                <small>REDNOTE · 小红书</small>
                <strong>Follow Zoe</strong>
              </span>

              <span className="contact-method__arrow">↗</span>
            </a>


            {/* WeChat - opens the QR code pop-up */}

            <button
              type="button"
              className="contact-method"
              onClick={() => setShowWechat(true)}
              aria-haspopup="dialog"
            >
              <img
                src={wechatLogo}
                alt=""
                className="contact-method__icon"
              />

              <span className="contact-method__text">
                <small>WECHAT · 微信</small>
                <strong>Scan QR code</strong>
              </span>

              <span className="contact-method__arrow">→</span>
            </button>

          </aside>

          </div>

        </div>

      </section>


      {/* =================================
          FINAL CTA
      ================================= */}

      <section className="contact-cta">

        <img
          src={studioLogo}
          alt="Zoe Li Erhu Studio"
          className="contact-cta__logo"
        />

        <span className="contact-eyebrow contact-eyebrow--dark">
          ZOE LI ERHU STUDIO
        </span>

        <h2>
          Your story
          <br />
          <em>starts with music.</em>
        </h2>

        <p>
          Discover the joy of playing the erhu with Zoe.
        </p>

      </section>



      {/* =================================
          WECHAT QR CODE POP-UP
      ================================= */}

      {showWechat && (

        <div
          className="contact-modal"
          onClick={() => setShowWechat(false)}
        >

          <div
            className="contact-modal__box"
            role="dialog"
            aria-modal="true"
            aria-labelledby="wechat-title"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              className="contact-modal__close"
              aria-label="Close"
              onClick={() => setShowWechat(false)}
            >
              ×
            </button>

            <span className="contact-eyebrow contact-eyebrow--dark">
              WECHAT · 微信
            </span>

            <h3 id="wechat-title">{WECHAT_ID}</h3>

            <img
              src={wechatQr}
              alt={`WeChat QR code for ${WECHAT_ID}`}
              className="contact-modal__qr"
            />

            <p>Scan the QR code with WeChat to add Zoe.</p>

          </div>

        </div>

      )}

    </main>
  );
}

export default Contact;