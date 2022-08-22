/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { BanksTypes, NominalsTypes, PaymentTypes } from '../../../services/data-types';
import NominalItem from './NominalItem';
import PaymentItem from './PaymentItem';

interface TopUpFormProps {
  nominals: NominalsTypes[];
  payments: PaymentTypes[];
}

export default function TopUpForm(props: TopUpFormProps) {
  const router = useRouter();
  const { nominals, payments } = props;
  const [verifyID, setVerifyID] = useState('');
  const [bankAccountName, setbankAccountName] = useState('');
  const [nominalItem, setNominalItem] = useState({});
  const [paymentItem, setPaymentItem] = useState({});
  const onNominalItemChange = (data: NominalsTypes) => {
    setNominalItem(data);
  };

  const onPaymentItemChange = (payment: PaymentTypes, bank: BanksTypes) => {
    const data = {
      payment,
      bank,
    };
    setPaymentItem(data);
  };

  const onSubmit = () => {
    if (verifyID === '' || bankAccountName === '' || nominalItem === {} || paymentItem === {}) {
      toast.error('Silahkan masuk semua data');
    } else {
      const data = {
        verifyID,
        bankAccountName,
        nominalItem,
        paymentItem,
      };

      localStorage.setItem('data-topup', JSON.stringify(data));
      router.push('/checkout');
    }
  };
  return (
    <>
      <div className="pt-md-50 pt-30">
        <div className="">
          <label htmlFor="ID" className="form-label text-lg fw-medium color-palette-1 mb-10">
            Verify ID
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter your ID"
            value={verifyID}
            onChange={(event) => setVerifyID(event.target.value)}
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
        <div className="row justify-content-between">
          {nominals.map((nominal) => (
            <NominalItem
              onChange={() => onNominalItemChange(nominal)}
              _id={nominal._id}
              coinName={nominal.coinName}
              coinQuantity={nominal.coinQuantity}
              price={nominal.price}
            />
          ))}
          <div className="col-lg-4 col-sm-6" />
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {payments.map((payment) => payment.banks.map((bank) => (
              <PaymentItem
                onChange={() => onPaymentItemChange(payment, bank)}
                bankID={bank._id}
                name={bank.bankName}
                type={payment.type}
              />
            )))}
            <div className="col-lg-4 col-sm-6" />
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <label htmlFor="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Bank Account Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
          value={bankAccountName}
          onChange={(event) => setbankAccountName(event.target.value)}
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <button
          type="button"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
          onClick={onSubmit}
        >
          Continue
        </button>
      </div>
    </>
  );
}
