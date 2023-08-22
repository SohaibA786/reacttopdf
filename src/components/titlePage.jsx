import './titlePage.css';
import Header from './subComponents/header';
import Footer from './subComponents/footer';

const TitlePage = () => {

    let titleData = [
        {
            title: 'Project address',
            data: 'A19 Southbound, Ingleby Arncliffe, Northallerton DL6 3LG, UK',
        },
        {
            title: 'Author',
            data: 'Aditya Garimella',
        },
        {
            title: 'Issue date & version',
            data: '20/04/2023 | K2 Base Version 3.1.74.1',
        },
    ]


    return (
        <div className='title-page'>
            {/* Background Image */}
            <div className='background-image' />
            {/* Patterns */}
            <img className='pattern-1' src='./Assets/pattern.svg' alt='pattern' />
            <img className='pattern-2' src='./Assets/pattern.svg' alt='pattern' />
            {/* Header */}
            <Header />
            {/* Main Body */}
            <main className='title-page-body'>
                <p>Base Report</p>
                <table>
                    <tbody>
                        {
                            titleData.map((item) => {
                                return (
                                    <tr key={item.title}>
                                        <td className='t-heading'>{item.title}:</td>
                                        <td className='t-body'>{item.data}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default TitlePage;