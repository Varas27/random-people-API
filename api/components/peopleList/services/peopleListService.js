const { faker } = require('@faker-js/faker');
const genders = ['male', 'female']

class peopleListService {
    peopleList = [];

    getList = async () => {
        try {
            if (this.peopleList.length <= 0) {
                for (let i = 0; i < 5; i++) {
                    let gender = faker.helpers.arrayElement(genders);
                    let name = faker.name.firstName(gender);
                    let lastName = faker.name.lastName();
                    let pfp = faker.image.imageUrl(500, 500, 'people', true);
                    let email = faker.internet.email(name, lastName);
                    let age = faker.datatype.number({ min: 10, max: 80 });
                    let country = faker.address.country();

                    let person = { gender, name, lastName, pfp, email, age, country };
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
        await this.peopleList.unshift(person);
    }
}

module.exports = new peopleListService();