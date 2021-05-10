interface Props {
  title: string;
}
const Foo = ({ title }: Props) => (
  <>
    <h1>Hello</h1>
    <p>{title}</p>
  </>
);

export default Foo;
