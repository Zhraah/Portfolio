const calendarWeekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function toDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function addCalendarDays(date, amount) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
}

function getFirstAvailableDate() {
  let date = addCalendarDays(new Date(), 1);
  while ([0, 6].includes(date.getDay())) date = addCalendarDays(date, 1);
  return date;
}

function buildCalendarMonth(viewDate) {
  const monthStart = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
  const mondayOffset = (monthStart.getDay() + 6) % 7;
  const gridStart = addCalendarDays(monthStart, -mondayOffset);
  return Array.from({ length: 42 }, (_, index) => addCalendarDays(gridStart, index));
}

export { addCalendarDays, buildCalendarMonth, calendarWeekdays, getFirstAvailableDate, toDateKey };
