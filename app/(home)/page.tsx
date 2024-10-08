import Header from "../_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale"
import Search from "./_components/search";
import BookingItem from "../_components/ui/booking-item";
import { db } from "../_lib/prisma";
import BarberashopItem from "./_components/barbershop-item";
import { Key } from "lucide-react";
import BarbershopItem from "./_components/barbershop-item";
export default async function Home() {
  // chamar prisma e pegar barbearias
  const barbershops = await db.barbershop.findMany({})
  return (
    <div>
      <Header />

    <div className="px-5 pt-5">
      <h2 className="text-xl front-bold">Olá, André</h2>
      <p className="capitalize text-sm">
        {format(new Date(), "EEE '.' dd 'de' MMM", {
          locale: ptBR,
        })}
      </p>
    </div>

    <div className="px-5 mt-6">
        <Search></Search>
    </div>

    <div className="px-5 mt-6">
      <h2 className="text-sm mb-3 uppercase text-gray-400 font-bold">Agendamentos</h2>
      <BookingItem />
    </div>

    <div className="mt-6">
        <h2 className=" px-5text-xs mb-3 uppercase text-gray-400 font-bold">Recomendados</h2>

        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />   
          ))}
        </div>
    </div>

    <div className="mt-6 mb-[4.5rem]">
        <h2 className=" px-5text-xs mb-3 uppercase text-gray-400 font-bold">Populares</h2>

        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />   
          ))}
        </div>
    </div>
    </div>
  );
}
