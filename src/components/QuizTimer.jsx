import React, { useState, useEffect } from 'react';
import TimerSec from './TimerSec';

const QuizTimer = () => {
  const [message, setMessage] = useState('');
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const currentMinute = now.getMinutes();
      if (currentMinute === 30) {
        setMessage('Welcome to Quiz Quest! Week 05');
        setTimeout(() => {
          setShowTimer(true);
        }, 3000); 
      } else if (currentMinute ===35 ) {
        setMessage('1st Question');
      } else if (currentMinute === 36) {
        setMessage('2nd Question');
        
      }else if (currentMinute === 37) {
        setMessage('3rd Question');
        
      }else if (currentMinute === 38) {
        setMessage('4th Question');
        
      }else if (currentMinute === 39) {
        setMessage('5th Question');
        
      }else if (currentMinute === 40) {
        setMessage('6th Question');
        
      }
      else if (currentMinute === 41) {
        setMessage('7th Question');
        
      }
      else if (currentMinute === 42) {
        setMessage('8th Question');
        
      }
      else if (currentMinute === 43) {
        setMessage('9th Question');
        
      }
      else if (currentMinute === 44) {
        setMessage('10th Question');
        
      } else if (currentMinute === 0) {
        setMessage('Thank you for attending');
        clearInterval(intervalId); 
      }
    }, 1000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div style={{height:"5%",backgroundColor:"#242526",color:"white",borderBottom:"0.5px solid #555"}} className="mt-0 justify-center items-center text-3xl font-medium leading-tight" >
      <div>{message}</div>
      {showTimer && <TimerSec deadline={new Date(2024, 0, 9, 9, 59, 30)} />}
    </div>
  );
};

export default QuizTimer;
