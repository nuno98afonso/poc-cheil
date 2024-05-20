import Link from 'next/link';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Button } from '@mui/material'; // Import Material-UI components
import Activity from '../components/SingleActivity';
import styles from '../page.module.css';
import prisma from '../../lib/prisma';
import DeleteActivityButton from '../components/DeleteActivity';

// Define a TypeScript type for Activity
type ActivityType = {
  id: number;
  title: string | null;
  createdAt: Date;
};

async function getActivityTypes(): Promise<ActivityType[]> {
  const activitytypes = await prisma.activitytype.findMany();
  return activitytypes;
}

export default async function Home() {
  const activitytypes = await getActivityTypes();
  return (
    <main className={styles.main}>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <div><h1>Activities</h1></div>
            </Grid>
            <Grid item xs={4}>
                <div><Button href={'/ActivityDetail'}>Add Activity</Button></div>
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
    </main>
  );
}
