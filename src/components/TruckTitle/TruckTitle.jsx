import { useSelector } from 'react-redux';
import {selectTruck } from '../../redux/catalog/selectors.js';
import sprite from "../../images/icon.svg";
import css from './TruckTitle.module.css';


const TruckTitle = () => {
    
  const data = useSelector(selectTruck);

    return(
      <>
          {data ? (
            <div className={css.truckTitleContainer}>
                <h2 className={css.name}>{data.name}</h2>
                <div className={css.rating}>
                    <span className={css.text}>
                        <div className={css.star}>
                            <svg className={css.starIcon}>
                            <use xlinkHref={`${sprite}#icon-rating`}></use>
                            </svg>
                        </div>
                        {`${data.rating}(${data.reviews ? data.reviews.length : null} Reviews)`}
                    </span>
                        
                    <span className={css.location}>
                            <svg className={css.locationIcon}>
                            <use xlinkHref={`${sprite}#icon-map`}></use>
                            </svg>
                            {data.location}
                    </span>
                        
                </div>
            <p className={css.price}>€{data.price ? data.price.toFixed(2) : '0.00'}</p>
            </div>
          ) : null}
        </>
    );
}

export default TruckTitle;