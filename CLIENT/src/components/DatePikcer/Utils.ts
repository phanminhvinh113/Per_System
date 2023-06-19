import { Dayjs } from 'dayjs';
//
export function changeDateMonth(date: Dayjs, isNextMonth: boolean): Dayjs {
    //
    if (date.month() === 0 && !isNextMonth) return date.set('year', date.year() - 1).set('month', 11);
    //
    if (date.month() === 11 && isNextMonth) return date.set('year', date.year() + 1).set('month', 0);
    //
    return date.add(isNextMonth ? 1 : -1, 'month');
}
//
export interface ICalendarCell {
    text: string;
    value: Dayjs;
}
//
export function getCalendarCells(date: Dayjs): ICalendarCell[] {
    // GET DAYS IN A CURRENT MONTH
    const daysArray = new Array(date.daysInMonth()).fill(1);
    const calendarCells: ICalendarCell[] = [];
    //
    const prepareCell = (date: Dayjs, dayNumber: number) => {
        return {
            text: String(dayNumber),
            value: date.clone().set('date', dayNumber),
        };
    };
    //
    daysArray.forEach((_, index) => {
        calendarCells.push(prepareCell(date, index + 1));
    });
    //
    const DAYS_IN_CELL: number = 35; // AMOUNT DAY DISPLAY IN A CELL TABLE
    const cellsToAdd: number = DAYS_IN_CELL - daysArray.length;
    //
    const lastMonth = date.subtract(1, 'month');
    //
    for (let i = 0; i < Math.floor(cellsToAdd / 2); i++) {
        calendarCells.unshift(prepareCell(lastMonth, lastMonth.daysInMonth() - i));
    }
    //
    const nextMonth = date.add(1, 'month');
    for (let i = 0; i < Math.round(cellsToAdd / 2); i++) {
        calendarCells.push(prepareCell(nextMonth, i + 1));
    }
    //
    return calendarCells;
}
//
export function getCalendarRows(date: Dayjs): Array<ICalendarCell[]> {
    //
    const cells = getCalendarCells(date);
    const rows: Array<ICalendarCell[]> = [];
    //
    for (let i = 0; i < cells.length; i += 7) {
        rows.push(cells.slice(i, i + 7));
    }
    //
    return rows;
}
