import { CursorTrail, Footer, Hero, Hud, Missions, Quests, Stats } from '@/components';
import styles from './App.module.css';

export function App() {
  return (
    <>
      <CursorTrail />
      <div className={styles.container}>
        <Hud />
        <main>
          <Hero />
          <Stats />
          <Missions />
          <Quests />
        </main>
        <Footer />
      </div>
    </>
  );
}
