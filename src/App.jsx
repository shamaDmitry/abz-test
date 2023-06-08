import { useState } from 'react'
import Menu from './Components/Base/Menu'
import HomeBanner from './Components/HomePage/HomeBanner'
import Button from './Components/Shared/Button'
import Input from './Components/Shared/Input'
import UserCard from './Components/Shared/UserCard'

function App() {
  return (
    <section className="flex flex-col min-h-screen">
      <Menu />

      <HomeBanner />

      <section className="bg-light-gray flex-1 py-[140px] ">
        <section className="container lg:px-[60px] md:px-[32px] sm:px-[16px] px-4 mb-[140px]">
          <h1 className="text-title1 mb-[50px] text-black text-center">
            Working with GET request
          </h1>

          <div className="gap-[29px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-[50px]">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </div>

          <div className="text-center">
            <Button
              type="yellow"
            >
              Show more
            </Button>
          </div>
        </section>

        <section className="container lg:px-[60px] md:px-[32px] sm:px-[16px] px-4 mb-[100px]">
          <h1 className="text-title1 mb-[50px] text-black text-center">
            Working with POST request
          </h1>

          <form>
            <Input
              className="mb-[50px]"
              placeholder="Your name"
            />

            <Input
              className="mb-[50px]"
              placeholder="Email"
            />

            <Input
              className="mb-[43px]"
              placeholder="Phone"
              helperText="+38 (XXX) XXX - XX - XX"
            />

            <p className="text-black text-base mb-[11px]">
              Select your position
            </p>

            <div class="flex items-center mb-4">
              <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
            </div>

            <div class="flex items-center mb-4">
              <input id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
            </div>
          </form>

        </section>
      </section>
    </section>
  )
}

export default App
