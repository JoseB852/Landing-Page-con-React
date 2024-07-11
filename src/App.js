import './App.css';
import Card from "./components/Card"
import Nadvar from "./components/Nadvar"
import Jumbotron from "./components/Jumbotron"
import Footer from "./components/Footer"

function App() {
  let data = [
    {
      card: 1,
      title: "Inglaterra",
      body: "Ellos tienen un muy buen equipo con muy buenos jugadores",
      imageUrl: "https://www.elfinanciero.com.mx/resizer/pfsfq_TLl2HAv-UU1vpayr0xWPQ=/400x267/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/7UKJRUFMYVEVPALHVQ2XDEQCWU.jpg"

    },
    {
      card: 2,
      title: "Holanda",
      body: "El equipo de Países Bajos protagonizó, con un gol incluido, un polémico duelo",
      imageUrl: "https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F375e7636-097f-4d74-85d2-63e2fc6bb183.jpg?crop=4998%2C3332%2C1%2C0&resize=750"
    },
    {
      card: 3,
      title: "Francia",
      body: "La victoria del pueblo figuras de Francia se suman a Mbappé",
      imageUrl: "https://images.daznservices.com/di/library/DAZN_News/b2/3f/francia-eurocopa-2024_1kdjs6i9moktc1w3n3t6ety7g5.jpg?t=45436712"
    },
    {
      card: 3,
      title: "España",
      body: "El Allianz Arena de Múnich será la primera semifinal, España y Francia",
      imageUrl: "https://phantom-marca.unidadeditorial.es/af6725b2975d35e305a71242e5cf10c3/resize/828/f/jpg/assets/multimedia/imagenes/2023/11/13/16998886545798.jpg"
    },
  ]
  return (

    <div className="container">

      <Nadvar />

      <Jumbotron />


      <div className="row">


        {data.map((item, index) => {
          return <div className="col-sm-3" key={item.card + item.title}>
            <Card title={item.title} texto={item.body} image={item.imageUrl} />
          </div>
        })}
      </div>
      <Footer />
    </div>

  );

}

export default App;
