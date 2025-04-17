import axiosInstance from "./axiosInstance";

export const predictorService = {
    getPrediction: async (data) => {
        const response = await axiosInstance.post("/predict",data) ;
        return response.data;
    }
};