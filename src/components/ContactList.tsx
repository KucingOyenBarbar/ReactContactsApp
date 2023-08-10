/* eslint-disable @typescript-eslint/no-explicit-any */
import { Contact } from "../types";
import ContactItem from "./ContactItem";

type Props = { contacts: Contact[]; onDelete: any };

export default function ContactList({ contacts, onDelete }: Props) {
  const ContactListIsEmpty = () => (
    <div className="d-flex justify-content-center mx-auto py-3">
      <p className="text-start text-secondary fst-normal">
        Belum Ada Daftar Kontak.
      </p>
    </div>
  );

  const renderedContent = contacts.length ? (
    contacts.map((contact, index) => (
      <ContactItem key={index} onDelete={onDelete} {...contact} />
    ))
  ) : (
    <ContactListIsEmpty />
  );

  return (
    <>
      <div className="row justify-content-center g-2 py-3">
        <div className="col-12 col-lg-6 col-md-10 col-sm-12">
          {/* {contacts?.map((contact, index) => (
            <ContactItem key={index} {...contact} />
          ))} */}
          {renderedContent}
        </div>
      </div>
    </>
  );
}
