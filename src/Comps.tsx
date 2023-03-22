import { IUnderPorosp } from "./interfaces";

function Comp({
  one,
  two,
  three,
}: IUnderPorosp): JSX.Element {
  return (
    <div>
      {one}
      {two}
      {three}
    </div>
  );
}

export default Comp;
