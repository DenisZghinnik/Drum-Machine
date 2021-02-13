export const buildAction=<T extends string>(type:T, payload?:any)=>({type, payload});
export type InferActionTypes<T> = T extends {[key: string]: infer U} ? U : never;