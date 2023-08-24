import Header from './subComponents/header';
import Footer from './subComponents/footer';
import Patterns from './subComponents/patterns';
import './disclaimer.css';

const Disclaimer = () => {
    let contactUs = {
        address: "Unit 46 Easter Park Benyon Road Aldermaston, RG7 2PQ Great Britain",
        phone: "+44 1189 701280 ",
        email: "info@k2-systems.uk.com",
        website: "k2-systems.com/en",
    }

    return (
        <div id='' className='disclaimer-page'>
            {/* Background Image */}
            <div className='background-image' />
            {/* Patterns */}
            <Patterns />
            {/* Header */}
            <Header />
            {/* Main Body */}
            <main className='disclaimer-page-body'>
                <p>Disclaimer</p>
                <span>
                    The information in this document may contain predictive statements including without limitation, statements regarding the future financial and operating results, future product portfolio, new technology etc. There are a number of factors that could cause actual results and developments to differ materially from those expressed or implied in the predictive statements. Therefore, such information is provided for reference purpose only and constitutes neither an offer nor an acceptance. Company may change the information at any time without notice.
                </span>

            </main>

            {/* Contact US */}
            <div className='disclaimer-contact-us'>
                <h3>Contact Us</h3>
                <p>
                    {contactUs.address}<br />
                    {contactUs.phone}<br />
                    {contactUs.email}<br />
                    {contactUs.website}<br />
                </p>

            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Disclaimer;