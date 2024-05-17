import Link from 'next/link';

interface EditButtonProps {
  activityId: number;
}

const EditActivityButton: React.FC<EditButtonProps> = ({ activityId }) => {
  return (
    <Link href={`/ActivityDetail/${activityId}`}>
      Edit Activity
    </Link>
  );
};

export default EditActivityButton;
