import './header.css';


const Header = () => {
    return (
        <>
            {/* Header */}
            < header className='title-page-header' >
                <div className='title-page-header-left'>
                    <img src='./Assets/K2.png' alt='logo' />
                    <h1>K2 Systems</h1>
                </div>
                <div className='title-page-header-right'>
                <h1>PV Smith Simulator</h1>
                </div>
            </header >
            {/* Divider Line */}
            < div className='divider-line' />
        </>
    );
}

export default Header;