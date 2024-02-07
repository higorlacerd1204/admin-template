import { HomeIcon, LogoutIcon, NotificationsIcon, SettingsIcon } from '../icons';
import Logo from './Logo';
import MenuItem from './MenuItem';

export default function LeftMenu() {
  return (
    <aside className="flex flex-col">
      <div className="flex flex-col items-center justify-center bg-yellow-400 w-28 h-20">
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem icon={HomeIcon} text="Home" url="/" />
        <MenuItem icon={SettingsIcon} text="Configurações" url="/settings" />
        <MenuItem icon={NotificationsIcon} text="Notificações" url="/notifications" />
      </ul>
      <ul>
        <MenuItem
          className="text-red-600 transition duration-300 ease-in-out hover:bg-red-500 hover:text-white"
          icon={LogoutIcon}
          text="Sair"
        />
      </ul>
    </aside>
  );
}
