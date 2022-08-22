/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/alt-text */

import jwtDecode from 'jwt-decode';
import OverviewContent from '../../component/organisms/OverviewContent';
import Sidebar from '../../component/organisms/Sidebar';
import { JWTPayloadTypes, UserTypes } from '../../services/data-types';

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <main className="main-wrapper">
        <OverviewContent />
      </main>
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }
  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userPayload.avatar = `${IMG}/${userPayload.avatar}`;
  return {
    props: {
      user: userPayload,
    },
  };
}
