import React from 'react';
import cn from 'classnames';
import './Button.scss';
import Loader from '../Loader/Loader';
import Text, { TextStyle } from '../Text/Text';

export enum ButtonContext {
  PRIMARY = 'primary',
  SECONDARY_ON_LIGHT = 'secondaryOnLight',
  SECONDARY_ON_DARK = 'secondaryOnDark'
}

export enum ButtonSize {
  SM = 'sm',
  MD = 'md',
  LG = 'lg'
}

export interface ButtonProps {
  textLabel: string;
  type?: 'submit' | 'button';
  size?: ButtonSize;
  dataTest: string;
  className?: string;
  theme?: 'light' | 'dark';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonContext?: ButtonContext;
  isDisabled?: boolean;
  isLoading?: boolean;
}

function Button({
  type,
  size = ButtonSize.MD,
  className,
  dataTest,
  onClick,
  buttonContext = ButtonContext.PRIMARY,
  isDisabled = false,
  textLabel,
  isLoading = false
}: ButtonProps) {
  const appliedClassName = cn('Button', {
    className,
    'Button--context--primary': buttonContext === ButtonContext.PRIMARY,
    'Button--context--secondary-on-light': buttonContext === ButtonContext.SECONDARY_ON_LIGHT,
    'Button--context--secondary-on-dark': buttonContext === ButtonContext.SECONDARY_ON_DARK,
    'Button--size--sm': size === ButtonSize.SM,
    'Button--size--md': size === ButtonSize.MD,
    'Button--size--lg': size === ButtonSize.LG
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
      {textLabel && (
        <Text textStyle={TextStyle.BUTTON} dataTest={'text-label'}>
          {textLabel}
        </Text>
      )}
      <span data-test='text-label'>{textLabel}</span>
      {isShowingLoader && <Loader />}
    </button>
  );
}

export default Button;
