// pages/event/[id].js
import { useRouter } from 'next/router';

const eventDetails = {
  1: { title: 'Concierto de Rock', description: 'Un gran concierto de rock.', date: '2024-10-05', place: 'Buenos Aires' },
  2: { title: 'Exposición de Arte', description: 'Exposición de los mejores artistas.', date: '2024-11-12', place: 'Mendoza' },
};

export default function EventDetail() {
  const router = useRouter();
  const { id } = router.query;
  const event = eventDetails[id];

  if (!event) return <p>Evento no encontrado</p>;

  return (
    <div className="event-detail-container">
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>Fecha: {event.date}</p>
      <p>Lugar: {event.place}</p>
    </div>
  );
}