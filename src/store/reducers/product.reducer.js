import { EDIT_PRODUCT, REMOVE_PRODUCT, CREATE_PRODUCT } from '../constants';

export const initialStateProducts = {
  products: [],
};

export function reducerProducts(state, action) {
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case REMOVE_PRODUCT: {
      const idr = action.payload;
      return {
        ...state,
        products: state.products.filter(({ id }) => id !== idr),
      };
    }
    case EDIT_PRODUCT: {
      const cp = action.payload;
      return {
        ...state,
        products: state.products.map((product) => {
          return cp.id === product.id
            ? { ...product, product: cp.product }
            : product;
        }),
      };
    }
    default:
      return state;
  }
}
