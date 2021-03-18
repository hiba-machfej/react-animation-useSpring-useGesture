import React, { useState } from 'react';
import { useDrag } from 'react-use-gesture';
import { useSpring, animated, interpolate } from 'react-spring';
import './index.css';

const Drag = () => {
  const [{ x }, set] = useSpring(() => ({
    x: [0],
  }));
  const [message, setMessage] = useState({ text: '', isTrue: false });
  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement }) => {
    set({
      x: down ? movement : [0],
    });
    // console.log(movement[0]);
    if (movement[0] < -200) {
      setMessage({ text: 'Remove card', isTrue: true });
    } else if (movement[0] > 200) {
      setMessage({ text: 'Accept card', isTrue: true });
    }
  });

  return (
    <animated.div
      class="dragWrapper"
      style={{
        background: x.interpolate({
          range: [-300, 300],
          output: ['#fff393', '#61dbfb'],
          extrapolate: 'clamp',
        }),
      }}
    >
      <animated.div
        onMouseUp={message.isTrue && (() => alert(message.text))}
        {...bind()}
        style={{
          opacity: x.interpolate({
            range: [-500, -100],
            output: [0, 1],
            extrapolate: 'clamp',
          }),
          transform: interpolate(
            [
              x.interpolate((xDelta) => xDelta),
              x.interpolate({
                range: [-300, 300],
                output: [-45, 45],
                extrapolate: 'clamp',
              }),
            ],
            (xDelta, x) => `translateX(${xDelta}px) rotate(${x}deg)`
          ),
        }}
        className="dragCard"
      >
        <h1>Drag me</h1>
      </animated.div>
    </animated.div>
  );
};

export default Drag;
