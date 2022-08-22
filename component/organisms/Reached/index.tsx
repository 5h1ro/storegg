/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import Item from './item';

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <Item total="290M+" title="Players Top Up" separation />
          <Item total="12.500" title="Games Available" separation />
          <Item total="99,9%" title="Happy Players" separation />
          <Item total="4.7" title="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
