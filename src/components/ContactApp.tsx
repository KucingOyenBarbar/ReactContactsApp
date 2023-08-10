/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Component, ReactNode } from "react";
import { contacts } from "../utils/contacts";
import ContactHeadingTitle from "./ContactHeadingTitle";
import ContactList from "./ContactList";
import { Contact } from "../types";
import ContactInput from "./ContactInput";

interface MyComponentState {
  count: number;
  isActive: boolean;
  items: Contact[];
}
export default class ContactApp extends Component<{}, MyComponentState> {
  constructor(props: {}) {
    super(props);
    // Initial state
    this.state = {
      count: 0,
      isActive: false,
      items: contacts,
    };

    // Bind method
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

  // Handler
  onDeleteHandler(id: number): void {
    const contacts = this.state.items?.filter((contact) => contact.id !== id);
    this.setState({ items: contacts });
  }

  onAddContactHandler({ name, tag }: any): void {
    this.setState((prevState: any) => {
      return {
        items: [
          ...prevState.items,
          {
            id: new Date().toISOString(),
            name,
            tag,
            imageUrl: "/images/default.jpg",
          },
        ],
      };
    });
  }

  render(): ReactNode {
    return (
      <div className="container py-5 mt-5">
        <ContactInput addContact={this.onAddContactHandler} />
        <ContactHeadingTitle title="Daftar Kontak" />
        <ContactList
          contacts={this.state.items}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}
