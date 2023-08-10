/* eslint-disable @typescript-eslint/no-explicit-any */

type Props = { id?: number; onDelete: any };

export default function ContactDeleteButton({ id, onDelete }: Props) {
  return (
    <div className="col">
      <button
        onClick={() => onDelete(id)}
        type="button"
        className="btn btn-outline-danger btn-md rounded"
      >
        Hapus
      </button>
    </div>
  );
}
