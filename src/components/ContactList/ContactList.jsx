import Contact from '../Contact/Contact.jsx';
import s from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => (
  <ul className={s.list}>
    {contacts.map(contact => (
      <li key={contact.id}>
        <Contact contact={contact} deleteContact={deleteContact} />
      </li>
    ))}
  </ul>
);

export default ContactList;