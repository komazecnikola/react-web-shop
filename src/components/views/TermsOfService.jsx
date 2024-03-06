import React from "react";
import { Link } from "react-router-dom";

function TermsOfService() {
  return (
    <div className="container">
      <div className="legalPage">
        <h1>Terms Of Service</h1>
        <p>
          These Terms of Service "Terms" govern your access to and use of React
          Web Shop "the Service". Please read these Terms carefully before using
          the Service.
        </p>
        <p>
          By accessing or using the Service, you agree to be bound by these
          Terms. If you do not agree to all the terms and conditions of this
          agreement, then you may not access the Service.
        </p>
        <h2>1. Use of the Service</h2>
        <p>1.1. You must be at least 18 years old to use the Service.</p>
        <p>
          1.2. You agree to use the Service only for lawful purposes and in
          compliance with all applicable laws and regulations.
        </p>
        <p>
          1.3. You are solely responsible for any content you post, transmit, or
          otherwise make available through the Service.
        </p>
        <h2>2. User Accounts</h2>
        <p>
          2.1. You may be required to create an account to access certain
          features of the Service. You agree to provide accurate, current, and
          complete information during the registration process and to update
          such information to keep it accurate, current, and complete.
        </p>
        <p>
          2.2. You are responsible for maintaining the confidentiality of your
          account credentials and for all activities that occur under your
          account.
        </p>
        <p>
          2.3. You agree to notify us immediately of any unauthorized use of
          your account or any other breach of security.
        </p>
        <h2>3. Intellectual Property</h2>
        <p>
          3.1. The Service and its original content, features, and functionality
          are and will remain the exclusive property of React Web Shop and its
          licensors.
        </p>
        <p>
          3.2. You may not reproduce, distribute, modify, create derivative
          works of, publicly display, publicly perform, republish, download,
          store, or transmit any of the material on our Service, except as
          expressly permitted by these Terms.
        </p>
        <h2>4. Termination</h2>
        <p>
          4.1. We may terminate or suspend your access to the Service
          immediately, without prior notice or liability, for any reason
          whatsoever, including without limitation if you breach the Terms.
        </p>
        <p>
          4.2. Upon termination, your right to use the Service will immediately
          cease. All provisions of these Terms which by their nature should
          survive termination shall survive termination, including, without
          limitation, ownership provisions, warranty disclaimers, indemnity, and
          limitations of liability.
        </p>
        <h2>5. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the
          laws of Serbia, without regard to its conflict of law provisions.
        </p>
        <h2>6. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. If a revision is material, we will try to
          provide at least 30 days' notice prior to any new terms taking effect.
          What constitutes a material change will be determined at our sole
          discretion.
        </p>
        <p>
          By continuing to access or use our Service after those revisions
          become effective, you agree to be bound by the revised terms. If you
          do not agree to the new terms, please stop using the Service.
        </p>
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at{" "}
          <Link to={"/contact-us"}>Contact us</Link>.
        </p>
      </div>
    </div>
  );
}

export default TermsOfService;
