import React, { useState } from 'react';
import Modal from './Modal';
import { useTransition } from 'react-spring';
import { config } from 'react-spring/renderprops';

const Toggle = ({ modalText, btnText }) => {
  const [toggle, setToggle] = useState(false);
  const transitions = useTransition(toggle, null, {
    config: { ...config.default },
    from: { opacity: 0, bgColor: 'red', y: -6, zIndex: 1 },
    enter: {
      opacity: 1,
      bgColor: 'teal',
      y: 0,
      zIndex: 2,
    },
    leave: { opacity: 0, bgColor: 'red', y: 6, zIndex: 1 },
  });

  const toggleComponent = () => {
    return transitions.map(
      ({ item, key, props }) =>
        item && (
          <div key={key}>
            <Modal
              modalTxt={modalText}
              toggle={toggle}
              setToggle={setToggle}
              {...props}
            />
          </div>
        )
    );
  };
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>{btnText}</button>

      {toggleComponent()}
    </div>
  );
};

export default Toggle;
