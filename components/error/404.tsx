import { TbError404 } from "react-icons/tb";

export function Error404Component() {
  return (
    <div className="place-items-center">
      <div className="flex flex-row space-x-5 text-center">
        <TbError404 className="text-9xl" />
        <p className="uppercase text-4xl font-black flex flex-row space-x-3">
          NOT FOUND
        </p>
      </div>
    </div>
  );
}
