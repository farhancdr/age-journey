import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

export const calculateAge = (birthDate: string, currentDate: string) => {
  const birth = dayjs(birthDate, "DD-MM-YYYY");
  const today = dayjs(currentDate, "DD-MM-YYYY");

  const ageInDays = today.diff(birth, "day");
  const ageDuration = dayjs.duration(today.diff(birth));

  const years = ageDuration.years();
  const months = ageDuration.months();
  const days = ageDuration.days() + 1;

  const weeks = Math.floor(ageInDays / 7);
  const remainingDays = ageInDays % 7;

  return {
    detailed: `${years} years ${months} months ${days} days`,
    months: `${years * 12 + months} months ${days} days`,
    weeks: `${weeks} weeks ${remainingDays} days`,
    days: `${ageInDays} days`,
  };
};
