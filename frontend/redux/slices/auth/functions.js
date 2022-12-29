import axios from "axios"

export const register =
    (username, email, password, confirmPassword) =>
        async (dispatch) => {
            try {
                const url = '/api/auth/register/';
                await axios.post(url, { username, email, password, confirmPassword });
            } catch (error) {
                console.log(error);
            }
        };