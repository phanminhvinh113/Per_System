import { FC, useState } from 'react';
import styled from 'styled-components';

interface IToggleSwitchesProps {
    size?: number;
}
const defaultProps: IToggleSwitchesProps = {
    size: 26,
};

const ToggleSwitches: FC<IToggleSwitchesProps> = ({ size = 26 }) => {
    const [checked, setChecked] = useState<boolean>(false);
    //
    const handleToggle = () => {
        setChecked(!checked);
    };
    //
    return (
        <SwitchContainer onClick={handleToggle}>
            <HiddenCheckbox checked={checked} onChange={handleToggle} />
            <StyledSwitch checked={checked}>
                <StyledSlider checked={checked} $size={size} />
            </StyledSwitch>
        </SwitchContainer>
    );
};
//
ToggleSwitches.defaultProps = defaultProps;
//
export default ToggleSwitches;
//
const SwitchContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 0;
    height: 0;
`;
//
interface StyledSwitchProps {
    checked: boolean;
}

const StyledSwitch = styled.div<StyledSwitchProps>`
    display: flex;
    align-items: center;
    justify-content: ${({ checked }) => (checked ? 'flex-end' : 'flex-start')};
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 34px;
    background-color: ${({ checked }) => (checked ? '#ccc' : '#4271C3')};
    transition: all 0.5s linear;
`;

interface StyledSliderProps {
    checked: boolean;
    $size: number;
}

const StyledSlider = styled.span<StyledSliderProps>`
    position: absolute;
    content: '';
    height: ${({ $size }) => $size + 'px'};
    width: ${({ $size }) => $size + 'px'};
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: 0.4s all ease-in-out;
    transform: translateX(${({ checked }) => (checked ? '5px' : '0px')});
    left: ${({ checked }) => (checked ? '0px' : '30px')};
`;
