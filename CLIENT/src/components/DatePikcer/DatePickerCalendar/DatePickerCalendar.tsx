import { Dayjs } from 'dayjs';
import { FC, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { getCalendarRows } from '../Utils';

interface IDatePickerCalendarProps {
    shownDate: Dayjs;
    selectedDate: React.Dispatch<React.SetStateAction<Dayjs>>;
    onChange: (newDay: Dayjs) => void;
}
interface CellType {
    $type: string;
}
const DatePickerCalendar: FC<IDatePickerCalendarProps> = ({ shownDate, selectedDate, onChange }) => {
    //
    const rows = useMemo(() => getCalendarRows(shownDate), [shownDate]);
    //HANDLE SELECT DATE
    const handleSelectDate = (value: Dayjs) => {
        return onChange(value);
    };
    //

    return (
        <Wrapper>
            <Header>
                {rows[0].map(({ value }, i) => (
                    <Cell $type="cell" key={i}>
                        {value.format('dd')}
                    </Cell>
                ))}
            </Header>
            <WrapperDateCell>
                {rows.map((cell, rowIndex) => (
                    <RowCell key={rowIndex}>
                        {cell.map(({ text, value }, i) => (
                            <Cell
                                $type={value.toString() === selectedDate.toString() ? 'active' : 'date'}
                                key={rowIndex}
                                onClick={() => handleSelectDate(value)}
                            >
                                {text}
                            </Cell>
                        ))}
                    </RowCell>
                ))}
            </WrapperDateCell>

            <Calendar></Calendar>
        </Wrapper>
    );
};

export default DatePickerCalendar;
//
const Wrapper = styled.div``;
const Header = styled.header`
    margin-bottom: 8px;
    display: flex;
`;
const Calendar = styled.div``;
//
const Cell = styled.div<CellType>`
    padding: 4px;
    width: 38px;
    height: 38px;
    margin: 0 2px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    ${({ $type }) => {
        switch ($type) {
            case 'active':
                return css`
                    background-color: #0036cc;
                    color: #fff;
                `;
            case 'date':
                return css`
                    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
                    &:hover {
                        background-color: #e9e9e9;
                    }
                `;

            default:
                return css`
                    &:hover {
                        background-color: #e9e9e9;
                    }
                `;
        }
    }}
`;
const WrapperDateCell = styled.div``;
const RowCell = styled.div`
    display: flex;
`;
