import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    allDesserts: [],
    ordered:[],
    orderTotal:0,
    totalProducts:0
}

export const dessertSlice = createSlice({
    name:'dessert',
    initialState,
    reducers:{
        addAllDesserts:(state, {payload})=>{
            state.allDesserts = payload
        },
       
        incrementOrder:(state, {payload})=>{
            const item = state.allDesserts.find((dessert)=> dessert.id == payload)
            if(!item.amount){
                item.amount = 1
            }else{
                item.amount += 1
            }
            dessertSlice.caseReducers.calculateTotal(state)
        },
        decrementOrder:(state, {payload})=>{
            const item = state.allDesserts.find((dessert)=> dessert.id == payload)
            item.amount -= 1
            dessertSlice.caseReducers.calculateTotal(state)

            
        },
        deleteOrder: (state, { payload }) => {
            const item = state.allDesserts.find((dessert) => dessert.id === payload);
            if (item) {
                item.amount = 0;
            }
            dessertSlice.caseReducers.calculateTotal(state)
        },
        clearOreder:(state)=>{},
        calculateTotal:(state)=>{
            state.ordered = state.allDesserts.filter((dessert) => dessert.amount);

            let allOrderedAmount = 0
            let allOrderPrice = 0
            state.ordered.forEach((item)=>{
                allOrderedAmount += item.amount
                allOrderPrice += item.amount * item.price
            })

            state.orderTotal = allOrderedAmount
            state.totalProducts = allOrderPrice
            
        }
    }
})

export const {incrementOrder, decrementOrder, deleteOrder, clearOreder, addAllDesserts} = dessertSlice.actions


export default dessertSlice.reducer