import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './Store'

const initialState = {
    tileId: 0
}

const BookSlice = createSlice({
    name: 'Book',
    initialState,
    reducers: {
        select: (state, action: PayloadAction<number>) => {
            state.tileId = action.payload
        }
    }
})

export const selectTitle = (state: RootState) => state.Book.tileId

export const { select } = BookSlice.actions
export default BookSlice.reducer