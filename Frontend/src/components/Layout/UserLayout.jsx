import { Outlet } from "react-router-dom"
import Footer from "../Common/Footer"
import Header from "../Common/Header"


const UserLayout = () => {
  return (
    <>
    {/*header*/}
    <Header/>
    {/*Main Cntent*/}
    <main>
    <Outlet/>
    </main>
    {/*Footer*/}
    <Footer/>
  
    
    </>
  )
}

export default UserLayout