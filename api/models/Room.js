import mongoose from 'mongoose'

//Detail In Room Having 
const RoomSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    maxPeople:{
        type: Number,
        require:true,
    },
    desc:{
        type:String,
        require:true
    },
    roomNumbers:[{number:Number , unavailableDates : [{ type: Date }] }],
  },
  { timestamps: true }
);

// Room Number & Dates
[
    {number:101,unavailableDates:[]},
    {number:102,unavailableDates:[]},
    {number:103,unavailableDates:[]},
    {number:104,unavailableDates:[]},
    {number:105,unavailableDates:[]},
]

export default mongoose.model("Room" , RoomSchema)