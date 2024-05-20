'use client';

import styles from '../../app/page.module.css';
import Link from 'next/link';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation'; 
import { TextField, Button, Grid } from '@mui/material'; // Import Material-UI components
import Layout from '../components/Layout/layout';

export default function AddActivityType() {
  const [title, setTitle] = useState<string>('');
  const router = useRouter();

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => { // Change event type to HTMLInputElement
    setTitle(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    
    try {
      await fetch('/api/activitytype/add-activitytype', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });

      router.refresh();
    } catch (error) {
      console.error(error);
    }

    setTitle('');
  };

  return (
    <main className={styles.main}>
      <Layout>
        <Grid container spacing={2} mb={5}>
            <Grid item xs={8}>
                <div><h1>Add Activity Types</h1></div>
            </Grid>
            <Grid item xs={4} container direction="row" justifyContent="flex-end" alignItems="center">
                <div><Button variant='contained' href={'/ActivityTypes'}>Back</Button></div>
            </Grid>
        </Grid>
        <Grid>
                <Grid item xs={12}>
                    <form onSubmit={handleSubmit}>
                        <div>
                        <TextField // Replace textarea with TextField
                            id="title"
                            label="title"
                            value={title}
                            onChange={handleTitleChange}
                            variant="outlined"
                            required
                            fullWidth
                            multiline
                            rows={1}
                        />
                        </div>
                        <Button type="submit" variant="contained" color="primary">Submit</Button> {/* Replace button with Material-UI Button */}
                    </form>
                </Grid>
        </Grid>
        </Layout>
    </main>
  );
}
