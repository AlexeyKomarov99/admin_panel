import axios from 'axios';

const API_URL = 'https://stujo.murukae.ru';

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/api/v1/auth/token/`, credentials, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        throw new Error('Ошибка входа:', error);
    }
}

// export const register = async (formData) => {
//     try {
//         const response = await axios.post(`${API_URL}/api/v1/auth/telegram-registartion/`, formData, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         return response.data;

//     } catch (error) {
//         throw new Error('Ошибка регистрации:', error);
//     }
// }

// export const logout = async () => {
//     try {
//         const response = await axios.post(`${API_URL}/api/v1/auth/telegram-logout/`);
//         return response.data;
//     } catch (error) {
//         throw new Error('Ошибка выхода:', error);
//     }
// }