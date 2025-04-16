import { NavigationBar } from "./components/navigationBar";
import SearchWordForm from "./components/searchWordForm";
import { WordCard } from "./components/wordCard";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main>
        <SearchWordForm />
        <WordCard />
      </main>
    </>
  );
}