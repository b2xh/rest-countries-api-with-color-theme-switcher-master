import Link from "next/link";

interface CountryCardProps {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string[];
}

export function CountryCard({
  flag,
  name,
  population,
  region,
  capital,
}: CountryCardProps) {
  return (
    <div className="flex flex-col dark:bg-darkBlue dark:text-white shadow-2xl w-5/6">
      <Link href={{ pathname: "country", query: { name } }}>
        <img
          className="rounded-sm h-2/3 w-full h-full"
          src={flag}
          height="200"
        />
      </Link>
      <div className="px-5 py-12">
        <Link
          href={{ pathname: "country", query: { name } }}
          className="text-xl font-bold py-4"
        >
          {name}
        </Link>
        <ul>
          <li>
            <span className="font-bold">Population:</span> {population}
          </li>
          <li>
            <span className="font-bold">Region:</span> {region}
          </li>
          <li>
            <span className="font-bold">Capital:</span> {capital}
          </li>
        </ul>
      </div>
    </div>
  );
}
