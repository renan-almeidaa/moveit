
import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){
    const {startNewChallenge}  = useContext(ChallengesContext);
    const {minutes, seconds, hasFinished, startCountdown, resetCountdown, isActive} = useContext(CountdownContext);


    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    

    return (
    <div>
        <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>

        { hasFinished ? (
            <button 
                disabled
                className={styles.countdownButton}
                >
                <p>
                    Ciclo encerrado
                    <img src="icons/check-circle.svg" alt=""/>
                </p>
        </button>
        ) : (
          <>
            { isActive ? (
                <button 
                    type="button" 
                    onClick={resetCountdown} 
                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    >
                    Abandonar ciclo
               </button>
            ) : (
                <button 
                type="button" 
                onClick={startCountdown} 
                className={styles.countdownButton}
                >
                Iniciar um ciclo
            </button>
            )}
         </>
        )}
        
    </div>
    );
}