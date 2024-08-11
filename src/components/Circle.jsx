import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Circle.css'; // Import the CSS for styling the Circle

const Circle = () => {
  const CircleRef = useRef(null);
  let timer = useRef(null);

  useEffect(() => {
    const moveCircle = (e) => {
      const Circle = CircleRef.current;
      if (Circle) {
        Circle.classList.add('is-moving');

        gsap.to(Circle, {
          duration: 0.23,
          left: e.pageX,
          top: e.pageY,
          ease: 'power4.out'
        });

        clearTimeout(timer.current);

        timer.current = setTimeout(() => {
          Circle.classList.remove('is-moving');
        }, 300);
      }
    };

    window.addEventListener('mousemove', moveCircle);

    return () => {
      window.removeEventListener('mousemove', moveCircle);
    };
  }, []);

  return <div ref={CircleRef} className="Circle"></div>;
};

export default Circle;
