import AboutUs from '@/component/about-us';
import Elevator from '@/component/elevator';
import Escalator from '@/component/escalator';
import Footer from '@/component/footer';
import Header from '@/component/header';
import HookMessage from '@/component/hook-message';
import InquiryForm from '@/component/inquiry-form';
import OurClient from '@/component/our-client';
import OurProduct from '@/component/our-product';
import WebBanner from '@/component/web-banner';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <WebBanner />
        <InquiryForm />
        <AboutUs />
        <OurProduct />
        <Elevator />
        <Escalator />
        <OurClient />
        <HookMessage />
      </main>
      <Footer />
    </div>
  );
}
