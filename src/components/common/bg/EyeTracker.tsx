'use client';
import { useEffect, useRef } from 'react';

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
  },
  eye: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: '#fff',
    border: '4px solid #000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow:'4px 4px 6px 1px #0005'
  },
  pupil: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: '#000',
    willChange: 'transform',
  },
};

export default function EyeFollower() {
  const eyeRef = useRef(null);
  const pupilRef = useRef(null);

  // current & target positions
  const current = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // @ts-expect-error example
    let animationFrame;
    
    // @ts-expect-error example
    const handleMouseMove = (e) => {
      if (!eyeRef.current) return;
      
      // @ts-expect-error example
      const rect = eyeRef.current?.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const angle = Math.atan2(dy, dx);
      const maxDistance = 18;

      target.current.x = Math.cos(angle) * maxDistance;
      target.current.y = Math.sin(angle) * maxDistance;
    };

    const animate = () => {
      const speed = 0.12; // lower = smoother

      current.current.x +=
        (target.current.x - current.current.x) * speed;
      current.current.y +=
        (target.current.y - current.current.y) * speed;

      if (pupilRef.current) {
        // @ts-expect-error example
        pupilRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      // @ts-expect-error example
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div style={styles.wrapper}>
      <div ref={eyeRef} style={styles?.eye}>
        <div ref={pupilRef} style={styles.pupil} />
      </div>
    </div>
  );
}
