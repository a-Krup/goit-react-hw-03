import React from 'react';
import { FaUser, FaPhoneAlt } from 'react-icons/fa'; // Іконки для профілю та телефону
import styles from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={styles.contact}>
      <div className={styles.contactInfo}>
        <div className={styles.contactDetails}>
          <FaUser className={styles.icon} /> {/* Іконка профілю */}
          <span>{contact.name}</span>
        </div>
        <div className={styles.contactDetails}>
          <FaPhoneAlt className={styles.icon} /> {/* Іконка телефону */}
          <span>{contact.number}</span>
        </div>
      </div>
      <button onClick={() => onDelete(contact.id)} className={styles.deleteButton}>
        Delete
      </button>
    </li>
  );
};

export default Contact;