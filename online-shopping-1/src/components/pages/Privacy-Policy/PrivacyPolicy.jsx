import React from "react";
import "./PrivacyPolicy.css"; // optional

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> January 2026</p>

      <p>
        Welcome to <strong>OnlineShopping</strong>. Your privacy is important to us.
        This Privacy Policy explains how we collect, use, and protect your
        information when you use our website and services.
      </p>

      <hr />

      <h2>1. Information We Collect</h2>

      <h3>a) Personal Information</h3>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number (for OTP verification)</li>
      </ul>

      <h3>b) Usage Data</h3>
      <ul>
        <li>Pages visited</li>
        <li>Login activity</li>
        <li>Browser type and device information</li>
      </ul>

      <hr />

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To create and manage user accounts</li>
        <li>To verify users using Email and OTP</li>
        <li>To provide secure login and authentication</li>
        <li>To improve our website and user experience</li>
        <li>To communicate important updates related to your account</li>
      </ul>

      <hr />

      <h2>3. OTP and Email Verification</h2>
      <ul>
        <li>OTPs are used <strong>only for verification purposes</strong></li>
        <li>OTPs are temporary and expire automatically</li>
        <li>We do <strong>not</strong> share OTPs with third parties</li>
      </ul>

      <hr />

      <h2>4. Data Security</h2>
      <ul>
        <li>Secure authentication methods</li>
        <li>Encrypted communication where applicable</li>
        <li>Restricted access to user data</li>
      </ul>
      <p>
        However, no method of transmission over the Internet is 100% secure.
      </p>

      <hr />

      <h2>5. Cookies</h2>
      <ul>
        <li>Maintain login sessions</li>
        <li>Improve site functionality</li>
      </ul>
      <p>You can disable cookies in your browser settings if you prefer.</p>

      <hr />

      <h2>6. Third-Party Services</h2>
      <ul>
        <li>Email delivery</li>
        <li>Hosting (Netlify, Render)</li>
        <li>Database services</li>
      </ul>
      <p>These services follow their own privacy policies.</p>

      <hr />

      <h2>7. User Rights</h2>
      <ul>
        <li>Access your personal data</li>
        <li>Request correction or deletion of your data</li>
        <li>Stop using the service at any time</li>
      </ul>

      <hr />

      <h2>8. Children’s Information</h2>
      <p>
        Our website is not intended for children under the age of 13.
        We do not knowingly collect personal information from children.
      </p>

      <hr />

      <h2>9. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time.
        Any changes will be posted on this page.
      </p>

      <hr />

      <h2>10. Contact Us</h2>
      <p>
        Email:{" "}
        <a href="mailto:support@onlineshopping.com">
          support@onlineshopping.com
        </a>
      </p>
      <p>
        Website:{" "}
        <a
          href="https://onlineshopping-1-test-email-otp-2.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://onlineshopping-1-test-email-otp-2.netlify.app
        </a>
      </p>

      <hr />

      <p>
        By using our website, you agree to this Privacy Policy.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
