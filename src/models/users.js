function users(sequelize, datatypes) {
	const users = sequelize.define('users', {
	  firstName: {
	    type: datatypes.STRING
	  },
	  lastName: {
	    type: datatypes.STRING
	  }
	});
	return users;
}

export default users;