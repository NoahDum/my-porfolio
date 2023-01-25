import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplayText(text.substring(0, i));
      i++;
      if (i > text.length) {
        clearInterval(typing);
      }
    }, 50);
    return () => {
      clearInterval(typing);
    };
  }, [text]);
  return <span>{displayText}</span>;
};

export default TypingAnimation;