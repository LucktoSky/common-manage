const User = require("./../models/userModel")
const bcryptjs = require("bcryptjs");
async function createUser(req,res){
    try {
        const {name, email, password, endDate} = req.body;

        // Check if Name or/and Email are empty
        if(!(name && email)){
            return res.json({ message: 'Name or/and Email are empty!' });
        }

        // Check if User already exists
        const uniqueUserOrNot = await User.findOne({email});
        if(uniqueUserOrNot){
            return res.json({ message: 'User with same email already exists!' });
        }
        // var pwd;
        // if(name=="admin"){
        //     const salt = await bcryptjs.genSalt(10);
        //     pwd = await bcryptjs.hash(password, salt);
        // }
        // else {
        //     pwd = password
        // }
        // Create and Save User in database
        const newUser = new User({name:name, email:email, password:password, endDate:new Date(endDate)});

        await newUser.save();
        // const allUsers=  await  User.find();
        res.status(201).json
            ({
                success:true,
                message:"User Created Successfully.",
                newUser,
            })
    } catch (error) {
        console.log(error)
        res.status(400).send(`Error Occurred!\n${error}`)
    }
}

async function getUsers(req,res){
    try {
        const options = {
            page: req.body.active,
            limit: req.body.pagesize,
            sort:{createdOn:1}
          };
          var regex = new RegExp(req.body.search);
          const query = {'email':{$regex:regex}};

          User.paginate(query, options, function (err, result) {
            res.json(result);
          });
       
    } catch (error) {
        console.log(error);
        res.status(403).json({
            success:false,
            message:error.message,
        }) 
    }
}
async function editUser(req,res){
    try {
        const {name, email} = req.body;
        if(!(name || email)){
            return res.json({ message: 'Nothing to update! Because both name & email are either empty or were not sent properly!' });
        }
        req.body.endDate = new Date(req.body.endDate);
        const currentUser = await User.findByIdAndUpdate(req.params.id, 
            req.body); // or // {name, email});
        if(!currentUser)
            return res.json({ message: `No user exists with given id=${req.params.id}!` });

        const updatedUser = await User.findById(req.params.id);
        res.status(200).json({
            success:true,
            message:"User data has been updated successfully.",
            updatedUser,
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message: error.message,
        })
    }
    
}

async function deleteUser(req,res){
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if(!deletedUser)
            return res.json({ message: `No user exists with given id=${req.params.id}!` });
        res.status(200).json({
            success:true,
            message:"User data has been deleted successfully.",
            deletedUser,
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message: error.message,
        })
    }
}
module.exports = { createUser, getUsers, editUser, deleteUser};