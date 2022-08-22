/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { setCheckout } from '../../../services/player';

export default function CheckoutConfirmation() {
  const router = useRouter();
  const [checkbox, setCheckbox] = useState(false);
  const onSubmit = async () => {
    const dataItemLocal = localStorage.getItem('data-item');
    const dataTopUpLocal = localStorage.getItem('data-topup');

    const dataItem = JSON.parse(dataItemLocal!);
    const dataTopup = JSON.parse(dataTopUpLocal!);
    if (!checkbox) {
      toast.error('Pastikan anda telah melakukan pembayaran');
    } else {
      const data = {
        voucher: dataItem._id,
        nominal: dataTopup.nominalItem._id,
        payment: dataTopup.paymentItem.payment._id,
        bank: dataTopup.paymentItem.bank._id,
        name: dataTopup.bankAccountName,
        accountUser: dataTopup.verifyID,
      };

      const response = await setCheckout(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success('Checkout berhasil');
        router.push('/complete-checkout');
      }
    }
  };
  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input type="checkbox" checked={checkbox} onChange={() => setCheckbox(!checkbox)} />
        <span className="checkmark" />
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          role="button"
          onClick={onSubmit}
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
}
