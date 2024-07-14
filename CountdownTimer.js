import React, { useState, useEffect } from 'react';

const countdownDate = new Date('2024-12-31').getTime();

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    return {
      days: days,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown">
      <div className="container">
        <h2>Special Offer Ends In</h2>
        <div className="timer">
          <p>{timeLeft.days} days</p>
        </div>
      </div>
    </section>
  );
}

export default CountdownTimer;
