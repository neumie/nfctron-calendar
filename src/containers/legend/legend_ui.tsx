import { EventEditor } from '../../components/event_editor/event_editor';
import { LegendEvents } from './legend_events/legend_events';
import { LegendHeader } from './legend_header/legend_header';
import { Box } from '@mui/material';

const styles = {
  container: {
    display: 'grid',
    gridTemplateRows: 'auto auto 1fr',
    height: {
      xs: 'auto',
      md: '100vh',
    },
  },
  events: {
    padding: 2,
    overflowY: 'scroll',
  },
  editor: {
    display: 'flex',
    justifyContent: 'center',
    padding: 2,
  },
};

export const LegendUI = () => {
  return (
    <Box component='section' sx={styles.container}>
      <LegendHeader />

      <Box sx={styles.editor}>
        <EventEditor />
      </Box>
      <Box sx={styles.events}>
        <LegendEvents />
      </Box>
    </Box>
  );
};
