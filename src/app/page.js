import { NavigationBar } from "./components/navigationBar";
import { WordCard } from "./components/wordCard";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main>
        <WordCard />
      </main>
    </>
  );
}