import CityList from "../components/cities/CityList";

const DUMMY_DATA = [
    {
        id:1,
        title: 'Athens',
        image: 'https://www.mensjournal.com/wp-content/uploads/2019/10/AthensGreece.jpg?quality=47&strip=all',
        country: 'Greece',
        description:'Athens is the capital of Greece. It was also at the heart of Ancient Greece, a powerful civilization and empire.'
    },
    {
        id:2,
        title: 'Paris',
        image: 'https://cdn.turkishairlines.com/m/536e8df8c381e006/original/Travel-Guide-of-Paris-via-Turkish-Airlines.jpg',
        country: 'France',
        description:'Also known as the Latin Quarter, the 5th arrondissement is home to the Sorbonne university and student-filled cafes. '
    }    
]

function AllCitiesPage(){
    return <div>
        <h1>All Cities</h1>
        <CityList cities={DUMMY_DATA}/>
    </div>
}

export default AllCitiesPage;