import { useEventEditor } from './event_editor_hook';
import { EventEditorUI } from './event_editor_ui';

export const EventEditor = () => {
  const {
    selectedEventId,
    handleEventAdd,
    eventTitle,
    eventFromDateDayjs,
    eventFromTimeDayjs,
    eventToDateDayjs,
    eventToTimeDayjs,
    eventColor,
    handleEventEdit,
    handleExitEditMode,
    handleFormStateChange,
  } = useEventEditor();

  return (
    <EventEditorUI
      onEventAdd={handleEventAdd}
      eventTitle={eventTitle}
      eventFromDateDayjs={eventFromDateDayjs}
      eventFromTimeDayjs={eventFromTimeDayjs}
      eventToDateDayjs={eventToDateDayjs}
      eventToTimeDayjs={eventToTimeDayjs}
      eventColor={eventColor}
      selectedEventId={selectedEventId}
      onEventEdit={handleEventEdit}
      onExitEditMode={handleExitEditMode}
      onFormStateChange={handleFormStateChange}
    />
  );
};
