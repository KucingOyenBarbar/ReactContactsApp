/* eslint-disable @typescript-eslint/no-explicit-any */
import ContactDeleteButton from "./ContactDeleteButton";

type Props = {
  name: string;
  imageUrl: string;
  tag: string;
  id?: number;
  onDelete: any;
};

export default function ContactItem({
  name,
  imageUrl,
  tag,
  id,
  onDelete,
}: Props) {
  const ContactItemImage = () => (
    <div className="col-2">
      <img
        src={imageUrl}
        width={70}
        height={70}
        alt={name}
        className="img-fluid rounded"
      />
    </div>
  );
  const ContactItemBody = () => (
    <>
      <div className="col-8">
        <div className="d-block position-relative px-2 mx-2 ">
          <h5 className="card-title text-start text-white-50">{name}</h5>
          <p className="text-start text-secondary">@{tag}</p>
        </div>
      </div>
    </>
  );

  return (
    <div className="card shadow rounded mb-3">
      <div className="card-body position-relative">
        <div className="row justify-content-between align-content-center g-2">
          <ContactItemImage />
          <ContactItemBody />
          <ContactDeleteButton id={id} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}
