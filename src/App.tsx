import { useEffect, useState } from "react";
import { IUSer, IData } from "./interfaces";
import User from "./User";
import "./App.css";

const url: string = "https://jsonplaceholder.typicode.com/posts";

function App(): JSX.Element {
  const [data, setData] = useState<IData[] | undefined>([]);
  const [user, setUser] = useState<IUSer | undefined>();
  useEffect(() => {
    async function getData(): Promise<any> {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [url]);

  return (
    <div className="App">
      {data &&
        data.map((user) => {
          return (
            <User
              key={user.id}
              userId={user.userId}
              title={user.title}
              body={user.body}
            />
          );
        })}
    </div>
  );
}

export default App;
