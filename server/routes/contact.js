// =====================================================
// Contact form route  -  POST /api/contact
// Sends the enquiry to Zoe's inbox using Resend.
//
// Install:   npm install resend express-rate-limit
// Env vars:  RESEND_API_KEY      (from resend.com > API Keys)
//            CONTACT_TO_EMAIL    (inbox that receives enquiries)
//            CONTACT_FROM_EMAIL  (optional, see note below)
// =====================================================

const express = require("express");
const rateLimit = require("express-rate-limit");
const { Resend } = require("resend");

const router = express.Router();

// Until you verify your own domain in Resend, emails can only be
// sent from onboarding@resend.dev, and only to the email address
// your Resend account was created with. That is fine for receiving
// enquiries in your own inbox.
const DEFAULT_FROM = "Zoe Li Erhu Studio <onboarding@resend.dev>";


// Max 5 enquiries per IP every 15 minutes (stops spam / abuse)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests. Please try again later." },
});

const REASONS = [
  "private lesson",
  "group lesson",
  "grade exams",
  "performance enquiry",
  "something else",
];

const clean = (value, max) =>
  String(value ?? "").trim().slice(0, max);

const isEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);


router.post("/", limiter, async (req, res) => {
  const body = req.body || {};

  // Spam trap: bots fill in the hidden "website" field.
  // Pretend it worked so they don't try again.
  if (body.website) {
    return res.json({ ok: true });
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 40);
  const reason = clean(body.reason, 40);
  const age = clean(body.age, 3);
  const level = clean(body.level, 20);
  const moreInfo = clean(body.moreInfo, 5000);

  if (!name || !isEmail(email) || !moreInfo || !REASONS.includes(reason)) {
    return res.status(400).json({ error: "Please check the form and try again." });
  }

  // Read the settings here (not at the top of the file) so the
  // .env file has always been loaded before they are used.
  const apiKey = process.env.RESEND_API_KEY;
  const TO = process.env.CONTACT_TO_EMAIL;
  const FROM = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM;

  if (!apiKey || !TO) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set");
    return res.status(500).json({ error: "Email is not configured." });
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Reason for enquiry: ${reason}`,
  ];

  if (age || level) {
    lines.push(`Age: ${age || "Not provided"}`);
    lines.push(`Level: ${level || "Not provided"}`);
  }

  lines.push("", "More information:", moreInfo);

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      // Hitting "Reply" in your inbox replies straight to the visitor
      replyTo: email,
      subject: `Website Enquiry - ${reason} (${name})`,
      text: lines.join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ error: "Could not send email." });
    }

    return res.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({ error: "Could not send email." });
  }
});

module.exports = router;