import { homepageNavs } from "@/config/homepage";
import Logo from "./logo";
import { Example } from "./Example";

export default function Header() {
  return (
    <header className="w-full h-16 sticky top-0 z-40 backdrop-blur-sm ">
<div className=" justify-between w-full bg-green-200 h-full 500 flex items-center">      
  <Logo className={''}/>

<Example /> 
</div>
    
    </header>
  );
}
