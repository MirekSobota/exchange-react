import { DateTime } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const DateAndTime = () => {
  const { formattedDate } = useCurrentDate();

  return <DateTime>Today is {formattedDate}</DateTime>;
};

export { DateAndTime };
