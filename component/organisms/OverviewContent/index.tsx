/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { HistoryTransactionTypes, TopupCategoriesTypes } from '../../../services/data-types';
import { getMemberOverview } from '../../../services/member';
import Category from './Category';
import TableRow from './TableRow';

export default function OverviewContent() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState([]);
  useEffect(() => {
    getMember();
  }, []);

  const getMember = useCallback(async () => {
    const response = await getMemberOverview();
    if (response.error) {
      toast.error(response.message);
    } else {
      setCount(response.data.count);
      setData(response.data.data);
    }
  }, []);

  const IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <div className="ps-lg-0">
      <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
      <div className="top-up-categories mb-30">
        <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
        <div className="main-content">
          <div className="row">
            {count.map((item: TopupCategoriesTypes) => (
              <Category key={item._id} icon="ic-desktop" nominal={item.value}>
                {item.name}
              </Category>
            ))}
          </div>
        </div>
      </div>
      <div className="latest-transaction">
        <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
        <div className="main-content main-content-table overflow-auto">
          <table className="table table-borderless">
            <thead>
              <tr className="color-palette-1">
                <th className="text-start" scope="col">
                  Game
                </th>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item: HistoryTransactionTypes) => (
                <TableRow
                  key={item._id}
                  title={item.historyVoucherTopup.gameName}
                  item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
                  category={item.historyVoucherTopup.category}
                  status={item.status}
                  price={item.value}
                  image={`${IMG}/${item.historyVoucherTopup.thumbnail}`}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}