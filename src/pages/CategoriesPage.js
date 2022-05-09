import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CategoriesPage = () => {
  const status = useSelector((state) => state.checkStatus);
  const dispatch = useDispatch();
  const loadCategories = () => {
    dispatch(checkStatus());
  };
  return (
    <div>
      <button type="button" onClick={loadCategories}>
        Check Status
      </button>
      <h1>{status}</h1>
    </div>
  );
};

export default CategoriesPage;
