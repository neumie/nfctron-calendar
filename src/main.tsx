import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { Calendar } from './containers/calendar/calendar';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <CssBaseline />
    <Calendar />
  </>,
);
