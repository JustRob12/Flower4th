import { useEffect, useState } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const createFlower = () => {
      const size = Math.random() * 20 + 10;
      const left = Math.random() * 100;
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;
      const rotation = Math.random() * 360;
      
      return {
        id: Date.now() + Math.random(),
        size,
        left,
        duration,
        delay,
        rotation
      };
    };

    const interval = setInterval(() => {
      setFlowers(prev => [...prev.slice(-50), createFlower()]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animated-background">
      {flowers.map(flower => (
        <div
          key={flower.id}
          className="flower"
          style={{
            left: `${flower.left}%`,
            width: `${flower.size}px`,
            height: `${flower.size}px`,
            animationDuration: `${flower.duration}s`,
            animationDelay: `${flower.delay}s`,
            transform: `rotate(${flower.rotation}deg)`
          }}
        >
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="center"></div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground; 