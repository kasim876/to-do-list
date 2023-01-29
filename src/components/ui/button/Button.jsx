import React, {forwardRef} from 'react';

import styles from './Button.module.scss';

const Button = forwardRef(({children, className, ...props}, ref) => {
  return (
    <button className={`${styles.root}${className ? ` ${className}` : ''}`} ref={ref} {...props}>
      {children}
    </button>
  );
});

export default Button;