import React from 'react';
import cn from 'classnames';
import './Button.scss';
import Loader from '../Loader/Loader';

export enum ButtonContext {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export interface ButtonProps {
  textLabel: string;
  type?: 'submit' | 'button';
  dataTest: string;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonContext?: ButtonContext;
  isDisabled?: boolean;
  isLoading?: boolean;
  isRoundCorners?: boolean;
}

function Button({
  type,
  className,
  dataTest,
  onClick,
  buttonContext = ButtonContext.SECONDARY,
  isDisabled = false,
  textLabel,
  isLoading = false,
  isRoundCorners = false
}: ButtonProps) {
  const appliedClassName = cn('Button', {
    className,
    'Button--context--primary': buttonContext === ButtonContext.PRIMARY,
    'Button--context--secondary': buttonContext === ButtonContext.SECONDARY,
    'Button--shape--roundCorners': isRoundCorners
  });

  const isShowingLoader = isLoading && isDisabled;

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <button
      className={appliedClassName}
      data-test={dataTest}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onButtonClick}
      disabled={isDisabled}
    >
      <span data-test='text-label'>{textLabel}</span>
      {isShowingLoader && <Loader />}
    </button>
  );
}

export default Button;
