const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid');
const genders = ['male', 'female']
class peopleListService {
    peopleList = [];
    firstTime = true;

    getList = async () => {
        try {
            if (this.firstTime) {
                this.firstTime = false;
                for (let i = 0; i < 48; i++) {
                    let gender = faker.helpers.arrayElement(genders);
                    let name = faker.name.firstName(gender);
                    let lastName = faker.name.lastName();
                    let pfp = faker.image.imageUrl(500, 500, 'people', true);
                    let email = faker.internet.email(name, lastName);
                    let age = faker.datatype.number({ min: 10, max: 80 });
                    let country = faker.address.country();
                    let origin = 'default';
                    let id = uuidv4();

                    let person = { gender, name, lastName, pfp, email, age, country, origin, id };
                    this.peopleList.push(person);
                }
            }
            return this.peopleList;
        }
        catch (err) {
            console.error(err);
        }
    };

    postToList = async (person) => {
        try {
            person.origin = 'created';
            person.id = uuidv4();
            this.peopleList.unshift(person);
        }
        catch (err) {
            console.error(err);
        }
    }

    deleteFromList = async (id) => {
        try {
            const newList = this.peopleList.filter(person => person.id !== id);
            this.peopleList = newList;
        }
        catch (err) {
            console.error(err);
        }
    }

    putById = async (id, editedPerson) => {
        try {
            let index = this.peopleList.findIndex((person => person.id === id));
            this.peopleList[index] = editedPerson;
        }
        catch (err) {
            console.error(err);
        }
    }
}

module.exports = new peopleListService();