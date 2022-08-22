/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/anchor-is-valid */

import jwtDecode from 'jwt-decode';
import TransactionDetailContent from '../../../component/organisms/TransactionDetailContent';
import { HistoryTransactionTypes, JWTPayloadTypes, UserTypes } from '../../../services/data-types';
import { getTransactionsDetail } from '../../../services/member';

/* eslint-disable jsx-a11y/alt-text */
interface transactionDetailProps {
  transactionDetail: HistoryTransactionTypes;
}

export default function Detail(props: transactionDetailProps) {
  const { transactionDetail } = props;

  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent data={transactionDetail} />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    idTrx: string;
  };
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { idTrx } = params;
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
  const response = await getTransactionsDetail(idTrx, jwtToken);
  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
