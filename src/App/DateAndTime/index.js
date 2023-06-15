import { useCurrentDate } from "./useCurrentDate";
import { StyledDateAndTime } from "./styled";

const formatDate = (date) =>
  date.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

const DateAndTime = () => {
  const date = useCurrentDate();

  return <StyledDateAndTime> {formatDate(date)}</StyledDateAndTime>;
};

export default DateAndTime;
