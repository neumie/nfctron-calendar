import { CalendarContextProvider } from './calendar_context';
import { CalendarUI } from './calendar_ui';

export const Calendar = () => (
  <CalendarContextProvider>
    <CalendarUI />
  </CalendarContextProvider>
);
