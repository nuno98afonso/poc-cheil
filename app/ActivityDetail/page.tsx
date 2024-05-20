'use client';

import styles from '../../app/page.module.css';
import Link from 'next/link';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation'; 
import { TextField, Button } from '@mui/material'; // Import Material-UI components

export default function AddActivity() {
  const [description, setDescription] = useState<string>('');
  const router = useRouter();

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => { // Change event type to HTMLInputElement
    setDescription(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    
    try {
      await fetch('/api/activity/add-activity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description }),
      });

      router.refresh();
    } catch (error) {
      console.error(error);
    }

    setDescription('');
  };

  return (
    <main className={styles.main}>
      <Link href="/">View Feed</Link>
      <h1>Add Activity</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField // Replace textarea with TextField
            id="description"
            label="Description"
            value={description}
            onChange={handleDescriptionChange}
            variant="outlined"
            required
            fullWidth
            multiline
            rows={4}
          />
        </div>
        <Button type="submit" variant="contained" color="primary">Submit</Button> {/* Replace button with Material-UI Button */}
      </form>
    </main>
  );
}
