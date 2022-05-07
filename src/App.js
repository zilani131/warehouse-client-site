
import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AddNewItem from './components/page/AddNewItem/AddNewItem';
import DetailsCard from './components/page/DetailsCard/DetailsCard';
import Home from './components/page/Home/Home';
import InventoryCard from './components/page/Home/InventorySection/InventorySectionCard/InventoryCard';
import ManageInventory from './components/page/ManageInventory/ManageInventory';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<DetailsCard></DetailsCard>}></Route>
        <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/addNewItem' element={<AddNewItem></AddNewItem>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
