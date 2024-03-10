import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more This is added newly
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        sapiente aperiam odit similique architecto vel mollitia animi
        repellendus eum dignissimos, accusamus ullam autem voluptates optio
        facere. Quaerat sed unde doloribus. Quibusdam tempore debitis, nemo
        ratione aspernatur similique sit explicabo non provident minus, dolorum
        voluptatem, atque ea? Quasi atque nostrum nam nobis hic, quam facere
        ipsam debitis repudiandae ab adipisci. Excepturi. Odit repellendus,
        provident culpa totam et iusto tenetur aperiam ea, laudantium repellat
        quod impedit voluptatem praesentium? Quo aperiam velit libero
        doloremque, ipsam aliquam molestias repellendus dolores minus fugit
        illum iusto! Eum minima quasi necessitatibus? Consequuntur facilis illo
        quaerat tempore ducimus laboriosam numquam qui facere, dicta corrupti
        maiores cumque iusto recusandae nihil fuga eos accusantium perferendis
        voluptas cupiditate ipsam blanditiis nesciunt! Velit consequuntur
        quisquam eos, maxime ipsam saepe amet possimus quia magnam quidem
        commodi, ullam at, aliquam eveniet? Dolores mollitia consectetur id
        velit perspiciatis sunt distinctio, illo necessitatibus eum. Quidem,
        praesentium? Totam iusto quasi, reiciendis, nobis, vel suscipit
        voluptates dignissimos numquam qui nulla fugiat et iste doloremque
        obcaecati aspernatur unde praesentium distinctio quibusdam perferendis
        quo. Suscipit ab est tenetur soluta vitae. Ratione quia voluptatibus
        itaque quis perspiciatis quibusdam, quos officia. Voluptate libero optio
        repudiandae saepe a, nobis nostrum tempora, animi culpa ex modi beatae
        facilis ea quasi inventore corrupti molestiae cumque. In libero vitae
        recusandae repellat deleniti consequatur quo itaque magni, eaque iure
        earum excepturi illum dolorem, temporibus cupiditate aperiam, quidem
        odio possimus minima numquam veniam omnis eligendi? Libero, quasi autem.
        Facilis, quibusdam! Quaerat eos provident autem deleniti laudantium
        numquam facilis tenetur vitae enim nisi consequuntur sed dolore soluta,
        quam voluptatem ducimus! Eveniet impedit id totam maiores sed libero
        eaque quasi? Doloribus, accusamus. Ut deserunt iste vitae voluptatum
        quisquam blanditiis dolor quia voluptates velit, cupiditate accusantium
        recusandae laboriosam! Iste ratione esse earum, et harum deserunt
        voluptas aspernatur inventore libero. Alias, saepe.
      </p>
    </>
  );
}

export default App;
