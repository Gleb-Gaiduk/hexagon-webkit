import React from 'react';
import cn from 'classnames';

export enum TextStyle {
  BODY_SMALL = 'body-sm',
  BODY_MEDIUM = 'body-md',
  SUBSCRIPT_SMALL = 'subscript-sm',
  SUBSCRIPT_MEDIUM = 'subscript-md',
  BUTTON = 'button',
  OVERLINE = 'overline'
}

interface TextProps {
  children: React.ReactNode;
  textStyle: TextStyle;
  isCapitalized?: boolean;
  htmlTag?: 'p' | 'span';
  className?: string;
  dataTest: string;
  ariaHidden?: boolean;
  ariaCurrent?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time';
}

function Text({
  children,
  textStyle,
  className,
  dataTest,
  htmlTag = 'p',
  isCapitalized = false,
  ariaHidden = false,
  ariaCurrent = false
}: TextProps) {
  const Tag = ({ ...props }: React.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>) =>
    React.createElement(htmlTag, props, children);

  return (
    <Tag
      className={cn('HexText', {
        className,
        [`HexText--style--${textStyle}`]: textStyle,
        'HexText--capitilized': isCapitalized
      })}
      aria-hidden={ariaHidden}
      aria-current={ariaCurrent}
      data-test={dataTest}
    >
      {children}
    </Tag>
  );
}

export default Text;
