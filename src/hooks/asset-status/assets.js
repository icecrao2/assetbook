import { useState } from 'react';
import PropTypes from 'prop-types';

const Assets = ({ init_cash = 0, init_saving = 0, init_invest = 0, init_debt = 0 }) => {

  const [cash, setCash] = useState(init_cash);
  const [saving, setSaving] = useState(init_saving);
  const [investment, setInvestment] = useState(init_invest);
  const [debt, setDebt] = useState(init_debt);

  const handleCash = (value) => {
    setCash(value);
  }
  const handleSaving = (value) => {
    setSaving(value);
  }
  const handleInvestment = (value) => {
    setInvestment(value);
  }
  const handleDebt = (value) => {
    setDebt(value);
  }

  return {
    cash, handleCash, saving, handleSaving, investment, handleInvestment
    , debt, handleDebt
  };
}

Assets.propTypes = {

  init_cash: PropTypes.number,
  init_saving: PropTypes.number,
  init_invest: PropTypes.number,
  init_debt: PropTypes.number,
}


export { Assets };