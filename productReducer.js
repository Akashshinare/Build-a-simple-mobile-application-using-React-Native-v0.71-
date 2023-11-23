const initialState = {
    products: [],
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PRODUCT':
        return { ...state, products: [...state.products, action.payload] };
      case 'EDIT_PRODUCT':
        return state;
      case 'DELETE_PRODUCT':
        return state;
      default:
        return state;
    }
  };
  
  export default productReducer;
  