import Head from 'next/head'
import styles from './layout.module.scss'


const name:string = "CARRAK"

export const siteTitle = 'vututu'

export default function Layout({children, home}: {children: React.ReactNode, home?: boolean}) {
    return(
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favion.ico" />
                <meta name="sj"
                content='bruh'/>
       
        <meta name="og:title" content={siteTitle} />
            </Head>
            <header className={styles.header}>
              

      </header>
      <main>{children}</main>
      
        </div>
    )
}

