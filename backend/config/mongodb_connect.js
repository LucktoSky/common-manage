const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;
exports.connect = async () => {
    mongoose.connect(MONGODB_URI)
    .then((conn)=>{
        console.log(`Application connected to MongoDB successfully at https://${conn.connection.host}`)
    })
    .catch(
        (error) => {
            console.log(error.message);
            console.log("DB Connection Failed!");
            process.exit(1);
        }
    )
}