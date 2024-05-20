'use client';

import { Button, Icon } from "@mui/material";
import { useRouter } from "next/navigation";
import DeleteIcon from '@mui/icons-material/Delete';
interface DeleteActivityButtonProps {
    activityId: number;
}

export default function DeleteActivityButton({ activityId }: DeleteActivityButtonProps): JSX.Element {
    const router = useRouter();

    async function handleClick(): Promise<void> {
        try {
            const response = await fetch(`/api/delete-activity/${activityId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                console.error(`Failed to delete activity with id ${activityId}. Status: ${response.status}`);
                return;
            }
            console.log(`Activity with id ${activityId} deleted successfully.`);
            router.refresh();
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <Button color="error" onClick={handleClick}><DeleteIcon/></Button>
    )
}
