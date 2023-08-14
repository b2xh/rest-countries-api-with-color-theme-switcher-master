import { SearchComponent } from "@/components/search/searchComponent";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col select-none dark:bg-veryDarkBlue">
      <div className="text-darkModeText py-10 space-y-10">
        <SearchComponent />
      </div>
    </main>
  );
}
