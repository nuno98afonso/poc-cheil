import Link from 'next/link';
import Activity from './components/SingleActivity';
import styles from './page.module.css';
import prisma from '../lib/prisma';

// Define a TypeScript type for Activity
type Activity = {
  id: number;
  description: string | null;
  createdAt: Date;
};

async function getActivities(): Promise<Activity[]> {
  const activities = await prisma.activity.findMany();
  return activities;
}

export default async function Home() {
  const activities = await getActivities();
  return (
    <main className={styles.main}>
      <Link href={'/ActivityDetail'}>Add Activity</Link>
      <h1>Activity Feed</h1>
      {activities.map((activity) => (
        <Activity
          key={activity.id}
          id={activity.id}
          description={activity.description}
          createdAt={activity.createdAt}
        />
      ))}
    </main>
  );
}
