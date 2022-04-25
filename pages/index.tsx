import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/main.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
    <meta charSet='UTF-8' />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hoşgeldin - Vututu</title>
      </Head>
      <div id="particles-js"></div>
    <div className="background"></div>
    <div className="root">
        <div className="main">
            <h1>Vututu</h1>
            <p>Değişik insanların bulunduğu değişik bir grup, mı acaba??</p>
        </div>
        <div className="buttons">
        </div>
    </div>

    </div>
  )
}

export default Home
