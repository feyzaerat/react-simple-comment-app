
import axios from "axios";



const axiosInstance = axios.create({


	baseURL: "http://localhost:8080/api",

});


axiosInstance.interceptors.request.use(
	async (config:any) => {
		//store.dispatch(increaseRequestCount())

		

		

		return Promise.resolve(config)

	},

	(error:any) => {

		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
	(response:any) => {
		//store.dispatch(decreaseRequestCount())

		return Promise.resolve(response)
	},
	(error:any) => {
		//store.dispatch(decreaseRequestCount())
		return Promise.reject(error);
	}



);

export default axiosInstance;