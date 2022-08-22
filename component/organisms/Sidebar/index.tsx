/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/alt-text */
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React from 'react';
import Footer from './footer';
import MenuItem from './MenuItem';
import Profile from './profile';

interface SidebarProps {
  activeMenu: 'overview' | 'transactions' | 'settings';
}

export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  const router = useRouter();
  const onLogout = () => {
    Cookies.remove('token');
    router.push('/sign-in');
  };
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="ic-menu-overview"
            active={activeMenu === 'overview'}
            href="/member"
          />
          <MenuItem
            title="Transactions"
            icon="ic-menu-transactions"
            active={activeMenu === 'transactions'}
            href="/member/transactions"
          />
          <MenuItem title="Messages" icon="ic-menu-messages" href="/member" />
          <MenuItem title="Card" icon="ic-menu-card" href="/member" />
          <MenuItem title="Rewards" icon="ic-menu-rewards" href="/member" />
          <MenuItem
            title="Settings"
            icon="ic-menu-settings"
            active={activeMenu === 'settings'}
            href="/member/edit-profile"
          />
          <MenuItem title="Logout" icon="ic-menu-logout" onClick={onLogout} />
        </div>
        <Footer />
      </div>
    </section>
  );
}
