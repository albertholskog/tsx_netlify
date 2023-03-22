import { IData } from "./interfaces";

function User({ userId, body, title }: IData): JSX.Element {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>{userId}</p>
    </div>
  );
}

export default User;
