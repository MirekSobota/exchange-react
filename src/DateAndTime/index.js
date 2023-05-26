import { DateTime } from "./styled";
import { useEffect, useState } from "react";

const DateAndTime = () => {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);


  const formattedDate = date.toLocaleString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  return (
    <DateTime>Today is {formattedDate}</DateTime>
  );

};

export { DateAndTime };
