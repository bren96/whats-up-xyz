import { Clock } from 'lucide-react';
import { Event } from '@libs/whats-up-events';

interface EventTimeProps {
  event: Event;
}

function hasTimeComponent(date: Date): boolean {
  return (
    date.getHours() !== 0 || date.getMinutes() !== 0 || date.getSeconds() !== 0
  );
}

function formatHour(date: Date): string {
  let hours = date.getHours();
  const ampm = hours >= 12 ? 'p' : 'a';
  hours = hours % 12 || 12; // Convert to 12-hour format
  return `${hours}${ampm}`;
}

function isFullMonthEvent(startDate: Date, endDate: Date): boolean {
  const isStartFirstDay = startDate.getDate() === 1;
  const lastDayOfMonth = new Date(
    endDate.getFullYear(),
    endDate.getMonth() + 1,
    0
  ).getDate();
  const isEndLastDay = endDate.getDate() === lastDayOfMonth;
  return (
    isStartFirstDay &&
    isEndLastDay &&
    startDate.getMonth() === endDate.getMonth() &&
    startDate.getFullYear() === endDate.getFullYear()
  );
}

function formatEventTime(event: Event): string {
  const startDate = new Date(event.startDateTime);
  const endDate = event.endDateTime ? new Date(event.endDateTime) : null;

  const hasStartTime = hasTimeComponent(startDate);
  const hasEndTime = endDate ? hasTimeComponent(endDate) : false;

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    day: '2-digit',
  });
  const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'long' });

  if (
    endDate &&
    isFullMonthEvent(startDate, endDate) &&
    !hasStartTime &&
    !hasEndTime
  ) {
    // Output the month name
    return monthFormatter.format(startDate);
  }

  const isSingleDayEvent = endDate
    ? startDate.toDateString() === endDate.toDateString()
    : true;

  if (!endDate) {
    // Single point in time
    let result = dateFormatter.format(startDate);
    if (hasStartTime) {
      result += ` ${formatHour(startDate)}`;
    }
    return result;
  } else if (isSingleDayEvent) {
    // Single day with possible start and end times
    let result = dateFormatter.format(startDate);
    const startTime = hasStartTime ? formatHour(startDate) : '';
    const endTime = hasEndTime ? formatHour(endDate) : '';
    if (startTime || endTime) {
      result += ` ${startTime}`;
      if (endTime) {
        result += ` - ${endTime}`;
      }
    }
    return result;
  } else {
    // Multi-day event
    const startDateStr = dateFormatter.format(startDate);
    const endDateStr = dateFormatter.format(endDate!);
    let result = `${startDateStr}`;
    if (hasStartTime) {
      result += ` ${formatHour(startDate)}`;
    }
    result += ` - ${endDateStr}`;
    if (hasEndTime) {
      result += ` ${formatHour(endDate!)}`;
    }
    return result;
  }
}

export function EventTime({ event }: EventTimeProps) {
  const formattedTime = formatEventTime(event);
  return (
    <div className="flex gap-x-2">
      <p className="font-semibold text-sm text-right">{formattedTime}</p>
      <Clock className="w-5 h-5" />
    </div>
  );
}
