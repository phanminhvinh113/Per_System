import { FC, useState } from 'react';
import styled from 'styled-components';

interface IToggleSwitchesProps {
    size?: number;
    handleOnClick: () => void | undefined;
}
//DEFAULT VALUE
const StandardValue = {
    WIDTH_SWITCH: 60,
    HEIGHT_SWITCH: 34,
    SIZE: 26,
    LEFT_DISTANCE: 5,
    RIGHT_DISTANCE: 30,
};
// DEFAULT PROPS
const defaultProps: IToggleSwitchesProps = {
    size: StandardValue.SIZE,
    handleOnClick: () => {},
};

const ToggleSwitches: FC<IToggleSwitchesProps> = ({ size = StandardValue.SIZE, handleOnClick }) => {
    const [checked, setChecked] = useState<boolean>(false);
    //
    const handleToggle = () => {
        handleOnClick();
        setChecked(!checked);
    };
    //
    return (
        <SwitchContainer onClick={handleToggle} $size={size}>
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
interface StyledProps {
    checked?: boolean;
    $size: number;
}

//
const SwitchContainer = styled.div<StyledProps>`
    position: relative;
    display: inline-block;
    width: ${({ $size }) => ($size * StandardValue.WIDTH_SWITCH) / StandardValue.SIZE + 'px'};
    height: ${({ $size }) => ($size * StandardValue.HEIGHT_SWITCH) / StandardValue.SIZE + 'px'};
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
    checked?: boolean;
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

const StyledSlider = styled.span<StyledProps>`
    position: absolute;
    content: '';
    height: ${({ $size }) => $size + 'px'};
    width: ${({ $size }) => $size + 'px'};
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: 0.4s all ease-in-out;
    left: ${({ checked, $size }) =>
        checked
            ? ($size * StandardValue.LEFT_DISTANCE) / StandardValue.SIZE + 'px'
            : ($size * StandardValue.RIGHT_DISTANCE) / StandardValue.SIZE + 'px'};
`;
