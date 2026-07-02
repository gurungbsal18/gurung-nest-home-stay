"use client"

import * as React from "react"

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
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <div className="flex w-full justify-center">
      <form className="flex w-2xl flex-col gap-4 rounded-md border border-gray-200 p-8 shadow-xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Field className="mx-auto w-full">
            <FieldLabel htmlFor="date">Check-in</FieldLabel>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date"
                  className="justify-start font-normal"
                >
                  {date ? date.toLocaleDateString() : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  defaultMonth={date}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    setDate(date)
                    setOpen(false)
                  }}
                />
              </PopoverContent>
            </Popover>
          </Field>
          <Field className="mx-auto w-full">
            <FieldLabel htmlFor="date">Check-out</FieldLabel>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date"
                  className="justify-start font-normal"
                >
                  {date ? date.toLocaleDateString() : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  defaultMonth={date}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    setDate(date)
                    setOpen(false)
                  }}
                />
              </PopoverContent>
            </Popover>
          </Field>
        </div>

        <div className="flex flex-col gap-2">
          <Label>Guests</Label>
          <Input type="number" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label>First Name</Label>
            <Input type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Last Name</Label>
            <Input type="text" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label>Phone Number</Label>
          <Input type="number" />
        </div>

        <div className="flex flex-col gap-2">
          <Label>Special Requests</Label>
          <Textarea />
        </div>
        <div className="w-full">
          <Button className="w-full">Submit</Button>
        </div>
      </form>
    </div>
  )
}
