import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";


const Unknown:NextPage = () => {
    return (
        <div>
            <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Sayfa Bulunanadı - Vututu.xyz</title>
            </Head>

            <div className="background"></div>

<div className="container">
    <div className="warn">
        <h1>404</h1>
        <p>Sayfa sunucu üzerinde bulunmadı, belkide yanlış yere geldin?</p>
        <Link href="/"><a>Ana sayfaya git</a></Link>
    </div>
</div>
        </div>
    );
}

export default Unknown;