import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

export const calculateAge = (birthDate: string, currentDate: string) => {
  const birth = dayjs(birthDate);
  const current = dayjs(currentDate);

  const years = current.diff(birth, "year");
  const months = current.diff(birth.add(years, "year"), "month");
  const days = current.diff(birth.add(years, "year").add(months, "month"), "day");

  const totalMonths = years * 12 + months;
  const totalDays = current.diff(birth, "day");
  const totalWeeks = Math.floor(totalDays / 7);
  const remainingDays = totalDays % 7;

  return {
    detailed: `${years} years ${months} months ${days} days`,
    months: `${totalMonths} months ${days} days`,
    weeks: `${totalWeeks} weeks ${remainingDays} days`,
    days: `${totalDays} days`
  };
};
