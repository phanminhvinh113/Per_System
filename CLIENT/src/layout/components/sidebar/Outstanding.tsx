import { FC, memo } from 'react';
import { RouteElementOutstanding } from './RouteElement.config';
import { Link, useNavigate } from 'react-router-dom';
import { ElementStyle, SideBarStyle, Title, Image } from './SideBar.style';
import LazyImage from '../../../components/image/LazyImage';

interface OutstandingProps {}

const Outstanding: FC<OutstandingProps> = () => {
    const navigate = useNavigate();
    return (
        <SideBarStyle>
            <h1>Outstanding</h1>
            {RouteElementOutstanding.map((element, index) => (
                <ElementStyle key={index} onClick={() => navigate(element.path)}>
                    <Image>
                        <LazyImage src={element.imageUrl} circle={true} size_circle={32} />
                    </Image>
                    <Title>{element.title}</Title>
                </ElementStyle>
            ))}
        </SideBarStyle>
    );
};

export default memo(Outstanding);
//
