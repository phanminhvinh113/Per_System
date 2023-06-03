import styled from 'styled-components';
import HeaderDefault from '../../components/Header/Header.default';
import GlobalFont from '../../assets/font/GlobalFont';
import LazyImage from '../../components/Lazy/LazyImage';
interface HomeProps {}
//

const Home = () => {
    const ListImage = {
        original: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
        large2x:
            'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        large: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        medium: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350',
        small: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130',
        portrait:
            'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
        landscape:
            'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        tiny: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
    };
    return (
        <HomePage>
            <GlobalFont />
            <HeaderDefault />
            <div style={{ height: '1000px' }}></div> {/* Placeholder for scroll */}
            {Object.entries(ListImage).map(([key, src], index) => (
                <LazyImage key={index} src={src} alt={key} />
            ))}
            <LazyImage src={'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg'} alt={'1'} />
            <LazyImage src={'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg'} alt={'2'} />
            <LazyImage src={'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg'} alt={'3'} />
        </HomePage>
    );
};

export default Home;

//
const HomePage = styled.div`
    font-family: 'Roboto';
`;
