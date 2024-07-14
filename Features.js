// components/Features.js

import React from 'react';

const Features = () => {
  return (
    <section id="features" className="section features">
      <div className="container">
        <h2>Key Features</h2>
        <div className="feature-item">
          <div className="feature-icon">
            <img src="https://example.com/feature-icon-1.png" alt="Feature 1" />
          </div>
          <div className="feature-text">
            <h3>Advanced Fitness Tracking</h3>
            <p>
              Monitor your daily steps, calories burned, and distance traveled
              accurately. Set personalized fitness goals and track your progress
              over time.
            </p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <img src="https://example.com/feature-icon-2.png" alt="Feature 2" />
          </div>
          <div className="feature-text">
            <h3>Heart Rate Monitoring</h3>
            <p>
              Real-time heart rate monitoring during workouts and throughout the
              day. Receive alerts when your heart rate is outside your
              personalized zones.
            </p>
          </div>
        </div>
        {/* Add more feature items with online image URLs as needed */}
      </div>
    </section>
  );
};

export default Features;
