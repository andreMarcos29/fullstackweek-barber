"use client"

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { signIn } from "next-auth/react";

const Header = () => {
    const handleLoginclick = async ()=> {
        await signIn();
    }
    return ( 
       <Card>
        <CardContent className="p-5 py-8 justify-between items-center flex flex-row">
        <Image src="/logo.png" alt={"FSW Barber"} height={22} width={120} />
        {/* <Button variant={"outline"} size={"icon"} className="h-8 w-8">
            <MenuIcon />
        </Button> */}

        <Button onClick={handleLoginclick}>Login</Button>
        </CardContent>
       </Card>
     );
}

export default Header;
