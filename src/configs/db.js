const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB,process.env.USER,process.env.PASS, {
    dialect: 'mysql',
    host:process.env.HOST,
    logging: false,
    timezone: '+07:00',
    
    
})

sequelize.authenticate().then(() => {
    console.log('Server connected data successfully...');
}).catch((error) => {
    console.log(error);
})

sequelize.sync();
module.exports = sequelize