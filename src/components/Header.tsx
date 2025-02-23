import Image from "next/image";
import Logo from "../../public/KorrexLogo.png";
import Link from "next/link";
import phone from "../../public/Phone.svg";

export const Header = () => {
  return (
    <div className="flex  text-[20px] gap-10 items-center flex-row">
      <Link href={"/"}>
        <Image src={Logo} alt="logo" />
      </Link>
      <Link className="pl-14 " href={"/catalog"}>
        <p>Каталог</p>
      </Link>
      <Link href={"/contact"}>
        <p>Контакты</p>
      </Link>
      <div className="pl-[200px] flex flex-row gap-2 items-center">
        <Image src={phone} alt="phone" className="w-[20px] h-[20px]"/>
        <p>8 800-500-57-70</p>
      </div>
    </div>
  );
};
