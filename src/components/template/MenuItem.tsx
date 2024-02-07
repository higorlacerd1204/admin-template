import Link from 'next/link';

interface MenuItemProps {
  text: string;
  icon: any;
  url?: string;
  className?: string;
  onClick?: (event: any) => void;
}

export default function MenuItem(props: MenuItemProps) {
  function renderContent() {
    return (
      <div
        className={`flex flex-col justify-center items-center w-28 h-20 text-gray-600 ${props.className}`}
      >
        {props.icon}
        <span className="text-xs font-light ">{props.text}</span>
      </div>
    );
  }
  return (
    <li
      className="transition duration-300 ease-in-out hover:bg-yellow-100 cursor-pointer"
      onClick={props.onClick}
    >
      {props.url ? <Link href={props.url}>{renderContent()}</Link> : renderContent()}
    </li>
  );
}
