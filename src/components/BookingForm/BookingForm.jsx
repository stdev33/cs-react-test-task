import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import icons from '../../icons/icons.svg';
import { enGB } from 'date-fns/locale';
import css from './BookingForm.module.css';

registerLocale('en-GB', enGB);

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: null,
    comment: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = date => {
    setFormData(prevFormData => ({
      ...prevFormData,
      bookingDate: date,
    }));
  };

  const handleSubmit = event => {
    if (formData.name && formData.email && formData.bookingDate) {
      setFormData({
        name: '',
        email: '',
        bookingDate: null,
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
      <div className={css.calendarInputWrapper}>
        <DatePicker
          selected={formData.bookingDate}
          onChange={handleDateChange}
          minDate={new Date()}
          calendarStartDay={1}
          className={css.calendarInput}
          dateFormat="dd/MM/yyyy"
          calendarClassName={css.calendar}
          monthClassName={date => css.calendarMonth}
          weekDayClassName={date => css.calendarWeekDay}
          dayClassName={date => css.calendarDay}
          showIcon
          toggleCalendarOnIconClick
          icon={
            <svg width="20" height="20" className={css.calendarIcon}>
              <use xlinkHref={`${icons}#icon-calendar`}></use>
            </svg>
          }
          placeholderText="Booking date"
          locale="en-GB"
          formatWeekDay={nameOfDay => nameOfDay.substring(0, 3).toUpperCase()}
        />
      </div>
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
