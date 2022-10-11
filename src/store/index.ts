import { moveBelowReducer } from './reducers/moveBelow';
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState : {
    board: string[];
    boardSize: number;
} = {
    board: [],
    boardSize: 8,
}

const candyCrushSlice = createSlice({
    name: "candyCrush",
    initialState,
    reducers: {
        updateBoard: (state, action: PayloadAction<string[]>) => {
            state.board = action.payload
        },
        moveBelow: moveBelowReducer,
    },
})

export const store = configureStore({
    reducer: {
        candyCrush: candyCrushSlice.reducer,
    }
})

export const { updateBoard, moveBelow } = candyCrushSlice.actions

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch