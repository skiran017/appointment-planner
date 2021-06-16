import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  // const getContactNames = () => {
  //   return contacts.map((contact) => contact.name);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        value={title}
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        required
        value={date}
        min={getTodayString}
        placeholder="date"
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        required
        value={time}
        placeholder="time"
        onChange={(e) => setTime(e.target.value)}
      />
      <ContactPicker contacts={contacts} handleChange={setContact} />
      <input type="submit" value="sumbit" />
    </form>
  );
};
