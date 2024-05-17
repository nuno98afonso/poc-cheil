import DeleteActivityButton from "./DeleteActivity";
import EditActivityButton from "./EditActivity";

type ActivityProps = {
  id: number;
  description: string | null;
  createdAt: Date;
};

export default function Activity({ id, description, createdAt }: ActivityProps) {
  return (
    <div>
      <h2>{description || "No description available"}</h2>
      <p>Created At: {createdAt.toLocaleString()}</p>
      <EditActivityButton activityId={id}/>
      <DeleteActivityButton activityId={id}/>
    </div>
  );
}
