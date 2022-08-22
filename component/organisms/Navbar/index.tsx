/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/state-in-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Image from 'next/image';
import React, { Component } from 'react';
import Auth from './auth';
import Menu from './menu';

export default class Navbar extends Component {
  render() {
    return (
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              <Image src="/icon/logo.svg" width={60} height={60} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                <Menu title="Home" active />
                <Menu title="Games" href="/games" />
                <Menu title="Reward" />
                <Menu title="Discover" />
                <Menu title="Global Rank" />
                <Auth />
              </ul>
            </div>
          </div>
        </nav>
      </section>
    );
  }
}
