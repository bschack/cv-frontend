import { DateRange, SkillItem } from "../cv.types";

export const formatList = (list: SkillItem[]) => {
  return list.map(item => item.item).join(', ');
}

export const formatPhoneNumber = (phone: string) => {
  return "(" + phone.slice(0, 3) + ") " + phone.slice(3, 6) + "-" + phone.slice(6);
}

export const formatDateRange = (range: DateRange) => {
  if (range.type === 'single') {
    return range.start;
  } else if (range.type === 'range') {
    return range.start + ' - ' + range.end;
  } else {
    return range.ranges.map(range => range.start + ' - ' + range.end).join('; ');
  }
}