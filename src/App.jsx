import "./App.css";
import ControlledField from "./Component/ControlledField";
import FamilyTree from "./Component/FamilyTree/FamilyTree";
import FormAction from "./Component/FormAction";
import ProductM from "./Component/ProductManagement/ProductM";
import SimpleForm from "./Component/SimpleForm";
import UnControlled from "./Component/UnControlled";

function App() {
  return (
    <>
      <h1>React Form</h1>
      {/* <ControlledField></ControlledField> */}
      {/* <UnControlled></UnControlled> */}
      {/* <ProductM></ProductM> */}
      <FamilyTree></FamilyTree>
    </>
  );
}

export default App;
