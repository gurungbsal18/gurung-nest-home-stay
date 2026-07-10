import { randomUUID } from "crypto"
import { NextResponse } from "next/server"

type BookingPayload = {
  checkInDate?: string | null
  checkOutDate?: string | null
  guests?: string | number | null
  firstName?: string | null
  lastName?: string | null
  phoneNumber?: string | null
  specialRequest?: string | null
}

type BookingRecord = {
  id: string
  checkInDate: string
  checkOutDate: string
  guests: number
  firstName: string
  lastName: string
  phoneNumber: string
  specialRequest: string
  createdAt: string
}

const bookings: BookingRecord[] = []

function readBookingPayload(body: unknown): BookingPayload {
  return body && typeof body === "object" ? (body as BookingPayload) : {}
}

function validateBooking(payload: BookingPayload) {
  const missingFields: string[] = []

  if (!payload.checkInDate) missingFields.push("checkInDate")
  if (!payload.checkOutDate) missingFields.push("checkOutDate")
  if (!payload.guests) missingFields.push("guests")
  if (!payload.firstName) missingFields.push("firstName")
  if (!payload.lastName) missingFields.push("lastName")
  if (!payload.phoneNumber) missingFields.push("phoneNumber")

  if (missingFields.length > 0) {
    return {
      ok: false as const,
      response: NextResponse.json(
        {
          message: "Missing required booking fields.",
          missingFields,
        },
        { status: 400 }
      ),
    }
  }

  const checkIn = new Date(payload.checkInDate as string)
  const checkOut = new Date(payload.checkOutDate as string)

  if (Number.isNaN(checkIn.getTime()) || Number.isNaN(checkOut.getTime())) {
    return {
      ok: false as const,
      response: NextResponse.json(
        { message: "Check-in and check-out dates must be valid dates." },
        { status: 400 }
      ),
    }
  }

  if (checkOut <= checkIn) {
    return {
      ok: false as const,
      response: NextResponse.json(
        { message: "Check-out date must be after the check-in date." },
        { status: 400 }
      ),
    }
  }

  return {
    ok: true as const,
    booking: {
      id: randomUUID(),
      checkInDate: payload.checkInDate as string,
      checkOutDate: payload.checkOutDate as string,
      guests: Number(payload.guests),
      firstName: String(payload.firstName).trim(),
      lastName: String(payload.lastName).trim(),
      phoneNumber: String(payload.phoneNumber).trim(),
      specialRequest: String(payload.specialRequest ?? "").trim(),
      createdAt: new Date().toISOString(),
    } satisfies BookingRecord,
  }
}

async function forwardToBackend(payload: BookingPayload) {
  const backendUrl = process.env.BACKEND_URL ?? process.env.NEXT_PUBLIC_BACKEND_URL

  if (!backendUrl) {
    return null
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 5000)

  try {
    const response = await fetch(new URL("/api/bookings", backendUrl), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })

    const json = await response.json().catch(() => null)

    if (!response.ok) {
      return {
        status: response.status,
        body: json ?? { message: "Booking submission failed." },
      }
    }

    return {
      status: response.status,
      body: json,
    }
  } catch {
    return null
  } finally {
    clearTimeout(timeout)
  }
}

export async function POST(request: Request) {
  const payload = readBookingPayload(await request.json().catch(() => null))
  const validation = validateBooking(payload)

  if (!validation.ok) {
    return validation.response
  }

  const proxied = await forwardToBackend(payload)

  if (proxied) {
    if (proxied.status >= 400) {
      return NextResponse.json(
        proxied.body ?? { message: "Booking submission failed." },
        { status: proxied.status }
      )
    }

    return NextResponse.json(proxied.body ?? { message: "Booking submitted successfully." }, {
      status: proxied.status,
    })
  }

  bookings.push(validation.booking)

  return NextResponse.json(
    {
      message: "Booking submitted successfully.",
      booking: validation.booking,
    },
    { status: 201 }
  )
}

export async function GET() {
  return NextResponse.json({ bookings })
}
