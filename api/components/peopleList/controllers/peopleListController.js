const peopleListService = require('../services/peopleListService');

class peopleListController {
    getList = async (req, res) => {
        try {
            const peopleList = await peopleListService.getList();
            res.json(peopleList);
        }
        catch (err) {
            console.error(err);
        }
    }
}

module.exports = new peopleListController()