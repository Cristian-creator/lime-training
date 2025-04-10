const getFormattedDate = () => {
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(currentDate);

  return formattedDate;
};
