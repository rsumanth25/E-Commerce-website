import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: { items: [], loading: false },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    // your other reducers...
  }
});

// 1. Named exports (for your actions)
export const { setProducts } = productSlice.actions;

// 2. DEFAULT EXPORT (This is what is missing!)
export default productSlice.reducer;