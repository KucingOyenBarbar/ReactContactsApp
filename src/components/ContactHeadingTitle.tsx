type Props = { title: string };

export default function ContactHeadingTitle({ title }: Props) {
  return (
    <>
      {/* Contact Title Start */}
      <div className="row justify-content-center g-2">
        <div className="col-12 col-lg-6 col-md-10 col-sm-12">
          <h1 className="text-start text-white-50 text-capitalize fst-normal lh-1">
            {title}
          </h1>
          <hr className="text-secondary" />
        </div>
      </div>
      {/* Contact Title End */}
    </>
  );
}
