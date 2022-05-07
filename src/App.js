import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import AddNewItem from "./components/page/AddNewItem/AddNewItem";
import DetailsCard from "./components/page/DetailsCard/DetailsCard";
import Home from "./components/page/Home/Home";

import Login from "./components/page/Login/Login";
import ManageInventory from "./components/page/ManageInventory/ManageInventory";
import MyItem from "./components/page/MyItem/MyItem";
import Registration from "./components/page/Registration/Registration";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/inventory/:id"
          element={<DetailsCard></DetailsCard>}
        ></Route>
        <Route
          path="/manageInventory"
          element={<ManageInventory></ManageInventory>}
        ></Route>
        <Route path="/addNewItem" element={<AddNewItem></AddNewItem>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
        <Route
          path="/myitem"
          element={<MyItem></MyItem>}
        ></Route>
        {/* <Route
          path="/additem"
          element={<AddItem></AddItem>}
        ></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
