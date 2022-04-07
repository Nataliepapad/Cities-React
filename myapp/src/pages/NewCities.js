import NewCityForm from "../components/cities/NewCityForm";
import {useNavigate} from 'react-router-dom'

function NewCitiesPage(){
    const navigate= useNavigate();
    function addCityHandler(cityData){
        fetch('https://vibrant-tree-346412-default-rtdb.firebaseio.com/cities.json',{
            method:'POST',
            body: JSON.stringify(cityData),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(()=>{navigate('/', {replace:true})})
    }

    return <div>
        <section>
            <h1>Add new city</h1>
            <NewCityForm onAddCity={addCityHandler}/>
        </section>
    </div>
}

export default NewCitiesPage;