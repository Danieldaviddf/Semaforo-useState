import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [verde, setVerde] = useState("btn btn-success");
	const [amarillo, setAmarillo] = useState("btn btn-secondary");
	const [rojo, setRojo] = useState("btn btn-secondary");

		const cambioColor = () =>{
			const nuevoVerde = verde === "btn btn-success" ? "btn btn-secondary" : "btn btn-success";
			setVerde(nuevoVerde); 
			setAmarillo("btn btn-secondary");
			setRojo("btn btn-secondary"); 
		}
		const cambioColor2 = () =>{
			const nuevoAmarillo = amarillo === "btn btn-warning" ? "btn btn-secondary" : "btn btn-warning";
			setAmarillo(nuevoAmarillo); 
			setVerde("btn btn-secondary");
			setRojo("btn btn-secondary"); 

		}
		const cambioColor3 = () =>{
			const nuevoRojo = rojo === "btn btn-danger" ? "btn btn-secondary" : "btn btn-danger";
			setRojo(nuevoRojo); 
			setVerde("btn btn-secondary"); 
			setAmarillo("btn btn-secondary");
		}

		const usame = () =>{
			if(verde === "btn btn-success"){
				cambioColor2();
			} else if (amarillo === "btn btn-warning") {
				cambioColor3();
			} else {
				cambioColor();
			}
	}

	
	return (
		<div className="text-center">
            <div style={{ background: "#333", height: "600px", width: "220px", padding: "10px", borderRadius: "20px", margin: "0 auto" }} className="btn-group-vertical" role="group" aria-label="Vertical button group">
				<button style={{ width: "200px", height: "200px", borderRadius: "50%"}} type="button" className={verde} onClick={cambioColor}>o</button>
				<button style={{ width: "200px", height: "200px", borderRadius: "50%"}} type="button" className={amarillo} onClick={cambioColor2}>o</button>
				<button style={{ width: "200px", height: "200px", borderRadius: "50%"}} type="button" className={rojo} onClick={cambioColor3}>o</button>
			</div>
			<button type="button" className="btn btn-primary" onClick={usame}>Usame</button>
		</div>
	);
};

export default Home;



		