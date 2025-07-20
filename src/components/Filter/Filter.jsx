import LocationFilter from '../LocationFilter/LocationFilter.jsx';
import VehicleFilter from '../VehicleFilter/VehicleFilter.jsx';
import css from './Filter.module.css';


const Filter = () => {
    
    return(
        <div className={css.filterContainer}>
            <LocationFilter />
            <VehicleFilter />
        </div>
    );
}

export default Filter;