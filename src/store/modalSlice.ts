import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalState } from "../types/types";


const initialState :ModalState = {
    showModal : false,

}

export const modalSlice = createSlice({
    name: "modalSlice",
    initialState,
    reducers:{
        openModal: (state, action: PayloadAction<boolean>) => {
            console.log("addming", action.payload);
            state.showModal = true
          },
        closeModal: (state) => {
         state.showModal = false
        },
        
          
    }

})

export default modalSlice

export const {openModal ,closeModal} = modalSlice.actions