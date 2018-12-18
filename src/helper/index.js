export const getDate = (date, format = {}) => {
  const { y = "numeric", m = "numeric", d = "numeric" } = format;
  const newDate = new Date(date).toLocaleDateString("es-ES", {
    year: y,
    month: m,
    day: d
  });
  return newDate;
};
