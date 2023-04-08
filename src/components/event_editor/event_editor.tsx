import { useEventEditor } from "./event_editor_hook";
import { EventEditorUI } from "./event_editor_ui";

export const EventEditor = () => {
  const {
    selectedEventId,
    handleEventAdd,
    eventTitle,
    handleEventTitleChange,
    eventFromDateDayjs,
    handleEventFromChange,
    eventFromTimeDayjs,
    handleEventFromTimeChange,
    eventToDateDayjs,
    handleEventToChange,
    eventToTimeDayjs,
    handleEventToTimeChange,
    eventColor,
    handleEventColorChange,
    handleEventEdit,
    handleExitEditMode,
  } = useEventEditor();

  return (
    <EventEditorUI
      onEventAdd={handleEventAdd}
      eventTitle={eventTitle}
      onEventTitleChange={handleEventTitleChange}
      eventFromDateDayjs={eventFromDateDayjs}
      onEventFromChange={handleEventFromChange}
      eventFromTimeDayjs={eventFromTimeDayjs}
      onEventFromTimeChange={handleEventFromTimeChange}
      eventToDateDayjs={eventToDateDayjs}
      onEventToChange={handleEventToChange}
      eventToTimeDayjs={eventToTimeDayjs}
      onEventToTimeChange={handleEventToTimeChange}
      eventColor={eventColor}
      onEventColorChange={handleEventColorChange}
      selectedEventId={selectedEventId}
      onEventEdit={handleEventEdit}
      onExitEditMode={handleExitEditMode}
    />
  );
};
