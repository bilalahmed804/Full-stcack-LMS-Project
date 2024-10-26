"use client"
import * as React from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function BatchDialog() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = true

  if (isDesktop) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Course</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Course</DialogTitle>
            {/* <DialogDescription>
            You can add course here.
            </DialogDescription> */}
          </DialogHeader>
          <BatchFrom />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Course</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add course</DrawerTitle>
          <DrawerDescription>
            You can add course here.
          </DrawerDescription>
        </DrawerHeader>
        <BatchFrom className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function BatchFrom({ className }) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
    <div className="grid gap-2">
      <Label htmlFor="batch name">Batch Name</Label>
      <Input required type="text" id="email" defaultValue="" />
    </div>
    <div className="grid gap-2">
      <Label htmlFor="status">Status</Label>
      <Select required>
<SelectTrigger>
  <SelectValue placeholder="Panding, Complete, Ongoing, Merged" />
</SelectTrigger>
<SelectContent>
  <SelectItem value="panding">Panding</SelectItem>
  <SelectItem value="complete">Complete</SelectItem>
  <SelectItem value="ongoing">Ongoing</SelectItem>
  <SelectItem value="merged">Merged</SelectItem>
</SelectContent>
</Select>
    </div>
    <div className="grid gap-2">
      <Label htmlFor="trainer">Trainer</Label>
      <Select required>
<SelectTrigger>
  <SelectValue placeholder="Select Trainer" />
</SelectTrigger>
<SelectContent>
  <SelectItem value="alon musk">Alon Musk</SelectItem>
  <SelectItem value="jane smith">Jane Smith</SelectItem>
  <SelectItem value="alice johnson">Alice Johnson</SelectItem>
</SelectContent>
</Select>
    </div>
    <div className="grid gap-2">
      <Label htmlFor="no of student">No Of Student</Label>
        <Input required type="number" />
    </div>
    <div className="grid gap-2">
      <Label htmlFor="course">Course</Label>
      <Select required>
<SelectTrigger>
  <SelectValue placeholder="Select Course" />
</SelectTrigger>
<SelectContent>
  <SelectItem value="web development">Web Development</SelectItem>
  <SelectItem value="graphic desgining">Graphic Desgining</SelectItem>
  <SelectItem value="python">Python</SelectItem>
</SelectContent>
</Select>

    </div>
    <Button type="submit">Add Batch</Button>
  </form>
  )
}
