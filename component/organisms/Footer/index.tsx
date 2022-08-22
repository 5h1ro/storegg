/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Menu from './menu';

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <Link href="/">
                <a href="" className="mb-30">
                  <Image src="/icon/logo.svg" width={60} height={60} />
                </a>
              </Link>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br />
                {' '}
                untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <Menu
                  title="Company"
                  sublist={[
                    { title: 'About Us' },
                    { title: 'Press Release' },
                    { title: 'Terms of Use' },
                    { title: 'Privacy & Policy' },
                  ]}
                />
                <Menu
                  title="Support"
                  sublist={[
                    { title: 'Refund Policy' },
                    { title: 'Unlock Rewards' },
                    { title: 'Live Chatting' },
                  ]}
                />
                <Menu
                  title="Connect"
                  sublist={[
                    { title: 'hi@store.gg', href: 'mailto: hi@store.gg' },
                    { title: 'team@store.gg', href: 'mailto: team@store.gg' },
                    {
                      title: 'Pasific 12, Jakarta Selatan',
                      href: 'http://maps.google.com/?q=Pasific 12, Jakarta Selatan',
                    },
                    { title: '021 - 1122 - 9090', href: 'tel: 02111229090' },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
