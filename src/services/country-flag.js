import axios from 'axios';

const service = axios.create({
	baseURL: process.env.VUE_APP_FLAG_API_HOST,
	timeout: 2000,
});

const path = 'name/${name}?fullText=true';

const flagService = {
	get: async (countryName) => {
		const retorno = await service.get(path.replace('${name}', countryName));
		
		if(retorno.status !== 200)
			return null;

		const [country] = retorno.data;
		return country.flag;
	},	
};

export default flagService;
