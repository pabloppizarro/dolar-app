//aca es donde instanciamos el store global de nuestra app
import { configureStore } from "@reduxjs/toolkit";
import { selectedUsdSlice } from "./stores/usdSelectedSlice";
//importamos nuestras entidades slice al core store
const store = configureStore({
  reducer: {
    selectedUsdSlice,
  },
});

export default store;
