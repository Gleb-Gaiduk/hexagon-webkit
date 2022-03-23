import React from 'react';
import cn from 'classnames';
import './Heading.scss';

export type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  htmlTag: HeadingTypes;
  styleType: HeadingTypes;
}

function Heading({ htmlTag, children, className, styleType }: HeadingProps) {
  const HeadingLevel = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(htmlTag, props, children);

  return (
    <HeadingLevel
      className={cn('Heading', {
        className,
        'Heading--type--h1': styleType === 'h1',
        'Heading--type--h2': styleType === 'h2',
        'Heading--type--h3': styleType === 'h3',
        'Heading--type--h4': styleType === 'h4',
        'Heading--type--h5': styleType === 'h5',
        'Heading--type--h6': styleType === 'h6'
      })}
    >
      {children}
    </HeadingLevel>
  );
}

export default Heading;
