'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', newData, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(
      'Users',
      {
        [Sequelize.Op.or]: [{ name: 'Seed-ryan' }, { name: 'Seed-rama' }]
      }, {})
  }
};

const newData = [
  {
    "nama": "Seed-ryan",
    "class": "SuperAdmin",
    "email": "seed-ryan@mail.com",
    "password": "$2b$10$Y53voGLfYK9QzGhgl2ne5OpLbuhykJM9BMqu0wxPFwVjZkaFqtL0S", //ryan
    "createdAt": new Date(),
    "updatedAt": new Date()
  },
  {
    "nama": "Seed-rama",
    "class": "SuperAdmin",
    "email": "seed-rama@mail.com",
    "password": "$2b$10$QRWe0lUb.Vwy/p0eAloWnOTqpPlYKskGTls0i3Kip2nZdcEsT.Fcu", //rama
    "createdAt": new Date(),
    "updatedAt": new Date()
  }
]