import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Cursor.css'; // Import the CSS for styling the cursor

const Cursor = () => {
  const cursorRef = useRef(null);
  let timer = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.classList.add('is-moving');

        gsap.to(cursor, {
          duration: 0.23,
          left: e.pageX,
          top: e.pageY,
          ease: 'power4.out'
        });

        clearTimeout(timer.current);

        timer.current = setTimeout(() => {
          cursor.classList.remove('is-moving');
        }, 300);
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return <div ref={cursorRef} className="cursor"></div>;
};

export default Cursor;
