import { Dayjs } from 'dayjs';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { changeDateMonth } from '../Utils';
import { ChevronDownIcon } from '../../../assets/Icons/ChevronDownIcon';

export interface IDatePickerSelectorProps {
    shownDate: Dayjs;
    setShownDate: React.Dispatch<React.SetStateAction<Dayjs>>;
}
interface IconType {
    $type: 'left' | 'right' | string;
}
const DatePickerSelector: FC<IDatePickerSelectorProps> = ({ shownDate, setShownDate }) => {
    //
    const handleOnClick = (isNextMonth: boolean) => {
        return setShownDate(changeDateMonth(shownDate, isNextMonth));
    };
    //
    return (
        <Wrapper>
            <Icon $type="left" onClick={() => handleOnClick(false)}>
                <ChevronDownIcon />
            </Icon>
            <DateContent>{shownDate.format('MMMM YYYY')}</DateContent>
            <Icon $type="right" onClick={() => handleOnClick(true)}>
                <ChevronDownIcon />
            </Icon>
        </Wrapper>
    );
};

export default DatePickerSelector;
//
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 42px;
    border-bottom: 1px solid #b3b3b3;
    margin-bottom: 8px;
`;
//
const Icon = styled.button<IconType>`
    width: 26px;
    height: 26px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: #e0e0e0;
    }
    ${({ $type }) => {
        switch ($type) {
            case 'left': {
                return css`
                    transform: rotate(90deg);
                `;
            }
            case 'right': {
                return css`
                    transform: rotate(-90deg);
                `;
            }
        }
    }}
`;
const DateContent = styled.div``;
