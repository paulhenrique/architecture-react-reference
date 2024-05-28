export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    redeEletrica: import("./features/redeEletricaSlice").RedeEletricaState;
    home: import("./features/home").HomeState;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        redeEletrica: import("./features/redeEletricaSlice").RedeEletricaState;
        home: import("./features/home").HomeState;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
