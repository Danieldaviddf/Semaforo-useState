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

	return (
		<div className="text-center">
            <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
				<button type="button" className={verde} onClick={cambioColor}>Button</button>
				<button type="button" className={amarillo} onClick={cambioColor2}>Button</button>
				<button type="button" className={rojo} onClick={cambioColor3}>Button</button>
			</div>
		</div>
	);
};

export default Home;



		