import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Calendar } from "@/components/ui/calendar";
import { FormEvent, ReactNode, useState } from "react";
import { BusinessListType } from "@/types/businessTypes";
import api from "@/lib/axios";
import { useSession } from "next-auth/react";

export function AppointmentSheet({
  children,
  businessItem,
}: {
  children: ReactNode;
  businessItem: BusinessListType;
}) {
  //State
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [timeSlot, setTimeSlot] = useState<string[]>([
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "13.00 PM",
    "13:30 PM",
    "14:00 PM",
    "14:30 PM",
    "15.00 PM",
    "15:30 PM",
    "16:00 PM",
    "16:30 PM",
    "17.00 PM",
    "17:30 PM",
    "18:00 PM",
    "18:30 PM",
  ]);
  const [time, setTime] = useState<string>("");

  //hooks
  const { data, status } = useSession();

  //Methods
  function submitAppointment(e: FormEvent) {
    e.preventDefault();

    const booking = {
      username: "null",
      userEmail: data?.user?.email,
      date: date,
      time: time,
      business: businessItem._id,
    };

    // const res = api.post('/booking', )

    console.log("booking  :", booking);
  }

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Book a Service</SheetTitle>
          <SheetDescription className=" text-gray-500">
            Select Date and Time slot to book a service
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <h1> Select date </h1>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow"
          />
          <h1>Slect Time Slot</h1>
          <div className="grid grid-cols-3 gap-4 w-full mb-10">
            {timeSlot.map((item, index) => {
              return (
                <div className=" " key={index}>
                  <Button
                    onClick={() => setTime(item)}
                    className={`bg-primary/10 text-sm hover:bg-primary hover:text-white text-gray-700 ${
                      time === item && "bg-primary text-white"
                    } `}
                    variant="outline"
                  >
                    {item}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              onClick={(e) => submitAppointment(e)}
              className=" text-white"
              type="submit"
            >
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
