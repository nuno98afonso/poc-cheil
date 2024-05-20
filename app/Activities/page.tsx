import Link from 'next/link';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Button } from '@mui/material'; // Import Material-UI components
import Activity from '../components/Activity/SingleActivity';
import styles from '../page.module.css';
import prisma from '../../lib/prisma';
import DeleteActivityButton from '../components/Activity/DeleteActivity';
import Layout from '../components/Layout/layout';

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
      <Layout>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <div><h1>Activities</h1></div>
            </Grid>
            <Grid item xs={4} container direction="row" justifyContent="flex-end" alignItems="center">
                <div><Button variant='contained' href={'/ActivityDetail'}>Add Activity Type</Button></div>
            </Grid>
        </Grid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>{activity.description}</TableCell>
                <TableCell>{activity.createdAt.toString()}</TableCell> {/* Convert createdAt to string */}
                <TableCell><DeleteActivityButton activityId={activity.id}/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Layout>
    </main>
  );
}
