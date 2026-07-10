"use client"

import * as React from "react"
import { format } from "date-fns/format"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export function BookingForm() {
  const [checkInDate, setCheckInDate] = React.useState<Date | undefined>(
    undefined
  )
  const [checkOutDate, setCheckOutDate] = React.useState<Date | undefined>(
    undefined
  )
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitMessage, setSubmitMessage] = React.useState<string | null>(null)
  const [submitError, setSubmitError] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (!checkInDate || !checkOutDate) {
      return
    }

    if (checkOutDate <= checkInDate) {
      setCheckOutDate(undefined)
    }
  }, [checkInDate, checkOutDate])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      checkInDate: checkInDate ? format(checkInDate, "yyyy-MM-dd") : null,
      checkOutDate: checkOutDate ? format(checkOutDate, "yyyy-MM-dd") : null,
      guests: formData.get("guests"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phoneNumber: formData.get("phoneNumber"),
      specialRequest: formData.get("specialRequest"),
    }

    setSubmitMessage(null)
    setSubmitError(null)

    if (!data.checkInDate || !data.checkOutDate) {
      setSubmitError("Please select both check-in and check-out dates.")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error(
          result?.message ?? "Booking submission failed. Please try again."
        )
      }

      form.reset()
      setCheckInDate(undefined)
      setCheckOutDate(undefined)
      setSubmitMessage("Your booking request has been sent successfully.")
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Booking submission failed. Please try again."
      setSubmitError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const minCheckoutDate = new Date(checkInDate ?? today)
  minCheckoutDate.setDate(minCheckoutDate.getDate() + 1)

  return (
    <div className="flex w-full justify-center">
      <form
        className="flex w-2xl flex-col gap-4 rounded-md border border-gray-200 p-8 shadow-xl"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Field className="w-full">
            <FieldLabel htmlFor="date-picker-simple">Check-in Date</FieldLabel>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  id="date-picker-simple"
                  className="justify-start font-normal"
                >
                  {checkInDate ? (
                    format(checkInDate, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkInDate}
                  onSelect={setCheckInDate}
                  disabled={(date) => date < today}
                />
              </PopoverContent>
            </Popover>
          </Field>
          <Field className="w-full">
            <FieldLabel htmlFor="date-picker-simple">Check-out Date</FieldLabel>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  id="date-picker-simple"
                  className="justify-start font-normal"
                >
                  {checkOutDate ? (
                    format(checkOutDate, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkOutDate}
                  onSelect={setCheckOutDate}
                  defaultMonth={checkOutDate ?? minCheckoutDate}
                  disabled={(date) => date < minCheckoutDate}
                />
              </PopoverContent>
            </Popover>
          </Field>
        </div>

        <div className="flex flex-col gap-2">
          <Label>Guests</Label>
          <Input type="number" min={1} name="guests" required />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label>First Name</Label>
            <Input type="text" name="firstName" required />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Last Name</Label>
            <Input type="text" name="lastName" required />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label>Phone Number</Label>
          <Input type="tel" name="phoneNumber" required />
        </div>

        <div className="flex flex-col gap-2">
          <Label>Special Requests</Label>
          <Textarea name="specialRequest" />
        </div>
        {submitError ? (
          <p className="text-sm font-medium text-red-600">{submitError}</p>
        ) : null}
        {submitMessage ? (
          <p className="text-sm font-medium text-green-600">{submitMessage}</p>
        ) : null}
        <div className="w-full">
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  )
}
