import React from 'react';

import styles from './Input.module.scss';

const Input = ({className, ...props}) => {
  return (
    <input className={`${styles.root}${className ? ` ${className}` : ''}`} {...props}/>
  );
};

export default Input;