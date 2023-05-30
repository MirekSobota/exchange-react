import { DateTime } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const DateAndTime = () => {
  const { date } = useCurrentDate();

  const formattedDate = date.toLocaleString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return <DateTime>Today is {formattedDate}</DateTime>;
};

export { DateAndTime };
