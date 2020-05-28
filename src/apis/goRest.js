import axios from 'axios';

const token = 'fwNQfOPKic4V7uGVvGlmBXzVgePVAPO0jqPS';

export default axios.create({
    baseURL: 'https://gorest.co.in/public-api',
    headers: { Authorization: `Bearer ${token}` }
});