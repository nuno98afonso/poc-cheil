import { useSession, signIn, signOut } from 'next-auth/react';
import { SignIn } from '../authentication/signin-button';
import { SignOut } from '../authentication/signout-button';

const Profile = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <p>You are not signed in</p>
        <SignIn/>
      </div>
    );
  }

  return (
    <div>
    <p>Welcome, {session.user.image}</p>
      <p>Welcome, {session.user.name}</p>
      <p>User ID: {session.user.id}</p>
      <SignOut />
    </div>
  );
  console.log(session?.user.name)
};

export default Profile;
