"use client";

import { useState, useEffect } from "react";
import { store } from "@/store/stores";
import { CountryCard } from "@/components/country/cardComponent";
import { IAPI } from "@/libs/api/types";
import { AiOutlineSearch } from "react-icons/ai";
import { LoadingComponent } from "../loading/loadingComponent";

export function SearchComponent() {
  const [value, setValue] = useState("");
  const { fetchData, loading, data } = store();

  useEffect(() => {
    fetchData();
  }, []);

  const onChangeHandle = (e: { target: { value: string } }) => {
    setValue(e.target.value);
  };

  const multipleSearch = (array: IAPI[]) => {
    return array.filter((el) =>
      Object.keys(el).some((parameter) =>
        /* @ts-ignore*/
        el[parameter].toString().toLowerCase().includes(value)
      )
    );
  };

  const filtredData = multipleSearch(data.data);

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="text-darkModeText dark:text-white py-10 space-y-20">
          <div className="shadow-2xl max-w-lg px-8 border dark:border-darkBlue flex flex-row space-x-3 items-center md:mx-16 mx-6 dark:bg-darkBlue dark:text-white">
            <span className="text-2xl text-gray-500 dark:text-white">
              <AiOutlineSearch />
            </span>
            <input
              className="w-full h-full py-4 focus:outline-none dark:bg-darkBlue dark:placeholder-white"
              type="text"
              placeholder="Search for a country..."
              value={value}
              onChange={onChangeHandle}
            />
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10  md:pl-16 pl-10">
            {filtredData.length == 0 ? (
              <p className="uppercase text-4xl font-black flex flex-row space-x-3">
                NOT FOUND
              </p>
            ) : (
              filtredData.map((country, i) => (
                <CountryCard
                  key={i}
                  flag={country.flags.png}
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
}
