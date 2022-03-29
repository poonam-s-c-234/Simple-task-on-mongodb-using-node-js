const dbConnect= require('./mongodb')

const updateData=async ()=>{
    let data = await dbConnect();
    let result = await data.update(
        { description:'Task3'},
        {
            $set:{description:'Task3', completed:'false'}
        }
        )
    console.log(result)

}

updateData();
