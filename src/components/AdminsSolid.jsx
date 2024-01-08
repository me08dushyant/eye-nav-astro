import { createSignal } from "solid-js";
import { useStore } from "solid-nanostores";

import { admins } from "../store/admins.js";
import {
  counter,
  increaseCounter,
  decreaseCounter,
  url,
  setURL,
} from "../store/counter.js";

const AdminsSolid = () => {
  const list = useStore(admins);
  const count = useStore(counter);
  const urlx = useStore(url);

  return (
    <>
      <h1>Solid</h1>
      <h2>
        {urlx.value} {JSON.stringify(count)} sddsd
      </h2>
      <ul>
        {list.map((admin) => (
          <li key={admin.id}>{JSON.stringify(admin, null, 2)}</li>
        ))}
      </ul>
      <div>
        <h3>Counter</h3>
        <p>{count.value}</p>
        <button onClick={decreaseCounter}>-1</button>
        <button onClick={increaseCounter}>+1</button>
        <br />
        <button onClick={setURL}>setPath</button>
      </div>

      <br />
    </>
  );
};

export default AdminsSolid;
