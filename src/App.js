import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Blog from "./components/page/Blog/Blog"
import AddNewItem from "./components/page/AddNewItem/AddNewItem";
import DetailsCard from "./components/page/DetailsCard/DetailsCard";
import Home from "./components/page/Home/Home";
import RequiredAuth from "./components/RequiredAuth/RequiredAuth"
import Login from "./components/page/Login/Login";
import ManageInventory from "./components/page/ManageInventory/ManageInventory";
import MyItem from "./components/page/MyItem/MyItem";
import Registration from "./components/page/Registration/Registration";
import Page404 from "./components/page/Page404/Page404"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/inventory/:id"
          element={ <RequiredAuth><DetailsCard></DetailsCard></RequiredAuth> }
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
        <Route
          path="/blog"
          element={<Blog></Blog>}
        ></Route>
        <Route path="*" element={<Page404></Page404>}></Route>
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
