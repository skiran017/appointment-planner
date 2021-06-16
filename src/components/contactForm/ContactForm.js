import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        required
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        required
        value={phone}
        placeholder="phone"
        onChange={(e) => setPhone(e.target.value)}
      />
      <input type="submit" value="sumbit" />
    </form>
  );
};
