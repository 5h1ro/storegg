/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Sub from './sub';

interface SubListProps {
  title: string;
  href?: string;
}

interface MenuProps {
  title: string;
  sublist: SubListProps[];
}

export default function Menu(props: MenuProps) {
  const { title, sublist } = props;

  const list = sublist.map((product) => <Sub subTitle={product.title} href={product.href} />);
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">{list}</ul>
    </div>
  );
}
