export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product,
  });
  
  export const editProduct = (product) => ({
    type: 'EDIT_PRODUCT',
    payload: product,
  });
  
  export const deleteProduct = (productId) => ({
    type: 'DELETE_PRODUCT',
    payload: productId,
  });
  