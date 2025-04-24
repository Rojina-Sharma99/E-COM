import MyOrdersPage from "./MyOrdersPage"


const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <div className="container p-4 mx-auto md:p-6">
           <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
            {/**Left section */}
            <div className="w-full p-6 rounded-lg shadow-md md:w-1/3 ld:w-1/4">
            <h1 className="font-bold text-2xl mb-4 md:text-3xl">John Doe</h1>
            <p className="mb-4 text-lg text-gray-600">John@example.com</p>
            <button className="bg-red-500 text-white w-full rounded px-4 py-2 hover:bg-red-600">Logout</button>
            </div>
            {/**Left section */}

            <div className="w-full md:w-2/3 lg:w-3/4">
                This will be another component called MyOrdersPage
                <MyOrdersPage/>
            </div>

            

           </div>

        </div>


    </div>
  )
}

export default Profile