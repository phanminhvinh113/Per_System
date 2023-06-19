import { useState } from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';
import DatePickerSelector from './DatePickerSelector/DatePickerSelector';
import DatePickerCalendar from './DatePickerCalendar/DatePickerCalendar';
import dayjs from 'dayjs';
//
export interface IDatePickerProps {
    selectedDate?: Dayjs;
    selectorDateFormat?: string;

    onChange?: (newDate: Dayjs) => void;
}

const DatePicker: React.FC<IDatePickerProps> = (props) => {
    const [selectedDate, setSelectedDate] = useState(dayjs());

    //
    return (
        <Wrapper>
            <DatePickerSelector shownDate={selectedDate} setShownDate={setSelectedDate} />
            <DatePickerCalendar shownDate={selectedDate} selectedDate={setSelectedDate} onChange={setSelectedDate} />
        </Wrapper>
    );
};

export default DatePicker;
//
const Wrapper = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 8px;
    border-radius: 8px;
    width: 320px;
`;
