import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Checkout from "./components/Cart/checkout";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/*User Layout */}
          <Route index element={<Home />} />
          {/**Add rouite for login page */}
          <Route path="login" element={<Login />} />
          {/**Add rouite for register page */}
          <Route path="register" element={<Register />} />
          {/**Add rouite for Profile page */}
          <Route path="profile" element={<Profile />} />
          {/**Add rouite for Checkout  */}
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
