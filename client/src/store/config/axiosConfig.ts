import axios, { AxiosError } from 'axios';
import { AxiosMethodType } from '@/lib/interfaces/axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
});

const makeRequest = async (
    url: string,
    method: AxiosMethodType = 'GET',
    data = null
) => {
    try {
        const response = await axiosInstance({
            url,
            method,
            data,
        });
        return {
            status: response.status,
            data: response.data,
        };
    } catch (error) {
        if (error instanceof AxiosError) {
            return {
                status: error.status,
                data: error.message,
            };
        }
        return { status: 500, data: 'Error con el servidor' };
    }
};

export default makeRequest;
