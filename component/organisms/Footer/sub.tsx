/* eslint-disable react/require-default-props */
import React from 'react';

interface SubProps {
  subTitle: string;
  href?: string;
}

export default function Sub(props: SubProps) {
  const { subTitle, href } = props;
  return (
    <li className="mb-6">
      <a href={href} className="text-lg color-palette-1 text-decoration-none">
        {subTitle}
      </a>
    </li>
  );
}
