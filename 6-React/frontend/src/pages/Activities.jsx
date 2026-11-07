import "@styles/Activities.css";
import Card from "@components/Card.jsx";
import { activities, diasSemana } from "../data/activitiesData.js";

const Activities = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleInscription = (nombreActividad) => {
    alert(`Inscripto en ${nombreActividad}`);
  };

  return (
    <div className="activities-container">
      {activities.map((activity, index) => (
        <Card
          key={index}
          titulo={activity.nombre}
          subtitulo={activity.descripcion}
        >
          <ul>
            {activity.horarios.map((horario, i) => (
              <li key={i}>
                Día: {diasSemana[horario.dia]} - Hora de Inicio: {horario["hora-inicio"]} - Hora de Fin: {horario["hora-fin"]}
              </li>
            ))}
          </ul>
          {isLoggedIn && (
            <button onClick={() => handleInscription(activity.nombre)}>
              Inscribirse
            </button>
          )}
        </Card>
      ))}
    </div>
  );
};

export default Activities;