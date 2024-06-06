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
import toast, { Toaster } from "react-hot-toast";
import { FormEvent, ReactNode, useEffect, useState } from "react";
import { BusinessListType } from "@/types/businessTypes";
import api from "@/lib/axios";
import { useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/app/hooks/reduxHooks";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";
import { fetchBookingsByDate } from "@/redux/booking/bookingThnak";

export function AppointmentSheet({
  children,
  businessItem,
}: {
  children: ReactNode;
  businessItem: BusinessListType;
}) {
  //State
  const [date, setDate] = useState<Date>(new Date());
  const [reserved, setReserved] = useState([]);
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
  const dispatch = useAppDispatch();
  const { reservedTime, http } = useSelector(
    (state: RootState) => state.bookings
  );

  useEffect(() => {
    console.log("get set date : ", date.toLocaleDateString());
    if (date != undefined) {
      dispatch(fetchBookingsByDate(date.toISOString()));
    }
  }, [date]);

  //Methods
  async function submitAppointment(e: FormEvent) {
    e.preventDefault();

    const booking = {
      username: "null",
      userEmail: data?.user?.email,
      date: date.toLocaleDateString(),
      time: time,
      business: businessItem._id,
    };

    try {
      toast.loading("Waiting...");
      const { data } = await api.post("/booking", booking);
      toast.dismiss();
      dispatch(fetchBookingsByDate(date.toISOString()));

      toast.success(data.message);
    } catch (error: any) {
      toast.dismiss();
      toast.error(
        typeof error.response?.data === "string"
          ? error.response?.data
          : error.response?.data.message || "Somthing went wrong!"
      );
      console.log(error);
      // toast.error(
      //   error.response.data
      //     ? error.response.data
      //     : error.response.data.message
      //     ? error.response.data.message
      //     : "Error"
      // );
    }
  }

  return (
    <>
      <div>
        <Toaster />
      </div>
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
            <div>
              <Toaster />
            </div>
            <h1> Select date </h1>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate as any}
              className="rounded-md border shadow"
            />
            <h1>Slect Time Slot</h1>
            <div className="grid grid-cols-3 gap-4 w-full mb-10">
              {timeSlot.map((item, index) => {
                return (
                  <div className=" " key={index}>
                    <Button
                      disabled={reservedTime.includes(item)}
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
    </>
  );
}
