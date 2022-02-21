import AuthorCard from '@Components/AuthorCard';
import GithubStats from '@Components/GithubStats';
import HomeLayout from '@Layouts/HomeLayout';

export default function Home() {
  return (
    <HomeLayout centerChildren={false}>
      <AuthorCard />
      <GithubStats />
    </HomeLayout>
  );
}
