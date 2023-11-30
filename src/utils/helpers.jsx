export const handleDate = (date) => {
  const currentDate = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const hijriDate = new Intl.DateTimeFormat("ar-TN-u-ca-islamic", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(currentDate);

  const arabicDate = new Intl.DateTimeFormat("ar-u-nu-arab", options)
    .format(currentDate)
    .split(" ")
    .join(" , ");

  const arabicTime = currentDate.toLocaleTimeString("ar-u-nu-arab", {
    hour: "numeric",
    minute: "numeric",
  });

  return { hijriDate, arabicDate, arabicTime };
};

export const convertToCelsius = (deg) => {
  return Math.round(deg - 273.15).toLocaleString("ar-EG");
};
