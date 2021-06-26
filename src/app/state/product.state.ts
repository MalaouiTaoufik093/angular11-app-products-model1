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
