/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { reducerProducts, initialStateProducts } from './reducers';

export const ProductsContext = React.createContext(initialStateProducts);

export function StoreProvider(props) {
  const [stateProducts, dispatchProducts] = React.useReducer(
    reducerProducts,
    initialStateProducts,
  );

  return (
    <ProductsContext.Provider value={[stateProducts, dispatchProducts]}>
      {props.children}
    </ProductsContext.Provider>
  );
}
