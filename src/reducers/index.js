// A barrel file for our reducers, which will be combined and passed into the Redux store we create;
// The aliases of reducers in this file will be assigned as the names of the keys in the Redux store, with the values being the respective individual reducers;
export { default as allUsers}from "../store/utilities/allUsers";
export { default as user}from "../store/utilities/user";
export {default as allItems}from "../store/utilities/allItems";
export {default as allProducts} from "../store/utilities/allProducts.js";
export {default as product} from "../store/utilities/product.js";
export {default as searchProducts} from "../store/utilities/searchProducts.js";
