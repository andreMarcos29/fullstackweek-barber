import { format } from "date-fns"
// import Header from "../_components/ui/header"
import { ptBR } from "date-fns/locale"
import Search from "./_components/search"

export default function Home() {
  return (
    <div>
      {/* <Header /> */}

    <div className="px-5 pt-5">
    <h2 className="text-xl font-bold">Olá, Miguel!</h2>
    <p className="captalize text-sm">
        {format(new Date(), "EEEE',' dd 'de' MMM ", {
        locale: ptBR,
    })}
    </p>
    </div>

    <div className="px-5 mt-6">
    <Search />
    </div>
    </div>
    ); 
}
