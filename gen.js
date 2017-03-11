module.exports = () => {

	const faker = require("faker");
	const lodash = require("lodash");

	return {
		employees: lodash.times(500, (n) => {
			return{
				id: n,
				name: faker.name.findName()
			}
		})
	}
}
