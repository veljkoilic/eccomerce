import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    changeAmount: (state, action) => {
      if (action.payload.operation == "inc") {
        state.products[action.payload.index].quantity += 1;
        state.total += action.payload.productPrice;
      } else if (action.payload.operation == "dec") {
        if (state.products[action.payload.index].quantity > 1) {
          state.products[action.payload.index].quantity -= 1;
          state.total -= action.payload.productPrice;
        } else {
            state.quantity -= 1;
            state.products.splice(action.payload.index, 1);
            state.total -= action.payload.productPrice;
            console.log(action.payload.price)
            console.log(action.payload.quantity)


        }
      }
    },
  },
});

export const { addProduct, changeAmount } = cartSlice.actions;
export default cartSlice.reducer;
