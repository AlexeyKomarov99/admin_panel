import React, {useContext} from 'react';
import axios from 'axios';


const API_URL = 'https://stujo.murukae.ru';

export const GetUserData = async (tokens) => {

    const accessToken = tokens.access;

    try {
        const response = await axios.get(`${API_URL}/api/v1/auth/user-info/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.log('Ошибка получения данных о пользователе', error);
    }
}

export const GetSocials = async (tokens) => {
    
    const accessToken = tokens.access;
    
    try {
        const response = await axios.get(`${API_URL}/api/v1/administration/social-quests/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.log('Ошибка получения списка socials пользователя', error);
    }
}