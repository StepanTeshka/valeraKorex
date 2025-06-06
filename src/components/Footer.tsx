import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex pb-2 flex-row gap-24 px-10 mt-2">
      <div className="flex flex-col ">
        <p className="mb-2">Производство</p>
        <Link href={"/"}>Упаковка для тортов и пирожных</Link>
        <Link href={"/"}>Коррексы для печенья и зефира</Link>
        <Link href={"/"}>Контейнеры для яиц</Link>
        <Link href={"/"}>Упаковка для японской кухни</Link>
        <Link href={"/"}>Лотки для грибов, зелени и салата</Link>
        <Link href={"/"}>Блистеры и пленки</Link>
      </div>
      <div className="flex flex-col">
      <p className="mb-2">О компании</p>
      <Link href={"/"}>Наше производство</Link>
      <Link href={"/"}>Наша команда</Link>
      <Link href={"/"}>Наши партнеры</Link>
    <p className="mt-14">© 1994-2025 &quot;Коррекс&quot;</p>
      </div>
      <div className="border-l flex flex-col pl-3 border-[#D3D3D3]">
        <p className="mb-2">Контакты</p>
        <p>г. Екатеринбург, ул Бориса Ельцина, д. 1а, оф. 9.7</p>
        <p>+7 (343) 310-24-30</p>
        <p>info@korrex.ru</p>
      </div>
    </div>
  );
};
