import { format, differenceInMonths, differenceInYears } from "date-fns";

function convertUnixTimestamp(
  unixTimestamp: number,
  desiredFormat: string = "MMM yyyy"
): string {
  const date = new Date(unixTimestamp * 1000);
  return format(date, desiredFormat);
}

function getDuration(startDate: number, endDate: number | null) {
  const joiningDate = new Date(startDate * 1000);
  const lastDate = endDate ? new Date(endDate * 1000) : new Date();
  const years = differenceInYears(lastDate, joiningDate);
  const months = differenceInMonths(lastDate, joiningDate) % 12;

  const durationParts: string[] = [];
  if (years > 0) {
    durationParts.push(`${years} year${years !== 1 ? "s" : ""}`);
  }
  if (months > 0) {
    durationParts.push(`${months} month${months !== 1 ? "s" : ""}`);
  }

  return durationParts.join(" ");
}

export { convertUnixTimestamp, getDuration };
