import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'
import Head from 'next/head'


export const metadata = {
  title: 'Promtopia',
  description: 'Discover & Share AI Prompts',


}

const RootLayout = ({ children }) => {
  return (

    <html>

      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <body>

        <Provider >
          <div className='main'>

          </div>
          <div className='gradient' />
          <main className='app'>
            <Nav />
            {children}

          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout;
