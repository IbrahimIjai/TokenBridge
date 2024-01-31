import type { NextPage } from "next";
import Bridge2 from "~~/components/Bridge";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <main className="flex flex-col items-center flex-grow pt-10">
        <div className="px-5 space-y-6">
          <h1 className="mb-8 text-center">
            <span className="block text-4xl font-bold">Bridge 🧎‍♂️</span>
          </h1>
          <Bridge2 />
        </div>
      </main>
    </>
  );
};

export default Home;
