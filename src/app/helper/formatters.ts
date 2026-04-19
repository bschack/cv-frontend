import { DateRange, SkillItem } from "../cv.types";

export const formatList = (list: SkillItem[]) => {
  return list.map(item => item.item).join(', ');
}

export const formatName = (name: string) => {
  let nameParts = name.split(' ');
  return {
    ff: nameParts[0][0],
    fl: nameParts[0].slice(1),
    lf: nameParts[1][0],
    ll: nameParts[1].slice(1),
  }
}

export const formatAuthors = (authors: string[]) => {
  const form = (author: string) => {
    let name = author.split(' ');
    return name[1] + ", " + name[0][0] + ".";
  }

  if (authors.length > 3) {
    console.log(form(authors[0]) + ", et al.");
    return form(authors[0]) + ", et al.";
  }

  return authors.map(author => form(author)).join(', ');
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