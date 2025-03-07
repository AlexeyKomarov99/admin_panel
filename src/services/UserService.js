import React, {useContext} from 'react';
import axios from 'axios';


const API_URL = 'https://stujo.murukae.ru';

export const GetUserData = async (tokens) => {

    console.log('Значения tokens в userService', tokens);

    try {
        const response = await axios.get(`${API_URL}/api/v1/auth/user-info/`, {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokens.access}`,
        });
        return response.data;
    } catch (error) {
        console.log('Ошибка получения данных о пользователе', error);
    }
}