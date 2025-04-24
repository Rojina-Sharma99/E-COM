import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Checkout from "./components/Cart/checkout";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import MyOrdersPage from "./pages/MyOrdersPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";

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
          {/**Add rouite for orderconformation  */}
          <Route path="order-confirmation" element={<OrderConfirmationPage/>} />
          <Route path="my-orders" element={<MyOrdersPage/>}/>
          <Route path="order/:id" element={<OrderDetailsPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
