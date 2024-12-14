const mongoose = require('mongoose');

const mongoDB = async () => {
  try {
    // Connect to the MongoDB database
   await mongoose.connect('mongodb+srv://gofoodapp:gofood@cluster0.ifcaw.mongodb.net/gofoodmern');

    console.log("Connected to MongoDB");

    // Access the "food_items" collection
    const fetched_data = await mongoose.connection.db.collection("constructiondata");

    // Fetch data and convert it to an array
    const data = await fetched_data.find({}).toArray();
    const Category = await mongoose.connection.db.collection("constructionCategory");
    const catData = await Category.find({}).toArray();
    // Assign the fetched data to the global variable
    global.food_items = data;
    global.foodCategory = catData;
    console.log("Data fetched successfully:");
    
    // Optionally, close the database connection if you're done
    // mongoose.connection.close();
    
  } catch (err) {
    console.error("Error in Connection or Fetching Data:", err);
  } 
};

// Call the function to fetch the data



// const mongoDB = async()=>{
//     await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
//         if(err) console.log("---",err)
//         else{
//     console.log("connected");
//     const fetched_data = await mongoose.connection.db.collection("food_items");
//     fetched_data.find({}).toArray(function(err,data){
//         if(err) console.log(err);
//         else{
//             console.log(data);
            
//         }
        
//     })
            
            
//     }
//     })
// };





       
        


module.exports = mongoDB;

