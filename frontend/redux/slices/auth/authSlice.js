import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAxiosAuthToken } from '../../utils/util';
import { toast } from 'react-hot-toast';
import { setCookie,getCookie,hasCookie,deleteCookie } from 'cookies-next';
let initToken = null;
// if(typeof window !== 'undefined'){
//     if (localStorage.getItem("token")) {
//         initToken = localStorage.getItem("token");
//         setAxiosAuthToken(initToken);
//     }
// }

if (hasCookie("token")) {
    initToken = getCookie("token");
    setAxiosAuthToken(initToken);
}
const initialState = {
    verifyEmailStatus: "unknown", // new variable in the store
    token: initToken, // add token variable
    user:{
        pk:0,
        username:"",
        email:"",
        first_name:"",
        last_name:"",
        profile:{
            want_location:'',
        }
    }

};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setVerifyEmailStatus(state, action) {
            state.verifyEmailStatus = action.payload;
        },
        setToken(state, action) {
            state.token = action.payload;
            setAxiosAuthToken(state.token);
            if (state.token) {
                setCookie("token", state.token);
                // localStorage.setItem("token", state.token);
            } else {
               deleteCookie("token");
                // localStorage.removeItem("token");
            }
        },
        setUserInfo(state, action) {
            state.user = action.payload;
        },
    },
});

export default authSlice.reducer;
export const {
    setVerifyEmailStatus, // export new function
    setToken,
    setUserInfo, // export new function

} = authSlice.actions;

export const getVerifyEmailStatus = (state) => state.auth.verifyEmailStatus;
export const getToken = (state) => state.auth.token;
export const getUserInfo = (state) => state.auth.user;



export const registerUser =
(username, email, password1, password2) =>
    async (dispatch) => {
        try {
            const url = '/api/auth/register/';
            await axios.post(url, { username, email, password1, password2 });
        } catch (error) {
            console.log(error);
        }
    };




    export const verifyEmail =
    (key) =>
        async (dispatch) => {
            try {
                // set status to started 
                dispatch(setVerifyEmailStatus("started"));

                // send POST request
                const url = "/api/auth/register/verify-email/";
                await axios.post(url, { key });

                // set verify email status to ok
                dispatch(setVerifyEmailStatus("ok"));
            } catch (error) {
                // set status to error
                dispatch(setVerifyEmailStatus("error"));
            }
        };


export const login =
(email, password, router) =>
async (dispatch) => {
    try {

        const url = '/api/auth/login/';
        const { data } = await axios.post(url, { email, password });

        dispatch(setToken(data.key));
        // redirect ...
        router.push('/');

    } catch (error) {
        toast.error("Problem during login. Please try again.");
    }
};






export const fetchUserInfo =
    () =>
        async (dispatch) => {
            try {
                // do a GET request
                const url = '/api/auth/user/';
                const { data } = await axios.get(url);

                // set the user info in the store
                dispatch(setUserInfo(data));

            } catch (error) {
                toast.error("Error occurred when fetching user information");
            }
        };