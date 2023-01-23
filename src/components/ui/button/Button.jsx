import React from 'react';

import styles from './Button.module.scss';

const Button = ({children, className, ...props}) => {
  return (
    <button className={`${styles.root}${className ? ` ${className}` : ''}`} {...props}>
      {children}
    </button>
  );
};

export default Button;