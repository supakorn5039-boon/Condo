import express from "express";
import { countByCity, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/" ,verifyAdmin, createHotel);
//update
router.put("/:id" ,verifyAdmin, updateHotel);
//delete
router.delete("/find/:id" ,verifyAdmin,deleteHotel)
//get
router.get("/:id" ,verifyAdmin, getHotel)
//get all
router.get("/" , getHotels)
router.get("/countByCity" , countByCity)
router.get("/countByType" , getHotels)

export default router