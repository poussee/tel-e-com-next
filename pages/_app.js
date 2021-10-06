import '../styles/globals.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Head from 'next/head';
// import Footer from './Components/Footer';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.png" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#085586" />
				<meta name="description" content="Tel&Com" />
				<meta
					property="og:image"
					content="https://www.telecomsa.com.br/logo-og-image.png"
				/>
				<meta
					property="og:image:secure_url"
					content="https://www.telecomsa.com.br/logo-og-image.png"
				/>
				<meta property="og:url" content="https://www.telecomsa.com.br/" />
				<meta property="og:type" content="website" />
			</Head>
			<Header />;
			<Menu />
			<Component {...pageProps} />;{/* <Footer />; */}
			<Footer />
		</>
	);
}

export default MyApp;
