import { homepageNavs } from "@/config/homepage";
import Logo from "./logo";
import { Example } from "./Example";

export default function Header() {
  return (
    <header className="container bg-green-200 h-24 sticky top-0 z-40 backdrop-blur-sm ">
<div className="justify-between h-24 500 flex items-center">      <Logo className={''}/>

<Example /> 
</div>
    
    </header>
  );
}
