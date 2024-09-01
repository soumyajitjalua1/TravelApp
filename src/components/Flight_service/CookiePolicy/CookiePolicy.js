import React, { useState } from 'react';
import './CookiePolicy.css'; // Import the corresponding CSS file

const CookiePolicy = () => {
  const [showSettings, setShowSettings] = useState(false);

  const handleAcceptAll = () => {
    alert('All cookies have been enabled.');
    setShowSettings(false);
  };

  const handleSaveSettings = () => {
    alert('Your cookie settings have been saved.');
    setShowSettings(false);
  };

  return (
    <div className="cookie-policy">
      {!showSettings && (
        <div className="cookie-banner">
          <p>
            We use cookies to improve your experience on our website. You can find out more about which cookies we are using or switch them off in settings.
          </p>
          <button className="agree-button" onClick={handleAcceptAll}>Agree and Close</button>
          <button className="settings-button" onClick={() => setShowSettings(true)}>Settings</button>
        </div>
      )}

      {showSettings && (
        <div className="cookie-settings">
          <div className="settings-header">
            <h3>Cookie Settings</h3>
            <button className="close-button" onClick={() => setShowSettings(false)}>X</button>
          </div>
          
          <div className="settings-content">
            <div className="cookie-option">
              <h4>Strictly Necessary Cookies</h4>
              <p>These cookies are necessary for the website to function and cannot be switched off in our systems.</p>
              <label className="switch">
                <input type="checkbox" checked  />
                <span className="slider round"></span>
              </label>
            </div>
            
            <div className="cookie-option">
              <h4>Privacy Overview</h4>
              <p>This website uses cookies to provide you with the best user experience. You can enable or disable cookies in your settings.</p>
              <div className="cookie-actions">
                <button className="enable-all" onClick={handleAcceptAll}>Enable All</button>
                <button className="save-settings" onClick={handleSaveSettings}>Save Settings</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookiePolicy;
