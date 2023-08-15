"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { store } from "@/store/stores";
import { useEffect } from "react";
import { LoadingComponent } from "@/components/loading/loadingComponent";
import { LiaMapSolid } from "react-icons/lia";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import Error from "next/error";

const CountryPage = () => {
  const { fetchData, loading, data } = store();
  const params = useSearchParams();
  const name = params.get("name");
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  const filtered = data.data.filter((data) => data.name.common === name);

  return (
    <main className="min-h-screen flex flex-col select-none dark:bg-veryDarkBlue">
      <div className="text-darkModeText dark:text-white lg:pl-16 px-5 py-10 space-y-24">
        {loading ? (
          <LoadingComponent />
        ) : (
          <div className="space-y-24">
            <button
              onClick={() => router.back()}
              className="px-8 py-2 shadow-2xl border dark:border-darkBlue rounded-lg flex flex-row space-x-2 items-center dark:bg-darkBlue"
            >
              <AiOutlineArrowLeft />
              <span>Back</span>
            </button>

            {filtered.length !== 0 ? (
              filtered.map((c, i) => (
                <div className="grid lg:grid-cols-2 grid-cols-1" key={i}>
                  <div className="pb-3">
                    <Image
                      className="rounded-sm w-full xl:px-6 px-2"
                      src={c.flags.png}
                      width={200}
                      height="200"
                      alt="image"
                    />
                  </div>
                  <div className="space-y-10">
                    <h5 className="md:text-5xl text-2xl font-black">
                      {c.name.common}
                    </h5>

                    <div className="xl:space-x-28 flex lg:flex-row flex-col space-y-4 py-5 lg:items-center">
                      <ul>
                        <li>
                          <span className="md:text-xl test-base test-base font-bold">
                            Official Name:
                          </span>{" "}
                          {c.name.official}
                        </li>
                        <li>
                          <span className="md:md:text-xl test-base test-base font-bold">
                            Population:
                          </span>{" "}
                          {c.population}
                        </li>
                        <li>
                          <span className="md:text-xl test-base font-bold">
                            Region:
                          </span>{" "}
                          {c.region}
                        </li>
                        <li>
                          <span className="md:text-xl test-base font-bold">
                            Sub-Region:
                          </span>{" "}
                          {c.subregion}
                        </li>
                        <li>
                          <span className="md:text-xl test-base font-bold">
                            Timezones:{" "}
                          </span>
                          {c.timezones}
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span className="md:text-xl test-base font-bold">
                            Start Of Week:
                          </span>{" "}
                          {c.startOfWeek}
                        </li>
                        <li>
                          <span className="md:text-xl test-base font-bold">
                            Flags:
                          </span>{" "}
                          <span>
                            <a
                              className="hover:underline"
                              target="_blank"
                              href={c.flags.png}
                            >
                              PNG{" "}
                            </a>{" "}
                            <a
                              className="hover:underline"
                              target="_blank"
                              href={c.flags.svg}
                            >
                              SVG
                            </a>
                          </span>
                        </li>
                        <li>
                          <span className="md:text-xl test-base font-bold">
                            Captial:
                          </span>{" "}
                          {c.capital}
                        </li>
                        <li>
                          <span className="md:text-xl test-base font-bold">
                            Captial-Info:
                          </span>{" "}
                          {c.capitalInfo.latlng}
                        </li>
                        <li>
                          <span className="md:text-xl test-base font-bold">
                            Timezones:{" "}
                          </span>
                          {c.timezones}
                        </li>
                      </ul>
                    </div>

                    <div className="max-w-lg dark:bg-darkBlue">
                      <Link
                        className="flex flex-row space-x-2 items-center border dark:border-darkBlue shadow-2xl px-2 py-3 rounded-lg"
                        href={`http://www.google.com/maps/place/${c.latlng[0]},${c.latlng[1]}`}
                        target="_blank"
                      >
                        <LiaMapSolid />
                        <span>View On Google Maps </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <Error statusCode={404} />
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default CountryPage;
