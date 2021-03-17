import React from 'react';
import './index.css';
import Icon from '../components/Icons/Icon';
import { animated } from 'react-spring';

const Modal = ({
  modalTxt,
  toggle,
  setToggle,
  bgColor,
  opacity,
  y,
  zIndex,
}) => {
  return (
    <animated.div
      className="ModalWrapper"
      style={{
        opacity: opacity,
        zIndex: zIndex,
      }}
    >
      <animated.div
        className="ModalCard"
        style={{
          backgroundColor: bgColor,
          transform: y.interpolate((y) => {
            return `translate3d(0,${y}rem,0)`;
          }),
        }}
      >
        <h1>{modalTxt}</h1>
        <div className="ModalButton" onClick={() => setToggle(!toggle)}>
          <Icon propsName="close" />
        </div>
      </animated.div>
      <div className="Background" onClick={() => setToggle(!toggle)}></div>
    </animated.div>
  );
};

export default Modal;
