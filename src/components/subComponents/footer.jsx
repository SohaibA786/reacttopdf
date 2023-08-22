import './footer.css'


const Footer = ({pageNo}) => {

    return (
        <footer>
            <div className='divider-line-footer' />
            <div className='footer'>
                <div className='footer-left'>
                    <img src='./Assets/bh-group.svg' alt='logo' />
                    <div className='vertical-line' />
                    <p>Created by BH Smith and Group</p>
                </div>
                <div className='footer-right'>
                    {pageNo}
                </div>
            </div>
        </footer>
    );
}

export default Footer;