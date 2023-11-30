import { Dialog } from "@mui/material";
import React, { useState } from "react";
import { Calendar } from "react-date-range";
import { useSearchParams } from "react-router-dom";
export default function CalendarModal() {
  const [date, setDate] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const open = searchParams.get("calendar") ? true : false;

  const handleChange = (item) => {
    setDate(item);
  };

  const handleClose = () => setSearchParams("");

  return (
    <Dialog dir="ltr" onClose={handleClose} open={open}>
      <Calendar onChange={handleChange} date={date} minDate={new Date()} />
    </Dialog>
  );
}
