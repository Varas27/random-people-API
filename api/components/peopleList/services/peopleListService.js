const axios = require('axios');

class peopleListService {
    getList = async () => {
        try {
            const response = await axios.get('https://randomuser.me/api/?page=1&results=2');
            return response.data;
        }
        catch (err) {
            console.error(err);
        }
    };
}

module.exports = new peopleListService();