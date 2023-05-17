'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'







const Nav = () => {
  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null)
  const [toggleDropdown, setToggleDropdown] = useState(false)


  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()
      setProviders(response);
    }
    setUpProviders();
  }, [])
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href={'/'} className="felx gap-2 flex-center" >
        <Image
          alt="Promptopia Logo"
          width={30}
          height={30}
          src={'./assets/images/logo.svg'}
        />

        <p className="logo_text">
          Promptopia
        </p>
      </Link>



      {/* Desktop navigation */}

      <div className="sm:flex hidden">
        {
          session?.user ?
            (

              <div className="flex gap-3 md:gap-5">
                <Link href={'/create-prompt'}
                  className="black_btn"
                >
                  Create Post
                </Link>
                <button type="button" onClick={signOut} className="outline_btn">
                  Sign Out
                </button>



                <Link href={'/profile'}>
                  <Image
                    src={session?.user.image}
                    width={37}
                    height={37}
                    className="rounded-full"
                    alt="profile"
                  />
                </Link>

              </div>
            ) : (
              <>{(
                <Link className="black_btn" href={'http://localhost:3000/api/auth/signin'} >
                  Sign In
                </Link>
              )
              }</>
            )
        }
      </div>

      {/* mobile navigation  */}
      <div className="sm:hidden flex relative">
        {
          session?.user ? (
            <div>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
                onClick={() => { setToggleDropdown((prev) => !prev) }}
              />

              {
                toggleDropdown && (
                  <div className="dropdown">
                    <Link className="dropdown_link"
                      onClick={() => setToggleDropdown(false)}
                      href={'/profile'}>
                      My Profile
                    </Link>
                    <Link className="dropdown_link"
                      onClick={() => setToggleDropdown(false)}
                      href={'/create-prompt'}>
                      Create Prompt
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setToggleDropdown(false)
                        signOut()
                      }}
                      className="nt-5 w-full black_btn"
                    >
                      Sign Out
                    </button>
                  </div>
                )
              }
            </div>
          ) : (
            <>{
              <Link className="black_btn" href={'http://localhost:3000/api/auth/signin'} >
                  Sign in
                </Link>
              // providers && Object.values(providers).map((provider) => {
              //   return (
              //     <button
              //       key={provider.name}
              //       type="button"
              //       onClick={() => signIn(provider.id)}
              //       className="black_btn"
              //     >
              //       Sign In
              //     </button >
              //   )
              // })
            }</>

          )
        }
      </div>



    </nav>
  )
}

export default Nav
