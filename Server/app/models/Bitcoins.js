var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var Bitcoin = new Schema({
    id:String,
    datasource:String,
    name:String,
    identify:String,
    price:String,
    change:String,
    amount:String,
    url:String
})

module.exports=mongoose.model('Bitcoin',Bitcoin,'Bitcoins');


/* courses

{
    company_id:"SH1001",
    company_name:"国航上海分公司",
    departments:[{name:"飞行部"},{name:"信管部"}],
    address:"xxxxx",
    },



endof courses
*/