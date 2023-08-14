const getData = async () => {
  const url = new URL("https://restcountries.com/v3.1/all");

  const response = await fetch(url.toString());
  const data = await response.json();

  return data;
};

export async function GET() {
  try {
    return new Response(
      JSON.stringify({
        lastUpdate: new Date().toISOString(),
        data: await getData(),
      }),
      {
        status: 200,
        headers: {
          "Cache-Control": "s-maxage=60",
        },
      }
    );
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }
    return new Response("Something went wrong", { status: 500 });
  }
}
