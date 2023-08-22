import React from 'react';

import './forecastCards.css';
import useStoreContext from '../../../hook/useStoreContext';
import Preloader from '../../Preloader/Preloader';

const ForecastCards = () => {
  const { state } = useStoreContext();

  return (
    <div 
      className="panel__cards"
    >
      {state[state.typeForecast].slice(state.currentIndex).map((card) => (
        <article
          key={card.id}
          className={state.isLoaded ? `panel__card bg-icon` : 'panel__card-preloaded'}
          style={{
            backgroundImage: `url(https://openweathermap.org/img/wn/${card.icon}@2x.png)`
          }}   
        >
          {state.isLoaded ? (
            <>
              <h6
                className='panel__text-date'
              >
                {card.date}
              </h6>
              <div
                className='panel__temperature'
              >
                {state.typeForecast === 'daily' ?
                  (<>
                    <p className='panel__text-temperature'>
                      {`${card.maxTemp}°C`}
                    </p>
                    <p className='panel__text-temperature-mute'>
                      {`${card.minTemp}°C`}
                    </p>
                  </>) 
                  : (
                  <p className='panel__text-temperature'>
                    {`${card.temp}°C`}
                  </p>
             )}
          </div>
            </>
          ) : (
          <Preloader />
          )}
        </article>
      ))}
    </div>
  );
};

export default ForecastCards;
