'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('menus', [{
      categoryId  : 1,
      name        : 'Pempek egg cornet',
      price       : 95000,
      images      : 'https://static.businessinsider.com/image/5432ecc8ecad046666d2a561-750.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryId  : 1,
      name        : 'Tomato Burger of Veggie',
      price       : 80000,
      images      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeKsPxfBzyhNON4iynD2J1SgFULiNt2hU4gd88PQCY9AkZtlT4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryId  : 1,
      name        : 'Grilled Black Chick',
      price       : 80000,
      images      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAn2lYKpuZ2xIqIuC6Y5uvHjduwfPStV7VfrQ64xuJU_S0Dcpo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryId  : 1,
      name        : 'The Rich Salad',
      price       : 99000,
      images      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7GEW9M3ytQKtDdWUILiWQkid11xVWzPFdmDkTYeTtGASzEuGF',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryId  : 1,
      name        : 'Rolled Bacon Satay',
      price       : 199000,
      images      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHfzNhi0vD0z9YoRvFzqoCX3tbHP52PdkJuK6ACxHy6-F91y6KQ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryId  : 1,
      name        : 'ChickTar with Peanuts',
      price       : 159000,
      images      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4ogwdAF3kbo-lZ2NWJPxp26y5Xo7XEq1Bh718zk_avdGcC22vQ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryId  : 2,
      name        : '1 Shot Classy Whiskey',
      price       : 59000,
      images      : 'https://www.medicalnewstoday.com/content//images/articles/320/320669/whiskey-glass.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryId  : 2,
      name        : 'Two Morning Milkshake',
      price       : 88000,
      images      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwROdmsw6CBDcxVj_IMFxBUnm6O6fP3OfafqELmIivkoMfPiy8g',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryId  : 2,
      name        : 'Cola Lime Shot',
      price       : 60000,
      images      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pBCA9ow9JH2qdnK1l91RpxtzlTEKff_mdpu1yhkOoNoz4Oruxw',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryId  : 2,
      name        : 'Absolute Red Lime',
      price       : 30000,
      images      : 'https://images.absolutdrinks.com/drink-images/415x570/43638a5f-a4e2-4072-b0b0-650f618de639.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryId  : 2,
      name        : 'Red CreamPie',
      price       : 30000,
      images      : 'https://www.applebees.com/-/media/applebees/campaigns-2/mai-tai/mai-tai-landing-page-mobile.jpg?la=en&hash=6A46A37AB2FB2C7699D0435E1676E5DFA746EC27',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('menus', null, {});
  }
};
