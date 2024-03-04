import { DarkThemeIcon, LightThemeIcon } from '../icons';

interface ButtonChangeThemeProps {
  theme?: string;
  changeTheme?: () => void;
  isChangeThemeDesktop?: boolean;
}

export default function ButtonChangeTheme(props: ButtonChangeThemeProps) {
  const darkTheme = props.theme === 'dark';

  return darkTheme ? (
    <div
      className={`${props.isChangeThemeDesktop ? 'hidden' : ''} ${
        props.isChangeThemeDesktop ? 'sm:' : ''
      }flex items-center cursor-pointer bg-gradient-to-r from-yellow-300 to-yellow-600 w-14 lg:w-24 h-8 p-1 rounded-full`}
      onClick={props.changeTheme}
    >
      <div className="flex items-center justify-center bg-white text-yellow-600 w-6 h-6 rounded-full">
        {LightThemeIcon}
      </div>
      <div className="hidden lg:flex items-center ml-4 text-white">
        <span className="text-sm">Claro</span>
      </div>
    </div>
  ) : (
    <div
      className={`${props.isChangeThemeDesktop ? 'hidden' : ''} ${
        props.isChangeThemeDesktop ? 'sm:' : ''
      }flex items-center justify-end cursor-pointer bg-gradient-to-r from-gray-500 to-gray-900 w-14 lg:w-24 h-8 p-1 rounded-full`}
      onClick={props.changeTheme}
    >
      <div className="hidden lg:flex items-center mr-2 text-gray-300">
        <span className="text-sm">Escuro</span>
      </div>
      <div className="flex items-center justify-center bg-black text-yellow-300 w-6 h-6 rounded-full">
        {DarkThemeIcon}
      </div>
    </div>
  );
}
