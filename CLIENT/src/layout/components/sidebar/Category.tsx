import { FC, memo } from 'react';
import { RouteElementCategory } from './RouteElement.config';
import { useNavigate } from 'react-router-dom';
import { ElementStyle, SideBarStyle, Title, Image } from './SideBar.style';
import LazyImage from '../../../components/custom/LazyImage';

interface CategoryProps {}

const Category: FC<CategoryProps> = () => {
    const navigate = useNavigate();
    return (
        <SideBarStyle>
            <h2>Category</h2>
            {RouteElementCategory.map((element, index) => (
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

export default memo(Category);
