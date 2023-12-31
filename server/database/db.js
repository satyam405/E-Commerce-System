import mongoose from "mongoose";


export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-gcehfgs-shard-00-00.xgchaq0.mongodb.net:27017,ac-gcehfgs-shard-00-01.xgchaq0.mongodb.net:27017,ac-gcehfgs-shard-00-02.xgchaq0.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-npf1b2-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
       console.log('Database connected successfully');
    } catch (error){
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;