import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

export enum ButtonContext {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface ButtonProps {
  type?: 'submit' | 'button';
  className?: string;
  dataTest: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonContext?: ButtonContext;
  isDisabled?: boolean;
  textLabel: string;
  // isLoading?: boolean;
}

function Button({
  type,
  className,
  dataTest,
  onClick,
  buttonContext = ButtonContext.SECONDARY,
  isDisabled = false,
  textLabel
}: // isLoading = false
ButtonProps) {
  const appliedClassName = cn(styles.Button, {
    className,
    [styles['Button--context--primary']]: buttonContext === ButtonContext.PRIMARY,
    [styles['Button--context--secondary']]: buttonContext === ButtonContext.SECONDARY
  });

  return (
    <button
      className={appliedClassName}
      data-test={dataTest}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      disabled={isDisabled}
    >
      <span>{textLabel}</span>
    </button>
  );
}

export default Button;
