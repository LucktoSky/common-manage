import {create} from "zustand";
import { SERVER_URL } from './config';
import axios from "axios";
const token = localStorage.getItem("authToken");
const config = {
  headers: { "token": token },
};
export const useCounterStore = create((set,get) => (
   {
    number: 1234,
    userlist:[],
    pagination1:{},
    increaseCounterNumber: () => set((state) => ({number: state.number + 1})),
    decreaseCounterNumber: () => set((state) => ({number: state.number - 1})),
    setNumber: (data) => set({number: data}),
    setUserList: (data) => set({userlist: data}),
    getUserList: async (active,pagesize,search) => {
        axios.post(`${SERVER_URL}/user/getUsers`,{active,pagesize,search},config)
            .then(res => set({pagination1: res.data}))
    }
   }
))