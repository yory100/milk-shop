import { CREATE_PRODUCT, REMOVE_PRODUCT, EDIT_PRODUCT } from '../constants';

export const createProductAction = (product, dispatch) => {
  const payload = {
    product,
  };
  return dispatch({
    payload,
    type: CREATE_PRODUCT,
  });
};

export const removeProducAction = (id, dispatch) => {
  return dispatch({
    payload: id,
    type: REMOVE_PRODUCT,
  });
};

export const editProductAction = (id, product, dispatch) => {
  const payload = {
    id,
    product,
  };
  return dispatch({
    payload,
    type: EDIT_PRODUCT,
  });
};
