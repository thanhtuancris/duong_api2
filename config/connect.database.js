const mongoose = require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb://GoStackTeam:HuJunk10H04ngTh4ngD3p7r41Nh4tH3M47Tr01@66.42.56.19:27017/duong_data?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        console.log('connected to database');
    }catch(e){
        console.log('failed to connect');
    }
}
module.exports = {connect}