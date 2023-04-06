import { EventEditorUI } from "./event_editor_ui";
import { useEventEditor } from "./event_editor_hook";
import dayjs from "dayjs";

export const EventEditor = () => {
  const {
    eventTitle,
    handleEventTitleChange,
    eventFrom,
    handleEventFromChange,
    eventFromTime,
    handleEventFromTimeChange,
    eventTo,
    handleEventToChange,
    eventToTime,
    handleEventToTimeChange,
    eventColor,
    handleEventColorChange,
  } = useEventEditor();
  const eventFromDayjs = dayjs(eventFrom);
  const eventFromTimeDayjs = dayjs(eventFromTime);
  const eventToDayjs = dayjs(eventTo);
  const eventToTimeDayjs = dayjs(eventToTime);

  return (
    <EventEditorUI
      eventTitle={eventTitle}
      onEventTitleChange={handleEventTitleChange}
      eventFromDayjs={eventFromDayjs}
      onEventFromChange={handleEventFromChange}
      eventFromTimeDayjs={eventFromTimeDayjs}
      onEventFromTimeChange={handleEventFromTimeChange}
      eventToDayjs={eventToDayjs}
      onEventToChange={handleEventToChange}
      eventToTimeDayjs={eventToTimeDayjs}
      onEventToTimeChange={handleEventToTimeChange}
      eventColor={eventColor}
      onEventColorChange={handleEventColorChange}
    />
  );
};
