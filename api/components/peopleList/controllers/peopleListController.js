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

    postToList = async (req, res) => {
        try {
            const newPerson = req.body;
            await peopleListService.postToList(newPerson);
            const peopleList = await peopleListService.getList();
            res.json(peopleList);
        }
        catch (err) {
            console.error(err);
        }
    }

    deleteFromList = async (req, res) => {
        try {
            let id = req.params.id;
            await peopleListService.deleteFromList(id)
            const peopleList = await peopleListService.getList();
            res.json(peopleList);
        }
        catch (err) {
            console.error(err);
        }
    }

    putById = async (req, res) => {
        try {
            let id = req.params.id;
            let editedPerson = req.body;
            await peopleListService.putById(id, editedPerson)
            const peopleList = await peopleListService.getList();
            res.json(peopleList);
        }
        catch (err) {
            console.error(err);
        }
    }
}

module.exports = new peopleListController()