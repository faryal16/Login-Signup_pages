import Link from 'next/link'

import { FaLeaf } from 'react-icons/fa'

function Header() {
  return (
    <div>
          <div className=" bg-red-100  text-red-800">
        <header className="flex justify-center items-center flex-col text-2xl bg-transparent" >
        <a className=" w-[68px] h-[55px] flex items-center justify-center mt-8 mb-2 shadow-xl hover:shadow-red-900 rounded-[50%]
          text-2xl hover:pt-2 bg-transparent hover:border-l-4 border-red-900"><h1 className="flex justify-center font-bold">FJ<FaLeaf /></h1></a>

          <ul  className="flex text-xl ">
            <li className=" p-2">
              <Link href="/" >Home</Link>
            </li>
            <li className=" p-2">
              <Link href="/about">About</Link>
            </li>
            <li className=" p-2">
              <Link href="/career">Career</Link>
            </li>
            <li className=" p-2">
              <Link href="/login">Login/SignUp</Link>
            </li>
          </ul>

        </header>
      </div>

    </div>
  )
}

export default Header