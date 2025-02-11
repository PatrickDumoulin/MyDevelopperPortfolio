import { useRouter } from 'next/router';

const CatchAllPage = () => {
  const router = useRouter();

  return (
    <div className="h-full bg-gradient-to-b from-[#0B1221] to-[#142237] py-36 flex items-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white">
          Page not found
        </h2>
      </div>
    </div>
  );
};

export default CatchAllPage;