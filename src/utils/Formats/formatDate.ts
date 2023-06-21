function formatDate(date: string) {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    dayPeriod: 'long',
  }).format(new Date(date));
  return formattedDate;
}

export default formatDate;
