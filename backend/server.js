import express from "express"
import dotenv from "dotenv"
import { randomUUID } from "node:crypto"

dotenv.config()

const app = express()
const bookings = []

app.use(express.json())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.CORS_ORIGIN ?? "*")
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")

  if (req.method === "OPTIONS") {
    return res.sendStatus(204)
  }

  next()
})

const port = process.env.PORT || 5000

app.get("/api/health", (_req, res) => {
  res.json({ ok: true })
})

app.get("/api/bookings", (_req, res) => {
  res.json({ bookings })
})

app.post("/api/bookings", (req, res) => {
  const {
    checkInDate,
    checkOutDate,
    guests,
    firstName,
    lastName,
    phoneNumber,
    specialRequest,
  } = req.body ?? {}

  const missingFields = []

  if (!checkInDate) missingFields.push("checkInDate")
  if (!checkOutDate) missingFields.push("checkOutDate")
  if (!guests) missingFields.push("guests")
  if (!firstName) missingFields.push("firstName")
  if (!lastName) missingFields.push("lastName")
  if (!phoneNumber) missingFields.push("phoneNumber")

  if (missingFields.length > 0) {
    return res.status(400).json({
      message: "Missing required booking fields.",
      missingFields,
    })
  }

  const checkIn = new Date(checkInDate)
  const checkOut = new Date(checkOutDate)

  if (Number.isNaN(checkIn.getTime()) || Number.isNaN(checkOut.getTime())) {
    return res.status(400).json({
      message: "Check-in and check-out dates must be valid dates.",
    })
  }

  if (checkOut <= checkIn) {
    return res.status(400).json({
      message: "Check-out date must be after the check-in date.",
    })
  }

  const booking = {
    id: randomUUID(),
    checkInDate,
    checkOutDate,
    guests: Number(guests),
    firstName: String(firstName).trim(),
    lastName: String(lastName).trim(),
    phoneNumber: String(phoneNumber).trim(),
    specialRequest: String(specialRequest ?? "").trim(),
    createdAt: new Date().toISOString(),
  }

  bookings.push(booking)

  console.log("New booking received:", booking)

  return res.status(201).json({
    message: "Booking submitted successfully.",
    booking,
  })
})

app.listen(port, () => {
  console.log("Server started at port:", port)
})
