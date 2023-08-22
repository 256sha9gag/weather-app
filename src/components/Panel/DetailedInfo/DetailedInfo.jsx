import React from 'react';

import Preloader from '../../Preloader/Preloader'
import Progressbar from '../Progressbar/Progressbar';
import './detailedInfo.css'
import useStoreContext from '../../../hook/useStoreContext';

const DetailedInfo = () => {
  const { state } = useStoreContext();
  const { humidity, pressure, windSpeed, visibility, windDirection, windDeg } = state.currentWeather;

  const getRotation = (deg) => {
    const deviation = 45;
    const rorate = deg + deviation;
    return `rotate(${rorate}deg)`;
  }

  return (
    <section className="panel__aside">
      <h3 className="panel__text-h3">Подробно на сегодня</h3>
      <div className="panel__info">
        <article className={`panel__info-card panel__info-card_normal ${state.isLoaded ? '' : 'panel__info-card-loading'}`}>
          {state.isLoaded ? (
            <>
              <h4 className="panel__header-text">Скорость ветра</h4>
              <p className="panel__body-text">{windSpeed} <span className="panel__body-text-details">м/с</span></p>
              <div className="panel__wind-data">
                <svg className='panel__wind-direction-icon' style={{ transform: getRotation(windDeg) }} xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <circle cx="19" cy="19" r="19" fill="#48484A" />
                  <path d="M18.1951 31.0029L10.0872 10.8978C9.76221 10.092 10.5487 9.28365 11.3631 9.58643L31.9073 17.2246C32.7267 17.5293 32.7906 18.6717 32.0237 19.0912C26.1915 22.2822 23.1612 25.3608 20.0501 31.0907C19.6388 31.8482 18.5175 31.8023 18.1951 31.0029Z" fill="#E6E6E6" />
                </svg>
                <p className="panel__wind-direction">{windDirection}</p>
              </div>
            </>
          ) : (
            <Preloader />
          )}
        </article>
        <article className={`panel__info-card panel__info-card_normal ${state.isLoaded ? '' : 'panel__info-card-loading'}`}>
          {state.isLoaded ? (
            <>
              <h4 className="panel__header-text">Влажность</h4>
              <p className="panel__body-text">{humidity} <span className="panel__body-text-details">%</span></p>
              <Progressbar />
            </>
          ) : (
            <Preloader />
          )}
        </article>
        <article className={`panel__info-card panel__info-card_small ${state.isLoaded ? '' : 'panel__info-card-loading'}`}>
          {state.isLoaded ? (
            <>
              <h4 className="panel__header-text">Видимость</h4>
              <p className="panel__body-text">{visibility} <span className="panel__body-text-details">км</span></p>
            </>
          ) : (
            <Preloader />
          )}
        </article>
        <article className={`panel__info-card panel__info-card_small ${state.isLoaded ? '' : 'panel__info-card-loading'}`}>
          {state.isLoaded ? (
            <>
              <h4 className="panel__header-text">Давление</h4>
              <p className="panel__body-text">{pressure} <span className="panel__body-text-pressure">мм рт. ст.</span></p>
            </>
          ) : (
            <Preloader />
          )}
        </article>
      </div>
    </section>
  );
};

export default DetailedInfo;
