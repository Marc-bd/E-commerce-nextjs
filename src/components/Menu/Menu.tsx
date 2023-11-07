export default function Menu() {

  const menuItens = ["Home", "Women's Clothing", "Men's Clothing", "Eletronics", "Jewelery"];


  return (
    <div className={" md:w-full"}>
      <ul className={"items-center flex flex-col md:flex-row md:justify-around"}>
        {
          menuItens.map((item, index) => (
            <li
              className={"cursor-pointer my-3 text-xl hover:text-blue-500 md:border-green-500 md:text-base"}
              key={index}>
              {item}
            </li>
          ))
        }
      </ul>
    </div>
  );
}