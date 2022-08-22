/* eslint-disable react/require-default-props */
import React from 'react';

interface ItemProps {
  total: string;
  title: string;
  separation?: boolean;
}

export default function Item(props: ItemProps) {
  const { total, title, separation } = props;
  if (separation) {
    return (
      <>
        <div className="me-lg-35">
          <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{total}</p>
          <p className="text-lg text-lg-start text-center color-palette-2 m-0">{title}</p>
        </div>
        <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
        <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
      </>
    );
  }
  return (
    <div className="me-lg-35">
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{total}</p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">{title}</p>
    </div>
  );
}
