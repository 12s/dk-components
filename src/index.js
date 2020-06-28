import React from "react";
import { render } from "react-dom";
import { Button } from "carbon-components-react";

const App = () => (
  <div>
    <Button>Hello world</Button>
    This is a React
  </div>
);

render(<App />, document.getElementById("root"));
