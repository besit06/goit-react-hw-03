import s from './Contact.module.css';

const Contact = ({ contact, deleteContact }) => (
  <div className={s.contact}>
    <p>{contact.name}: {contact.number}</p>
    <button onClick={() => deleteContact(contact.id)}>Delete</button>
  </div>
);

export default Contact;