const dbConnect = require('./mongodb');

const deleteData=async ()=>{
let data = await dbConnect();
let result = await data.deleteMany({description:"Task5"})
console.log(result)

}
 
deleteData();