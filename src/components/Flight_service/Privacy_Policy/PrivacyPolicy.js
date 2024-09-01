import React from 'react';
import './PrivacyPolicy.css'; // Import the corresponding CSS file
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <header className="privacy-header">
        <h1>Privacy Policy</h1>
        <p>To learn more about privacy at BookMyTrip, please visit our <a href="/privacy-hub">Privacy Hub</a>.</p>
      </header>
      
      <section className="privacy-content">
        <aside className="table-of-contents">
          <h3>Table of Contents:</h3>
          <ul >
            <div className='privacy-policy-contents'>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#data-we-collect">Data We Collect</a></li>
                <li><a href="#how-we-use-your-data">How We Use Your Data</a></li>
                <li><a href="#how-we-share-information">How We Share Information</a></li>
                <li><a href="#your-choices-obligations">Your Choices & Obligations</a></li>
                <li><a href="#other-important-information">Other Important Information</a></li>
            </div>
          </ul>
        </aside>
        
        <div className="privacy-details">
          <h2 id="introduction">Introduction</h2>
          <p>Welcome to BookMyTrip! Our mission is to make your travel planning easier and more enjoyable. To achieve this, we need to collect some information from you. This policy will help you understand what data we collect, how we use it, and what choices you have.</p>


          {/* Data We Collect */}

            <h2 id="data-we-collect">Data We Collect</h2>
            <p>We may collect the following types of data:</p>
            <div className='data-collection-li'>
                <li><strong>Personal Information:</strong> Name, email address, phone number, payment information, and travel preferences.</li>
                <li><strong>Travel Details:</strong> Destination, travel dates, accommodations, and other travel-related information.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website and services, including your IP address, browser type, and pages visited.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> Information collected through cookies and similar tracking technologies to enhance your experience.</li>
          </div>
          

          {/* How We Use Your Data */}

          <h2 id="how-we-use-your-data">How We Use Your Data</h2>
          <div className='we-use-your-data'>
            <li>Provide and manage our services.</li>
            <li>Process your bookings and payments.</li>
            <li>Send you travel updates, confirmations, and other necessary information.</li>
            <li>Personalize your experience based on your preferences.</li>
            <li>Improve our website, services, and customer support.</li>
          </div>

          {/* How We Share Information */}

          <h2 id="how-we-share-information">How We Share Information</h2>
          <p>You have choices regarding your data:</p>
            <div className='share-information'>
                <li><strong>Service Providers:</strong> We may share your data with third-party service providers to help us deliver our services.</li>
                <li><strong>Legal Compliance:</strong> We may disclose your data if required by law or to protect our rights.</li>
                <li><strong>Business Transfers:</strong> We may share your data in the event of a merger, acquisition, or sale of our company.</li>
                <li><strong>Other Users:</strong> We may share your data with other users of our services, such as when you book a trip with other travelers.</li>
            </div>
          
            {/* Your Choices & Obligations */}

          <h2 id="your-choices-obligations">Your Choices & Obligations</h2>
          <p>You have choices regarding your data:</p>
          <div className='choices-obligations'>
          <li> <strong>Access and Update:</strong> You can access and update your personal information by logging into your account.</li>
          <li><strong>Opt-Out:</strong> You can opt out of receiving promotional communications from us.
          </li>
          <li><strong>Delete:</strong> You can request the deletion of your personal data</li>
          </div>
          
          <h2 id="other-important-information">Other Important Information</h2>
          <p>For more details about our data practices or if you have any questions, please contact us at <Link>Soumyajitjalua@gmail.com</Link></p>

        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
