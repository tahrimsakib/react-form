import "./App.css";
import ControlledField from "./Component/ControlledField";
import FormAction from "./Component/FormAction";
import SimpleForm from "./Component/SimpleForm";
import UnControlled from "./Component/UnControlled";

function App() {
  return (
    <>
      <h1>React Form</h1>
      {/* <ControlledField></ControlledField> */}
      <UnControlled></UnControlled>
    </>
  );
}

export default App;
