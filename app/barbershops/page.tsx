// import { Button } from "@/app/_components/ui/button"
// import { db } from "@/app/_lib/prisma";
// import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
// import Image from "next/image";
// import BarbershopInfo from "./_components/barbershop-info";
// import ServiceItem from "./_components/service-item";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// interface BarbershopDetailsPageProps {
//   params: {
//     id?: string;
//   };
// }

// const BarbershopDetailsPage = async ({ params }: BarbershopDetailsPageProps) => {
//   const session =  await getServerSession(authOptions);

//   if (!params.id) {
//     // TODO: redirecionar para home page
//     return null;
//   }

//   const barbershop = await db.barbershop.findUnique({
//     where: {
//       id: params.id,
//     },
//     include: {
//       services: true,
//     }
//   });

//   if (!barbershop) {
//     // TODO: redirecionar para home page
//     return null;
//   }

//   return ( 
//   <div>
//     <BarbershopInfo barbershop={barbershop} />

//     <div className="px-5 flex flex-col gap-4 py-6">
//       {barbershop.services.map(service => (
//         <ServiceItem key={service.id} barbershop={barbershop} service={service} isAuthenticated={!!session?.user} />
//       ))}
//     </div>
//   </div>
//   )
// };

// export default BarbershopDetailsPage;

import { redirect } from "next/navigation";
import Header from "../_components/header";
import { db } from "../_lib/prisma";
import Search from "../(home)/_components/search";
import BarbershopItem from "@/app/(home)/_components/barbershop-item";

interface BarbershopsPageProps {
  searchParams: {
    search?: string;
  };
}

const BarbershopsPage = async ({ searchParams }: BarbershopsPageProps) => {
  if (!searchParams.search) {
    return redirect("/");
  }

  const barbershops = await db.barbershop.findMany({
    where: {
      name: {
        contains: searchParams.search,
        mode: "insensitive",
      },
    },
  });

  return (
    <>
      <Header />

      <div className="px-5 py-6 flex flex-col gap-6">

        <h1 className="text-gray-400 font-bold text-xs uppercase">Resultados para &quot;{searchParams.search}&quot;</h1>

        <div className="grid grid-cols-2 gap-4">
          {barbershops.map((barbershop) => (
            <div key={barbershop.id} className="w-full">
              <BarbershopItem barbershop={barbershop} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BarbershopsPage;