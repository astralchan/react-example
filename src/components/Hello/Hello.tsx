export default function Hello(): JSX.Element {
  return (
    <>
      <h1 className="underline">Hello, world!</h1>
      <a
        className="btn btn-primary"
        href={`/`}>Main page</a>
    </>
  );
}
