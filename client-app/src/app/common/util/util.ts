export const combineDateAndTime = (date: Date, time: Date) => {
    const timeString = time.getHours() + ":" + time.getMinutes() + ":00",
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        dateString = `${year}-${month}-${day}`;

    return new Date(dateString + " " + timeString);
};
