import React, {forwardRef} from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

const Button = forwardRef(({children, className, ...props}, ref) => {
  return (
    <button className={clsx(styles.root, className)} ref={ref} {...props}>
      {children}
    </button>
  );
});

export default Button;