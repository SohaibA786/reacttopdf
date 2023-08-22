import './diagramView.css';
import Header from './subComponents/header';
import Footer from './subComponents/footer';

const DiagramView = () => {

    return (
        <div id='diagram-view' className='diagram-view'>
            {/* Patterns */}
            <img className='pattern-1' src='./Assets/pattern.svg' alt='pattern' />
            <img className='pattern-2' src='./Assets/pattern.svg' alt='pattern' />
            {/* Header */}
            <Header />
            {/* Main Body */}
            <main className='dv-body'>
                <p>Detail diagram view</p>
                <img className='img' src='./Assets/dv1.png' alt='map' />
                <img className='img1' src='./Assets/dv.png' alt='map' />
            </main>

            {/* Footer */}
            <Footer pageNo="3/10" />
        </div>
    );
};

export default DiagramView;