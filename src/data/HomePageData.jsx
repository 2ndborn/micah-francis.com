import styles from '../styles/HomePage.module.css';
import NatWestIcon from '../components/NatwestIcon';
import Metro from '../components/Metro';
import CivilSer from '../components/CivilSer';
import South from '../components/South';

export const HomePageData = [
    {
        icons: [<i className="fa-brands fa-html5"></i>,<i className="fa-brands fa-css3-alt"></i>,<i className="fa-brands fa-js"></i>,<i className="fa-brands fa-python"></i>],
        paragraph:`Qualified developer providing freelance and employment services.`,
        button: 'See Portfolio',
        link: '/portfolio',
        x: '-100%'
    },
    {
        icons: [
            <NatWestIcon className={styles.icon} />,
            <Metro className={styles.icon} />,
            <CivilSer className={styles.icon} />,
            <South className={styles.icon} />
        ],
        paragraph:`With over 2 decades of experience in 
        people management in a ranges of industries.`,
        button: 'See About Me',
        link: '/about',
        x: '100%'
    },
]