import React from 'react';

import {ReactComponent as CheckIcon} from '@assets/images/svg/check.svg';

import styles from './Checkbox.module.scss';

const Checkbox = ({isCompleted, className, ...props}) => {
  return (
    <button
      type="button"
      className={`${styles.root}${isCompleted ? ` ${styles.checked}` : ''}${className ? ` ${className}` : ''}`}
      {...props}
    >
      <CheckIcon className={styles.icon}/>
    </button>
  );
};

export default Checkbox;