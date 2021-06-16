import React from "react";

export const ContactPicker = ({ contacts=[], handleChange }) => {
  return (
    <select  onChange={(e) => handleChange(e.target.value)}>
      <option value={""} key={-1} selected="selected">
        No Contact Selected
      </option>
      {contacts.map((contact) => {
        return (
          <option value={contact.name} key={contact.name}>
            {contact.name}
          </option>
        );
      })}
    </select>
  );
};
