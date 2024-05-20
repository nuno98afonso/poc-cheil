import Link from 'next/link';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Button } from '@mui/material'; // Import Material-UI components
import Activity from '../components/SingleActivity';
import styles from '../page.module.css';
import prisma from '../../lib/prisma';
import DeleteActivityButton from '../components/DeleteActivity';
import Layout from '../components/layout';

// Define a TypeScript type for Activity
type ActivityType = {
  id: number;
  title: string | null;
  createdAt: Date;
};

async function getActivityTypes(): Promise<ActivityType[]> {
  const activitytypes = await prisma.activityType.findMany();
  return activitytypes;
}

export default async function Home() {
  const activitytypes = await getActivityTypes();
  return (
    
    <main className={styles.main}>
      <Layout>
        <Grid container spacing={2} mb={5}>
            <Grid item xs={8}>
                <div><h1>Activity Types</h1></div>
            </Grid>
            <Grid item xs={4} container direction="row" justifyContent="flex-end" alignItems="center">
                <div><Button variant='contained' href={'/ActivityTypeDetail'}>Add Activity Type</Button></div>
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
            {activitytypes.map((activitytype) => (
              <TableRow key={activitytype.id}>
                <TableCell>{activitytype.title}</TableCell>
                <TableCell>{activitytype.createdAt.toString()}</TableCell> {/* Convert createdAt to string */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Layout>
    </main>
  );
}
