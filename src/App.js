import { Navigate, Route, Routes } from "react-router-dom";

//pages
import { UsersPage } from "./pages/UsersPage";
import { ShopPage } from "./pages/ShopPage";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";

//components
// import { Header } from "./components/general/Header";
import "./styles.css";
import { StroiCategory } from "./components/shop/StroiCategory";
import { ChildPageCategories } from "./components/shop/ChildPageCategories ";
import { NoProduct, NotFoundPage } from "./components/shop/NoProduct";

export default function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" />} /> */}
        <Route path="/" element={<Navigate to="/shop" />} />
        <Route path="/shop" element={<ShopPage />} />
        {/* <Route path="/users" element={<UsersPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} /> */}
        <Route path="/stroicategory" element={<StroiCategory/> }/>
        <Route path="/stroicategory/:id" element={<StroiCategory/>} />
        <Route path ="*" element={<NoProduct/>}/>
        </Routes>  

     
    </div>
  );
}
