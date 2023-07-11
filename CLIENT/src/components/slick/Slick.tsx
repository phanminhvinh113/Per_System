import { FC, useRef, useState } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

interface SlickProps {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    slides: any[];
}
//
const defaultProps: SlickProps = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slides: [],
};
//
const Slick: FC<SlickProps> = (props) => {
    //
    const { dots, infinite, speed, slidesToShow, slidesToScroll, slides } = props;
    //
    const [activeIndex, setActiveIndex] = useState<number>(0);
    //
    const imageRef = useRef<HTMLImageElement>(null);

    const handlePrevSlide = () => {
        console.log(imageRef.current);
        setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };
    //
    const handleNextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
        console.log(imageRef.current);
    };
    //
    const currentSlide = slides[activeIndex];
    //

    return (
        <SlickWrapper>
            <ButtonSlick position="left" onClick={handlePrevSlide}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </ButtonSlick>
            <SlickContent>
                {!!slides.length &&
                    slides.map((item, index) => (
                        <SlickElement key={index}>
                            <Image
                                src={item}
                                ref={activeIndex === index ? imageRef : null}
                                key={index}
                                active={activeIndex === index ? true : false}
                            />
                        </SlickElement>
                    ))}
            </SlickContent>
            <ButtonSlick position="right" onClick={handleNextSlide}>
                <FontAwesomeIcon icon={faChevronRight} />
            </ButtonSlick>
        </SlickWrapper>
    );
};
//
Slick.defaultProps = defaultProps;
//
export default Slick;
// Animation

// Styled Component
const SlickWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;
const SlickElement = styled.div`
    display: block;
`;
//
interface ImageStyleProps {
    active: boolean;
}
const Image = styled.img<ImageStyleProps>``;
const SlickContent = styled.div`
    display: flex;
`;
interface ButtonStyledProps {
    position?: string;
}
const ButtonSlick = styled.button<ButtonStyledProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    color: #fff;
    padding: 12px 15px;
    border-radius: 50%;
    &:hover {
        background-color: #ccc;
    }
`;
