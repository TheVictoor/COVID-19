import axios from 'axios';

const service = axios.create({
	baseURL: process.env.VUE_APP_COVID_API_HOST,
	timeout: 2000,
});

const path = 'api/countries/${country}';

const countryService = {
	get: async (country) => {
		const retorno = await service.get(path.replace('${country}', country));
		
		if(retorno.status !== 200 && retorno.status !== 304)
			return null;

		const response = retorno.data;

		return {
			confirmed: response.confirmed.value,
			recovered: response.recovered.value,
			deaths: response.deaths.value,
			lastUpdate: response.lastUpdate,
		};
	},	
};

export default countryService;
