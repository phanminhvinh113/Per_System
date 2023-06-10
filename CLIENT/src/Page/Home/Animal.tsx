import { ForwardedRef, FunctionComponent, forwardRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import LazyImage from '../../components/custom/LazyImage';

interface AnimalProps {
    animal: string;
    ref?: ForwardedRef<HTMLDivElement>;
}
//
const Animal: FunctionComponent<AnimalProps> = forwardRef<HTMLDivElement, AnimalProps>(({ animal }, ref) => {
    return (
        <PokeStyle ref={ref}>
            <LazyImage src={animal} circle={true} size_circle={80} />
            <span>
                <h2>Dog</h2>
                <p>The dog is a domesticated descendant of the wolf. Also called the domestic dog,</p>
                <p>15,000 years ago before the development of agriculture</p>
            </span>
        </PokeStyle>
    );
});

export default Animal;
//
const PokeStyle = styled.div`
    width: 500px;
    border: 1px solid #eee;
    padding: 10px 20px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 6px;
    p {
        font-size: 15px;
        overflow-x: hidden;
        margin: 5px 0;
    }
`;
