import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/1336823060830236681/TKWZmq0V_400x400.jpg" alt="Renan"/>
            <div>
                <strong>Renan Almeida</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level {level}</p>
            </div>
        </div>
    );
}
