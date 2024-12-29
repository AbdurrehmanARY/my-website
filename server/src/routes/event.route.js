import express from "express"
import { createEvent, getAllCard } from "../controllers/event.controller.js"


export const eventRouter=express.Router()

eventRouter.post("/create",createEvent)
eventRouter.get("/all",getAllCard)