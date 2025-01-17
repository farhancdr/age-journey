export const calculateAge = (birthDate: string, currentDate: string) => {
  const birth = new Date(birthDate);
  const current = new Date(currentDate);
  
  const diffTime = Math.abs(current.getTime() - birth.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.floor(diffDays / 7);
  const remainingDays = diffDays % 7;
  
  let years = current.getFullYear() - birth.getFullYear();
  let months = current.getMonth() - birth.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  const totalMonths = years * 12 + months;
  
  return {
    detailed: `${years} years ${months} months ${diffDays % 30} days`,
    months: `${totalMonths} months ${diffDays % 30} days`,
    weeks: `${diffWeeks} weeks ${remainingDays} days`,
    days: `${diffDays} days`
  };
};