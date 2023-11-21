import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      Home
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
