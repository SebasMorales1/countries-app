import { useFetchApi } from "./hooks/useFetchApi";

function App() {
  const { data, loading, error } = useFetchApi();

  return (
    <main className="bg-gray-200">
      <div className="w-11/12 sm:w-4/5 mx-auto min-h-screen py-8 max-w-[1300px]">
        <section className="mb-12">
          <h1 className="font-semibold text-2xl sm:text-3xl text-gray-950 mb-9">
            Countries App 🌎
          </h1>
          <div className="flex gap-3 items-center">
            <input
              type="text"
              name="country-name"
              className="outline outline-1 outline-gray-500 rounded p-1 w-11/12 focus-visible:outline-gray-700 sm:w-4/5"
              placeholder="Write Country Name"
            />
            <button className="bg-green-600 text-white py-1 px-2 rounded hover:bg-green-700 transition-colors">
              Search
            </button>
          </div>
        </section>

        <section>
          {error && <p>Error</p>}
          {loading && <p>...Loading</p>}

          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {data &&
              data.countries.map((country) => (
                <li key={country.code} className="bg-white rounded p-2 flex flex-col items-center hover:bg-green-100 transition-colors gap-1">
                  <img
                    className="size-16 object-cover"
                    src={`https://flagsapi.com/${country.code}/flat/64.png`}
                    alt={`${country.name} flag image`}
                    onError={(e) => console.log(e.target.src = "https://demofree.sirv.com/nope-not-here.jpg")}
                  />
                  <h3 className="text-center font-medium">{country.name}</h3>
                </li>
              ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default App;
