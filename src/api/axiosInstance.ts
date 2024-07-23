import axios from 'axios';

import { URL_API_CG } from '../../constants';

const gameAxiosBase = axios.create({
    baseURL: URL_API_CG,
});

export default { gameAxiosBase };
