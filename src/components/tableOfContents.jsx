import './tableOfContents.css';
import Header from './subComponents/header';
import Footer from './subComponents/footer';
import Patterns from './subComponents/patterns';

const TableofContent = () => {

    let toc = [

        {
            title: 'Project overview',
            page: 3,
            href: '#project-overview',
        },
        {
            title: 'Roof 1',
            page: 4,
            href: '#project-overview',
            'Roof 1': [
                {
                    title: 'Assembly plan',
                    page: 5,
                    href: '#project-overview',
                },
                {
                    title: 'Results',
                    page: 6,
                    href: '#project-overview',
                },
                {
                    title: 'Structural analysis report',
                    page: 8,
                    href: '#project-overview',
                },
            ]
        },
        {
            title: 'Roof 2',
            page: 4,
            href: '#project-overview',
            'Roof 2': [
                {
                    title: 'Assembly plan',
                    page: 5,
                    href: '#project-overview',
                },
                {
                    title: 'Results',
                    page: 6,
                    href: '#project-overview',
                },
                {
                    title: 'Structural analysis report',
                    page: 8,
                    href: '#project-overview',
                },
            ]
        },
        {
            title: 'Roof 3',
            page: 4,
            href: '#project-overview',
            'Roof 3': [
                {
                    title: 'Assembly plan',
                    page: 5,
                    href: '#project-overview',
                },
                {
                    title: 'Results',
                    page: 6,
                    href: '#project-overview',
                },
                {
                    title: 'Structural analysis report',
                    page: 8,
                    href: '#project-overview',
                },
            ]
        },
    ]


    return (
        <div className='table-of-contents'>
            {/* Patterns */}
            <Patterns />
            {/* Header */}
            <Header />
            {/* Main Body */}
            <main className='toc-body'>
                <p>Contents</p>
                {toc.map((item, index) => {
                    return (
                        <div className='toc-main' key={index}>
                            <div className='toc-entry'>
                                <a href={item.href}><p>{item.title}</p></a>
                                <a href={item.href}><p>{item.page}</p></a>
                            </div>
                            {item[item.title] && item[item.title].map((subItem, subIndex) => {
                                return (
                                    <div key={subIndex} className='toc-sub-entry'>
                                        <a href={subItem.href}><p>{subItem.title}</p></a>
                                        <a href={subItem.href}><p>{subItem.page}</p></a>
                                    </div>
                                )
                            })}

                        </div>
                    )
                })
                }
            </main>
            {/* Footer */}
            <Footer pageNo="2/10" />
        </div>
    );
};

export default TableofContent;