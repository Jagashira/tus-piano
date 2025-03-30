import Image from "next/image";
import { TypingText } from "../other/TypingText";

const HomeFlyer = ()=> {
  
  return (
    <div>
      <TypingText title={"Flyer"} textStyles="text-center text-[36px]" />
      <TypingText title={"新入生に向けて"} textStyles="text-center text-[13px] " />
     
      <div className="w-100 mt-10 mr-2 ml-2 mb-20 text-center">
      <Image
      src="/img/flyer.jpg"
      width={500}
      height={500}
      sizes="(max-width: 768px) 100vw, 50vw"
      className=" m-auto oobject-cover "
      alt="Picture of the author"
    />
      </div>
    </div>
    
  )
}

export default HomeFlyer;