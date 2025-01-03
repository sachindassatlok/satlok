import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '../components/Banner/Banner';
import Hero from '../components/Hero/Hero';
import Locations from '../components/Locations/Locations';
import Events from '../components/Events/Events';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import SocialReforms from '../components/SocialReforms/SocialReforms';
import GetBooks from '../components/GetBooks/GetBooks';
import Testimonials from '../components/Testimonials/Testimonials';
import Blog from '../components/Blog/Blog';
import Connect from '../components/Connect/Connect';
import FAQ from '../components/FAQ/FAQ';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Satlok Ashram - A Spiritual Revolution</title>
        <meta name="description" content="Welcome to Satlok Ashram - A center for spiritual enlightenment and inner peace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4">
        <Banner />
        <Hero />
        <Locations />
        <Events />
        <WhyChooseUs />
        <SocialReforms />
        <GetBooks />
        <Testimonials />
        <Blog />
        <Connect />
        {/* FAQ Section */}
        <FAQ />
      </main>
    </div>
  );
};

export default Home;
