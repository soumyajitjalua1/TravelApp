import React from 'react';
import './TermsOfService.css'; // Import the corresponding CSS file

const TermsOfService = () => {
  const handleAccept = () => {
    alert('You have accepted the Terms of Service.');
  };

  const handleDecline = () => {
    alert('You have declined the Terms of Service.');
  };

  return (
    <div className="terms-container">
      <h2 className="terms-header">Terms of Service</h2>
      
      <div className="terms-content">
        <div className="terms-sidebar">
          <ul>
            <li><a href="#account-terms">Account Terms</a></li>
            <li><a href="#payment-access">Payment and Access</a></li>
            <li><a href="#cancellation-termination">Cancellation and Termination</a></li>
            <li><a href="#copyright-ownership">Copyright and Ownership</a></li>
            <li><a href="#general-conditions">General Conditions</a></li>
            <li><a href="#governing-law">Governing Law</a></li>
            <li><a href="#data-processing">Data Processing Addendum</a></li>
            <li><a href="#definitions">Definitions</a></li>
            <li><a href="#confidentiality">Confidentiality</a></li>
          </ul>
        </div>

        <div className="terms-text">
          <h3 id="account-terms">Account Terms</h3>
          <p><strong>Eligibility:</strong> You must be at least 18 years old to use our services.</p>
          <p><strong>Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your account information, including your password. All activities under your account are your responsibility.</p>
          <p><strong>Account Suspension:</strong> We reserve the right to suspend or terminate accounts that violate our policies or terms.</p>

          <h3 id="payment-access">Payment and Access</h3>
          <p><strong>Payment Terms:</strong> All bookings require full payment at the time of booking. Payments are processed securely through our platform.</p>
          <p><strong>Refund Policy:</strong> Refunds are subject to the terms and conditions of the airline or hotel provider. Processing times may vary.</p>
          <p><strong>Currency and Fees:</strong> All fees are listed in USD and may be subject to currency conversion fees by your bank.</p>
          <p><strong>Access:</strong> You are granted a limited, non-exclusive, and revocable access to our services. We reserve the right to terminate access at any time.</p>

          <h3 id="cancellation-termination">Cancellation and Termination</h3>
          <p><strong>Booking Cancellations:</strong> Cancellations are subject to the terms and conditions of the airline or hotel provider. Fees may apply.</p>
          <p><strong>Termination:</strong> We reserve the right to terminate accounts that violate our terms or policies.</p>

          <h3 id="copyright-ownership">Copyright and Ownership</h3>
          <p><strong>Content Ownership:</strong> All content, including text, graphics, and software, is the property of BookMyTrip or its licensors and is protected by copyright laws.</p>
          <p><strong>Usage Restrictions:</strong> You may not use, reproduce, or distribute any content from our website without our written permission.</p>
          <p><strong>License:</strong> You are granted a limited license to access and use our platform for personal use only.</p>

          <h3 id="general-conditions">General Conditions</h3>
          <p><strong>Service Modifications:</strong> We reserve the right to modify or discontinue our services at any time without notice.</p>
          <p><strong>Liability:</strong> We are not liable for any damages or losses resulting from your use of our services.</p>

          <h3 id="governing-law">Governing Law</h3>
          <p><strong>Applicable Law:</strong> These terms are governed by the laws of India.</p>
          <p><strong>Dispute Resolution:</strong> Any disputes arising from these terms will be resolved through arbitration.</p>

          <h3 id="data-processing">Data Processing Addendum</h3>
          <p><strong>Data Processing:</strong> We process your personal data in accordance with our Privacy Policy.</p>
          <p><strong>Data Protection:</strong> We take data protection seriously and implement measures to safeguard your information.</p>
          
          <h3 id="definitions">Definitions</h3>
          <p><strong>"User," "You":</strong> Refers to any individual who uses our services.</p>
          <p><strong>"We," "Our," or "BookMyTrip":</strong> Refers to BookByBook, the company providing the services.</p>

          <h3 id="confidentiality">Confidentiality</h3>
          <p>All information shared between you and BookMyTrip will be kept confidential and will not be disclosed without your consent, except as required by law.</p>
        </div>
      </div>

      <div className="terms-actions">
        <button className="decline-button" onClick={handleDecline}>Decline</button>
        <button className="accept-button" onClick={handleAccept}>Accept</button>
      </div>
    </div>
  );
};

export default TermsOfService;
