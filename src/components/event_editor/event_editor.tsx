import { EventEditorUI } from "./event_editor_ui";
import { useEventEditor } from "./event_editor_hook";
import dayjs from "dayjs";

export const EventEditor = () => {
  const {
    selectedEventId,
    handleEventAdd,
    eventTitle,
    handleEventTitleChange,
    eventFromDate,
    handleEventFromChange,
    eventFromTime,
    handleEventFromTimeChange,
    eventToDate,
    handleEventToChange,
    eventToTime,
    handleEventToTimeChange,
    eventColor,
    handleEventColorChange,
    handleEventEdit,
    handleExitEditMode,
  } = useEventEditor();
  const eventFromDateDayjs = dayjs(eventFromDate);
  const eventFromTimeDayjs = dayjs(eventFromTime);
  const eventToDateDayjs = dayjs(eventToDate);
  const eventToTimeDayjs = dayjs(eventToTime);

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
