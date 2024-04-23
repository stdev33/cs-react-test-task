import React, { useState } from 'react';
import css from './BookingForm.module.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    if (formData.name && formData.email && formData.bookingDate) {
      setFormData({
        name: '',
        email: '',
        bookingDate: '',
        comment: '',
      });
    } else {
      event.preventDefault(); // Prevent the form from being submitted if required fields are not filled in
      alert('Please fill in all required fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.bookingForm}>
      <input
        className={css.inputField}
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
      <input
        className={css.inputField}
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Email"
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        title="Please enter a valid email address."
      />
      <input
        className={css.inputField}
        type="date"
        name="bookingDate"
        value={formData.bookingDate}
        onChange={handleChange}
        required
        placeholder="Booking Date"
      />
      <textarea
        className={css.commentTextArea}
        name="comment"
        value={formData.comment}
        onChange={handleChange}
        placeholder="Comment"
      />
      <button className={css.submitButton} type="submit">
        Send
      </button>
    </form>
  );
};

export default BookingForm;
