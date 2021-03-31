const mongoose = require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb://GoStackTeam:HuJunk10H04ngTh4ngD3p7r41Nh4tH3M47Tr01@45.76.153.75:27017/duong_data?compressors=disabled&gssapiServiceName=mongodb', {
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
