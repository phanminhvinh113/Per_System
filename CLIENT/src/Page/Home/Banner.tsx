import { CSSProperties, FC, memo, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../../hooks/useFetch';
import Spinner from '../../components/animation/Spinner';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled, { css } from 'styled-components';
import Skeleton, { SkeletonTheme } from '../../components/skeleton/Skeleton';
//CUSTOM BUTTON FOR SLIDE
interface SampleButtonProps {
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
}
//
const SampleNextButton: FC<SampleButtonProps> = memo((props) => {
    //
    const { className, style, onClick } = props;
    //
    return (
        <ButtonSlick className={className} style={style} onClick={onClick} position="right">
            <FontAwesomeIcon icon={faAngleRight} />
        </ButtonSlick>
    );
});
//
const SamplePreviousButton: FC<SampleButtonProps> = memo((props) => {
    const { className, style, onClick } = props;
    return (
        <ButtonSlick className={className} style={style} onClick={onClick} position="left">
            <FontAwesomeIcon icon={faAngleLeft} />
        </ButtonSlick>
    );
});

interface BannerProps {}
const Banner: FC<BannerProps> = () => {
    //
    const { data, isLoading, error } = useFetch('https://dog.ceo/api/breed/hound/images/random/5');
    if (isLoading)
        return (
            <SlideWrapper>
                <Skeleton count={1} borderRadius={15} height="200px" />
            </SlideWrapper>
        );
    //
    const settings = {
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <SampleNextButton />,
        prevArrow: <SamplePreviousButton />,
    };
    //
    const imageList: string[] = data?.message;
    //
    return (
        <SlideWrapper>
            <Slider {...settings}>
                {imageList &&
                    imageList.map((url: string, index: number) => {
                        return (
                            <Element key={index}>
                                <Image src={url}></Image>
                            </Element>
                        );
                    })}
            </Slider>
        </SlideWrapper>
    );
};
export default memo(Banner);
//
const SlideWrapper = styled.div`
    position: relative;
    width: 80%;
    height: 100%;
    border-radius: 15px;
    slick-slider,
    slick-list,
    slick-list {
        border-radius: 15px;
    }
`;
const Element = styled.div`
    border-radius: 15px;
    cursor: pointer;
`;
interface ImageStyledProps {
    src: string;
}
const Image = styled.div<ImageStyledProps>`
    height: 200px;
    width: 100%;
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 15px;
`;
//
interface ButtonStyledProps {
    position?: string;
}
//STYLED BUTTON CUSTOM
const ButtonSlick = styled.button<ButtonStyledProps>`
    position: absolute;
    display: flex !important;
    justify-content: center;
    align-items: center;
    padding: 20px 20px;
    border-radius: 50%;
    z-index: 1000;
    ::before {
        opacity: 0.2;
        font-size: 35px;
    }
    ${({ position }) => {
        switch (position) {
            case 'left':
                return css`
                    left: 5px;
                `;
            case 'right':
                return css`
                    right: 5px;
                `;
            default:
                break;
        }
    }}
`;
