import { useState } from 'react';
import Menu from './Components/Base/Menu'
import HomeBanner from './Components/HomePage/HomeBanner'
import UserForm from './Components/HomePage/UserForm'
import UserList from './Components/HomePage/UserList'

function App() {
  const [userId, setUserId] = useState(null);

  return (
    <section className="flex flex-col min-h-screen">
      <Menu />

      <HomeBanner />

      <section className="bg-light-gray flex-1 py-[140px]">
        <section className="container lg:px-[60px] md:px-[32px] sm:px-[16px] px-4 mb-[140px]">
          <h1 className="text-title1 mb-[50px] text-black text-center">
            Working with GET request
          </h1>

          <UserList
            shouldUserUpdate={userId}
          />
        </section>

        <section className="container lg:px-[60px] md:px-[32px] sm:px-[16px] px-4 mb-[100px]">
          <h1 className="text-title1 mb-[50px] text-black text-center">
            Working with POST request
          </h1>

          <div className="max-w-[380px] mx-auto">
            <UserForm
              updateUserList={setUserId}
            />
          </div>
        </section>
      </section>
    </section>
  )
}

export default App
