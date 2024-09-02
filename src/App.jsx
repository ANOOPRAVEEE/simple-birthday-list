import { useState } from "react";
import data from './data';
import List from "./List";
const App = () => {

  const [people, setPeople] = useState(data);
  const clearAll = () => {
    setPeople([])
  }

  return <main>
    <section className="container">
      <h3> {people.length} birthdays today</h3>
      <List peoples={people} />
      <button type="button" onClick={clearAll} className="btn btn-block">Clear All</button>
    </section>
  </main>
};
export default App;
