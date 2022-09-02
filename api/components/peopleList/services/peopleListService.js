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
                for (let i = 0; i < 5; i++) {
                    let gender = faker.helpers.arrayElement(genders);
                    let name = faker.name.firstName(gender);
                    let lastName = faker.name.lastName();
                    let pfp = faker.image.imageUrl(500, 500, 'people', true);
                    let email = faker.internet.email(name, lastName);
                    let age = faker.datatype.number({ min: 10, max: 80 });
                    let country = faker.address.country();
                    let id = uuidv4()

                    let person = { gender, name, lastName, pfp, email, age, country, id };
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
        person.id = uuidv4();
        this.peopleList.unshift(person);
    }

    deleteFromList = async (id) => {
        const newList = this.peopleList.filter(person => person.id !== id);
        this.peopleList = newList;
    }
}

module.exports = new peopleListService();