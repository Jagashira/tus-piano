import React, { useEffect, useState } from 'react';

const Homea = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('/api/calendar');
      const data = await response.json();
      setEvents(data.items);
      console.log(data.items);
    };

    fetchEvents();
  }, []);
  

  return (
    <div>
      <h1>My Calendar App</h1>
      <h2>Calendar Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.summary}</li>
        ))}
      </ul>
    </div>
  );
};

export default Homea;
