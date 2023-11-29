// Crear un componente de React para el menú
function Menu() {
    const menuItems = [
      'Nuestra Carta',
      'Te Brindamos',
      'Nuestras Sedes',
      'Galería',
      'Nuestra Historia',
      'Contáctanos',
      'Reservaciones'
    ];

    return (
      <div>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
