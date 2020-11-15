import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    lugares: [
      {
        id: 1,
        title: "San Gregorio de Polanco",
        description:
          "San Gregorio de Polanco es una ciudad uruguaya del departamento de Tacuarembó. Es además sede del municipio homónimo. Como característica principal es el primer museo abierto de artes visuales de América Latina.",
        location: "Tacuarembó",
        img:
          "https://avisador.com.uy/wp-content/uploads/2020/01/b79ab30b6eb33fe8930c719c193a17a0.jpg",
        lat: -32.6135,
        lng: -55.8291,
      },
      {
        id: 2,
        title: "Nueva Helvecia",
        description:
          "La ciudad se encuentra localizada en la zona sudeste del departamento de Colonia, al este4​ del río Rosario. A fines de 1861 llegaron a esta zona las primeras oleadas migratorias de europeos, en su mayoría suizos. El 25 de abril de 1862 se registra el mayor número de arribo de emigrantes, día que se toma como el fundacional de la ciudad.",
        location: "Colonia",
        img:
          "https://www.coloniauy.com/wp-content/uploads/2012/08/nueva-helvecia.jpg",
        lat: -34.288889,
        lng: -57.233333,
      },
      {
        id: 3,
        title: "Cabo Polonio",
        description:
          "Cabo Polonio es un balneario ubicado en el departamento de Rocha, en Uruguay, y forma parte del Parque Nacional Cabo Polonio. El lugar total es una reserva natural llena de bosques de árboles Ombu y una colonia vecina de leones marinos más allá del faro perfecto.",
        location: "Rocha",
        img:
          "https://www.masatofilms.com/assets/img/portfolio/aereas/aereas05.jpg",
        lat: -34.3975,
        lng: -53.789167,
      },
      {
        id: 4,
        title: "Punta del Este",
        description:
          "Esta ciudad balnearia lo tiene todo: arena, yates, clubes de juego y sol. A veces mencionado como el Mónaco de América del Sur, Punta del Este es un poco más costoso que el resto de Uruguay, pero la magnífica costa, actividades de entretenimiento, restaurantes y más hacen que sea una visita obligada a la ciudad.",
        location: "Maldonado",
        img:
          "https://www.berdinodiaz.com/wp-content/uploads/2019/09/punta-del-este.jpg",
        lat: -34.978611,
        lng: -54.933056,
      },
      {
        id: 5,
        title: "Piriápolis",
        description:
          "Piriápolis es una ciudad de la costa del Atlántico en el suroeste de Uruguay. Es uno de los primeros balnearios del país y se conoce por sus edificios de estilo belle époque, como el Argentino Hotel frente al mar. Cerca del puerto de Piriápolis, que se encuentra repleto de yates, una aerosilla sube hacia el Cerro San Antonio, que tiene una pequeña capilla encalada y un mirador.",
        location: "Maldonado",
        img:
          "https://c8.alamy.com/compes/cwkned/vista-aerea-de-la-ciudad-de-piriapolis-y-la-playa-maldonado-uruguay-sudamerica-cwkned.jpg",
        lat: -34.866111,
        lng: -55.274722,
      },
      {
        id: 6,
        title: "Punta del Diablo",
        description:
          "Este antiguo pueblo de pescadores es hoy el principal destino de vacaciones de verano para argentinos y uruguayos. También es el centro de la vista de mochileros en Uruguay. Ha habido mucho progreso últimamente, pero la ciudad no ha perdido su belleza. Esta maravillosa ciudad con una costa impresionante y un ambiente sereno es la mejor atracción turística de la zona.",
        location: "Rocha",
        img:
          "https://images.squarespace-cdn.com/content/v1/5dbf7225a7b69c23d828999b/1573226306326-23DA85DRW7P11FJ6UJAL/ke17ZwdGBToddI8pDm48kPh1Wb9mfUjOUEiQfvzH0PkUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc-p1Hp_56tYAjig2R0ufRNMNZrXKosm3jt8-sJOn-AvEQMCX9iwHx7IM1THDlzwC8/Punta+del+Diablo%2C+Rocha.",
        lat: -34.045833,
        lng: -53.538889,
      },
      {
        id: 7,
        title: "Colonia del Sacramento",
        description:
          "Colonia del Sacramento es una ciudad del suroeste de Uruguay, al otro lado del Río de la Plata de Buenos Aires. Fue el primer asentamiento europeo y la primer ciudad del Uruguay, declarada patrimonio de la humanidad por la UNESCO en 1995.",
        location: "Colonia",
        img:
          "https://su-noticias.com/wp-content/uploads/2019/11/Colonia-678x381.jpg",
        lat: -34.471389,
        lng: -57.844167,
      },
      {
        id: 8,
        title: "Termas de Guaviyú",
        description:
          "Las Termas del Guaviyú o Termas de Guaviyú son un complejo termal ubicado en el km 432 de la Ruta 3 Gral. José Gervasio Artigas en las costas del arroyo Guaviyú que le da nombre en el Departamento de Paysandú. Este ambiente exótico, sumado a una infraestructura de moteles municipales y privados, zona de camping en el entorno del monte nativo, servicios gastronómicos, higiénicos y centro comercial, las convierten en un lugar para visitar turisticamente con el confort necesario para disfrutar de la naturaleza del lugar.",
        location: "Paysandú",
        img:
          "https://cf.bstatic.com/images/hotel/max1280x900/662/66271436.jpg",
        lat:  -31.8404,
        lng:  -57.8867,
      },
      {
        id: 8,
        title: "Termas del Dayman",
        description:
          "Las Termas del Daymán están ubicadas a 10 km de la ciudad de Salto, a 487 de Montevideo y a 440 de Buenos Aires. Son el complejo termal más concurrido de la región, nacieron en 1957 tras un fallido intento por hallar petróleo en las costas del río homónimo. Con un conjunto de bungalows, moteles, restaurantes y piscinas climatizadas, tanto privadas como públicas; el agua llega en algunos casos a 45 °C, la mayor temperatura en aguas termales del Uruguay. El agua termal procede del acuífero Guaraní.1​ Las aguas del Daymán contienen iodo, hierro, magnesio, calcio y flúor, son negativas en su contenido de arsénico y pobres en sulfato, aunque sirven de herramienta a la crenoterapia. El Parque Acuático de Acuamanía es el primero a nivel termal en Sudamérica.",
        location: "Salto",
        img:
          "https://www.termasdayman.com/cache/com_zoo/images/fotos-termas-dayman_d0ebdf3afa26e589e0c716018a349d3e.jpg",
        lat:  -31.4543827,
        lng:  -57.9077341,
      },
      {
        id: 9,
        title: "Punta Ballena",
        description:
          "Punta Ballena o Punta de la Ballena es un balneario ubicado en el departamento de Maldonado. Actualmente (2009) se ha integrado al desarrollo urbano y turístico de Punta del Este. Del lado oeste hay un pequeño puerto natural, donde se desarrollan deportes náuticos, y las playas Portezuelo y Solanas, muy visitadas por su orientación al poniente, sus aguas calmas y sus grandes extensiones de arena fina. Del lado este hay grutas, rocas y playas de arena gruesa, con vista a Punta del Este y la Isla Gorriti. De la misma manera en el lado Este se puede visitar la famosa Casa-Taller de Casapueblo, diseñada por el artista plástico Carlos Páez Vilaró.",
        location: "Maldonado",
        img:
          "https://www.guiapuntadeleste.com/cache/com_zoo/images/casapueblo_b74bb092c07e9461f9043065870444d4.jpg",
        lat:  -34.91680,
        lng:  -55.08152,
      },
      {
        id: 10,
        title: "Aguas Dulces",
        description:
          "Aguas Dulces es un balneario uruguayo del departamento de Rocha, y forma parte del municipio de Castillos. ",
        location: "Rocha",
        img:
          "https://i.pinimg.com/originals/05/d4/92/05d4928a9566b074b301620c32f3431b.jpg",
        lat:  -34.275278,
        lng:  -53.783056,
      },
      {
        id: 11,
        title: "La Paloma",
        description:
          "La Paloma es una ciudad de la costa sureste de Uruguay, al este de Montevideo. El faro blanco y delgado de Cabo Santa María mira desde lo alto al Atlántico, cerca de las tradicionales cabañas de los pescadores. Cerca están la Bahía Chica y la Bahía Grande, playas de arena con aguas tranquilas.  ",
        location: "Rocha",
        img:
          "https://www.carasycaretas.com.uy/wp-content/uploads/2019/02/la-paloma-1.jpg",
        lat:  -34.66268,
        lng:  -54.16452,
      },
      {
        id: 12,
        title: "La Pedrera",
        description:
          "La Pedrera es un balneario uruguayo en la costa del departamento de Rocha. Está ubicado sobre el océano Atlántico, a 230 km al este de Montevideo por la ruta 10. Es una zona donde es común el turismo de avistamiento de aves. Se pueden apreciar numerosas especies como el chiflón, el chiricote, el ostrero, la calandria, el zorzal y el colorado.Tradicionalmente fue un balneario tranquilo, que a partir de los años 1990 ha convocado mucha juventud.",
        location: "Rocha",
        img:
          "https://s3.amazonaws.com/turismorocha/destinos/4/med/la-pedrera-061593400-1451874948.jpg",
        lat:  -34.59344,
        lng:  -54.12234,
      },
      {
        id: 12,
        title: "Ciudad Vieja",
        description:
          "Ciudad Vieja atrae a los visitantes por su historia, museos culturales y grandes monumentos centenarios. Estos incluyen la catedral metropolitana de estilo neoclásico, que domina la pintoresca plaza Matriz, y el teatro Solís con su diverso programa de artes escénicas. Los animados restaurantes de carnes se llenan rápidamente en el interior de Mercado del Puerto. La zona también es un centro de vida nocturna, que ofrece una mezcla de bares de cocteles de moda y cafés tradicionales.",
        location: "Montevideo",
        img:
          "https://soyuruguay.com/wp-content/uploads/2018/10/7524275730_ef769b04d1_b.jpg",
        lat: -34.9067,
        lng: -56.2083,
      },
    ],
  },
  mutations: {},
  actions: {},
};
