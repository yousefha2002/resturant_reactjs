import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductCart } from "../types/Product";

export type cartState = {
  products: ProductCart[];
  orderWay: string;
  tableId: number | undefined;
};

const initialState: cartState = {
  products: [],
  orderWay: "",
  tableId: undefined,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{ product: Product }>) {
      const product = action.payload.product;
      const foundIndex = state.products.findIndex(
        (pro) => pro.id === product.id
      );
      if (foundIndex === -1) {
        state.products.push({ ...product, qty: 1 });
      } else {
        state.products[foundIndex] = {
          ...product,
          qty: state.products[foundIndex].qty + 1,
        };
      }
    },
    removeFromCart(state, action: PayloadAction<{ id: number }>) {
      state.products = state.products.filter((p) => p.id !== action.payload.id);
    },
    setOrderWay(state, action: PayloadAction<{ way: string }>) {
      state.orderWay = action.payload.way;
    },
    setTableId(state, action: PayloadAction<{ tableId: number }>) {
      state.tableId = action.payload.tableId;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, setOrderWay, setTableId } =
  cartSlice.actions;

export default cartSlice.reducer;
