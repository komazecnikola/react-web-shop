import React from "react";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <div className="container">
      <div className="legalPage">
        <h1>Privacy Policy</h1>

        <p>
          This Privacy Policy describes how React Web Store ("we", "us", or
          "our") collects, uses, and discloses information collected from users
          ("you" or "your") of our website [website URL] ("the Site") and any
          related services, features, content, or applications we offer
          (collectively, the "Service").
        </p>
        <h2>1. Information We Collect</h2>
        <p>
          1.1. Personal Information: When you use the Service, we may collect
          personal information such as your name, email address, mailing
          address, phone number, and payment information.
        </p>
        <p>
          1.2. Usage Information: We may also collect non-personal information
          about your use of the Service, such as your IP address, browser type,
          device type, and operating system.
        </p>
        <h2>2. How We Use Your Information</h2>
        <p>2.1. We may use the information we collect to:</p>
        <ul>
          <li>Provide, operate, and maintain the Service;</li>
          <li>Communicate with you about your account or the Service;</li>
          <li>Customize and improve the Service;</li>
          <li>Analyze usage of the Service;</li>
          <li>Detect, prevent, and address technical issues; and</li>
          <li>Comply with legal obligations.</li>
        </ul>
        <h2>3. Sharing Your Information</h2>
        <p>
          3.1. We may share your information with third-party service providers
          who assist us in operating our website, conducting our business, or
          servicing you, provided that those parties agree to keep this
          information confidential.
        </p>
        <p>
          3.2. We may also disclose your information to comply with applicable
          laws and regulations, to respond to a subpoena, search warrant, or
          other lawful request for information we receive, or to otherwise
          protect our rights.
        </p>
        <h2>4. Cookies</h2>
        <p>
          4.1. We use cookies and similar tracking technologies to track the
          activity on our Service and hold certain information.
        </p>
        <p>
          4.2. You can instruct your browser to refuse all cookies or to
          indicate when a cookie is being sent. However, if you do not accept
          cookies, you may not be able to use some portions of our Service.
        </p>
        <h2>5. Data Security</h2>
        <p>
          5.1. We take reasonable measures to protect your information from
          unauthorized access, alteration, disclosure, or destruction.
        </p>
        <h2>6. Changes to This Privacy Policy</h2>
        <p>
          6.1. We may update our Privacy Policy from time to time. We will
          notify you of any changes by posting the new Privacy Policy on this
          page.
        </p>
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at <Link to={"/contact-us"}>Contact us</Link>.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
