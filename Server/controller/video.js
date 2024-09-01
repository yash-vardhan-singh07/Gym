const videoModel=require('../models/videoModel');
const ReachModel=require('../models/contactModel')

module.exports.upload = async function upload(req, res) {
    try {
        let data = req.body;
        const videoExists=await videoModel.findOne({ url: data.url });
        if(videoExists){
            return res.status(400).json({message:"Video already exists"});
        }
        let dataObj = req.body;
        let user = await videoModel.create(dataObj);
        if (user) {
           return res.json({
                message: "Data added successfully",
                data: user
            });
        }
        else {
           return res.status(500).json({
                message: "error while uploading"
            });
        }

    }
    catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
}


module.exports.videos=async function videos(req,res){
    try {
        const response=await videoModel.find();
        if(!response){
            res.status(404).json({msg:"no products found"})
            return;
        }
        res.status(200).json({response})
    } catch (error) {
        console.log("products error");
    }
}


module.exports.getAllContacts= async function getAllContacts(req, res) {
    let contacts = await ReachModel.find();
    
    if (contacts) {
        return res.json(contacts);
    }
    else {
        return res.json({
            message: "contacts not found"
        });
    }
}


module.exports.deleteContact=async function deleteContact(req,res){
    let id =req.params.id;
    let contact =await ReachModel.findByIdAndDelete(id);

    res.json({
        message: "contact has been deleted",
        data: contact
    });

    if (!contact) {
        res.json({
            message: 'contact does not exist'
        })
    }
}


module.exports.contactUs=async function contactUs(req,res){
    try {
        let dataObj = req.body;
        let feedback = await ReachModel.create(dataObj);
        console.log(feedback);
        
        if (feedback) {
            res.json({
                message: "Feedback received successfully",
                data: feedback
            });
        }
        else {
            res.json({
                message: "error while contacting"
            });
        }

    } catch (error) {
        res.status(500).json({
            message: console.log(error.message),
        });
    }
}