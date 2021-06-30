export enum productsActionsTypes {
  GET_ALL_PRODUCTS = "[product] GET All Products",
  GET_SELECTED_PRODUCTS = "[product] GET SELECTED Products",
  GET_AVAILABLE_PRODUCTS = "[product] GET AVAILABLE Products",
  SEARCH_PRODUCTS = "[product] GET SEARCH Products",
  NEW_PRODUCTS = "[product] NEW Products",
  SELECT_PRODUCT = "[product] Select Product",
  EDIT_PRODUCT = "[product] Edit Product",
  DELETE_PRODUCT = "[product] Delete Product",

}
export interface ActionEvent {
  type:productsActionsTypes,
  paylaod?:any
}
export enum  DataStateEnum{
  LOADING,
  LOADED,
  ERROR

}
export interface AppDataState<T>{
  datastate?:DataStateEnum,
  data?:T,
  errorMessage?:string
}
