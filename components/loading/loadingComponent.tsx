import { VscLoading } from "react-icons/vsc";

export function LoadingComponent() {
  return (
    <div className="grid place-items-center h-screen ">
      <div>
        <p className="uppercase text-4xl font-bold flex flex-row space-x-3 dark:text-white text-darkModeText">
          <VscLoading className="animate-spin" /> <span>loading</span>
        </p>
      </div>
    </div>
  );
}
