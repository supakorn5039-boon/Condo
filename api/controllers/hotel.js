import Hotel from "../models/Hotel.js";

//Create Hotel 
export const createHotel = async (req,res,next) => {
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (err) {
        next(err)
    }
}

//Update or Change detail in Hotel
export const updateHotel = async (req,res,next) => {
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body},
            { new: true }
            )
        res.status(200).json(updatedHotel)
    }catch(err){
        next(err)
    }
}

//Delete the Hotel w/ ID 
export const deleteHotel = async (req,res,next) => {
    try{
        await Hotel.findByIdAndDelete(
          req.params.id
          )
        res.status(200).json("Hotel has been deleted.")
    }catch(err){
        next(err)
    }
}

//Find The Detail in Hotel By ID
export const getHotel = async (req,res,next) => {
    try{
        const hotel = await Hotel.findById(
            req.params.id
            )
        res.status(200).json(hotel)
    }catch(err){
        next(err)
    }
}

// Find The Detail for all Member in Hotel
export const getHotels = async (req,res,next) => {
    try{
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    }catch(err){
        next(err)
    }
}