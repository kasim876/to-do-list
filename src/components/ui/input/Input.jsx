import React from 'react';
import clsx from 'clsx';

import styles from './Input.module.scss';

const Input = ({className, ...props}) => {
  return (
    <input className={clsx(styles.root, className)} {...props}/>
  );
};

export default Input;