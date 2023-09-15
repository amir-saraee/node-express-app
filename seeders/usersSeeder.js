const bcrypt = require('bcrypt');


module.exports = {
    up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Users', [
        {
          username: 'admin',
          password:  bcrypt.hashSync('adminpassword', 10), // Store the hashed password in the seed data
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'user',
          password: bcrypt.hashSync('userpassword', 10), // Store the hashed password in the seed data
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more default users as needed
      ]);
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Users', null, {});
    },
  };
  