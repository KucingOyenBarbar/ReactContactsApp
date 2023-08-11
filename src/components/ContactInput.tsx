/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { Component } from "react";

interface ContactInputInterface {
  name: string;
  tag: string;
}
type AddContactArg = { name: string; tag: string };
type ContactInputProps = {
  addContact: ({ name, tag }: AddContactArg) => void;
};

export default class ContactInput extends Component<
  ContactInputProps,
  ContactInputInterface
> {
  constructor(props: { addContact: ({ name, tag }: AddContactArg) => void }) {
    super(props);
    // Initial state
    this.state = {
      name: "",
      tag: "",
    };

    // Bind Handler
    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  // Handler
  onNameChangeEventHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState(() => {
      return { name: e.target.value };
    });
  }

  onTagChangeEventHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState(() => {
      return { tag: e.target.value };
    });
  }

  onSubmitEventHandler(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    // Check Input
    !this.state.name.length || !this.state.tag.length
      ? null
      : this.props.addContact(this.state);

    this.setState({ name: "" });
    this.setState({ tag: "" });
  }

  render(): React.ReactNode {
    return (
      <div className="row justify-content-center g-2 py-3">
        <div className="col-12 col-lg-6 col-md-10 col-sm-12">
          <div className="card shadow rounded mb-3">
            <div className="card-body">
              <div className="px-0 mx-0 position-relative">
                <h3 className="text-start  text-white text-capitalize fst-normal">
                  Form Tambah Data Kontak
                </h3>
                <hr className="text-secondary" />
              </div>
              <div className="px-0 mx-0 position-relative">
                <form onSubmit={this.onSubmitEventHandler}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Nama <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Masukan Nama..."
                      value={this.state.name}
                      onChange={this.onNameChangeEventHandler}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="tag" className="form-label">
                      Tag <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="tag"
                      placeholder="Masukan Tag..."
                      value={this.state.tag}
                      onChange={this.onTagChangeEventHandler}
                    />
                  </div>

                  <div className="py-3">
                    <button
                      type="submit"
                      className="btn btn-outline-primary btn-md d-block w-100 rounded"
                    >
                      Tambah Daftar Kontak
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
