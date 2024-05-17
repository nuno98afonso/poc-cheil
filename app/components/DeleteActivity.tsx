'use client';

import { useRouter } from "next/navigation";

interface DeleteActivityButtonProps {
    activityId: number;
}

export default function DeleteActivityButton({ activityId }: DeleteActivityButtonProps): JSX.Element {
    const router = useRouter();

    async function handleClick(): Promise<void> {
        try {
            await fetch(`/api/delete-activity/${activityId}`, {
                method: 'DELETE'
            });
            router.refresh();
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <button onClick={handleClick}>Delete Activity</button>
    )
}
