import { FunctionComponent, memo } from 'react';
import styled, { keyframes } from 'styled-components';
import { DEFAULT_PROPS_SKELETON } from './constant';
import { SkeletonProps, SkeletonThemeProps } from '../interface';

//
//
const Skeleton: FunctionComponent<SkeletonProps> = (props) => {
    // DESTRUCT PROPS AND DEFAULT
    const {
        count = DEFAULT_PROPS_SKELETON.count,
        height = DEFAULT_PROPS_SKELETON.height,
        width = DEFAULT_PROPS_SKELETON.width,
        backgroundColor = DEFAULT_PROPS_SKELETON.backgroundColor,
        highlightColor = DEFAULT_PROPS_SKELETON.highlightColor,
        borderRadius = DEFAULT_PROPS_SKELETON.borderRadius,
        circle = DEFAULT_PROPS_SKELETON.circle,
        duration = DEFAULT_PROPS_SKELETON.duration,
        direction = DEFAULT_PROPS_SKELETON.direction,
        enableAnimation = DEFAULT_PROPS_SKELETON.enableAnimation,
        size_circle = DEFAULT_PROPS_SKELETON.size_circle,
    } = props;
    //

    return (
        <>
            {new Array(count).fill(0).map((_: any, index: number) => (
                <SkeletonStyle
                    {...props}
                    key={index}
                    height={height}
                    width={width}
                    backgroundColor={backgroundColor}
                    color={highlightColor}
                    borderRadius={borderRadius}
                    size_circle={size_circle}
                    circle={circle}
                    duration={duration}
                    direction={direction}
                    enableAnimation={enableAnimation}
                />
            ))}
        </>
    );
};
// SKELETON THEME TO WRAP FOR SKELETON
export const SkeletonTheme: FunctionComponent<SkeletonThemeProps> = memo((props) => {
    const {
        children,
        width = DEFAULT_PROPS_SKELETON.width_theme,
        backgroundColor = DEFAULT_PROPS_SKELETON.backgroundColor,
        borderRadius = DEFAULT_PROPS_SKELETON.borderRadius,
        repeat = DEFAULT_PROPS_SKELETON.repeat,
        margin = DEFAULT_PROPS_SKELETON.margin,
    } = props;
    return (
        <Wrapper>
            {new Array(repeat).fill(0).map((_, index) => (
                <SkeletonThemeStyle
                    key={index}
                    {...props}
                    width={width}
                    backgroundColor={backgroundColor}
                    borderRadius={borderRadius}
                    margin={margin}
                >
                    {children}
                </SkeletonThemeStyle>
            ))}
        </Wrapper>
    );
});
//
export default memo(Skeleton);
//animation for skeleton
const shimmerLTR = keyframes`
    100% {
      transform: translateX(100%);
    }
`;
const shimmerRTL = keyframes`
    100% {
      transform: translateX(-200%);
    }
`;
// Style Skeleton
const SkeletonStyle = styled.div<SkeletonProps>`
    position: relative;
    margin: 5px 0;
    height: ${({ height, circle, size_circle }) => (circle ? size_circle : height)};
    width: ${({ width, circle, size_circle }) => (circle ? size_circle : width)};
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ color }) => color};
    border-radius: ${({ circle, borderRadius }) => (circle ? '50%' : borderRadius + 'px')};
    overflow: hidden;
    ::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(${({ direction }) => (direction === 'rtl' ? '100%' : '-200%')});
        background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0,
            rgba(255, 255, 255, 0.2) 20%,
            rgba(255, 255, 255, 0.5) 60%,
            rgba(255, 255, 255, 0)
        );

        animation: ${({ direction }) => (direction === 'rtl' ? shimmerRTL : shimmerLTR)}
            ${({ duration, enableAnimation }) => (enableAnimation ? duration + 's' : '0s')} infinite;
    }
`;

// Style Skeleton Schema
const Wrapper = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center; */
`;
const SkeletonThemeStyle = styled.div<SkeletonThemeProps>`
    margin: ${({ margin }) => margin};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-radius: ${({ borderRadius }) => borderRadius + 'px'};
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
    border: 1px solid #eee;
    border-radius: ${({ borderRadius }) => borderRadius};
    padding: 20px;
`;
