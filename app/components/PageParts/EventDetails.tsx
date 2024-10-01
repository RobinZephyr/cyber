import { events } from "@/app/src/constant/EventsMap";

export const EventDetails = () => {
  return (
    <div className="grid grid-cols-2">
      {events.map((e, index) => (
        <div key={index}>
          <div>{e.title}</div>
          <div>{e.date}</div>
          <div>Total Instructions: {e.days}</div>
          <div>
            {e.benefits.map((ben, index) => (
              <div key={index}>{ben}</div>
            ))}
          </div>
          <div className="flex">
            <div>
              {e.oldPrice} <span>{e.newPrice}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
