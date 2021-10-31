import ReactDOM from "react-dom";
import Index from "./components/Index";
import "./index.css";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <RecoilRoot>
    <Index />
  </RecoilRoot>,
  document.getElementById("root")
);
