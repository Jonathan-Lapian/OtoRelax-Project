import style from "./assets/css/style.css";

import { Footer, Header, Body } from "./component/molecule";

const App = () => {
  return (
    <div className="body">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
