import { dragEndReducer } from './reducers/dragEnd';
import { moveBelowReducer } from './reducers/moveBelow';
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState : {
    board: string[];
    boardSize: number;
    squareBeingDragged: Element | undefined;
    squareBeingReplaced: Element | undefined;
} = {
    board: [],
    boardSize: 8,
    squareBeingDragged: undefined,
    squareBeingReplaced: undefined,
}

const candyCrushSlice = createSlice({
    name: "candyCrush",
    initialState,
    reducers: {
        updateBoard: (state, action: PayloadAction<string[]>) => {
            state.board = action.payload
        },
        dragStart: (state, action:PayloadAction<any>) => {
            state.squareBeingDragged = action.payload
        },
        dragDrop: (state, action: PayloadAction<any>) => {
            state.squareBeingReplaced = action.payload
        },
        dragEnd: dragEndReducer,
        moveBelow: moveBelowReducer,
    },
})

export const store = configureStore({
    reducer: {
        candyCrush: candyCrushSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export const { updateBoard, dragStart, dragDrop, dragEnd, moveBelow } = candyCrushSlice.actions

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch