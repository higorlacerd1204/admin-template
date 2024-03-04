import useAppData from '@/src/data/hook/useAppData';
import ButtonChangeTheme from './ButtonChangeTheme';
import Title from './Title';
import Avatar from './Avatar';

interface TopBarProps {
  title: string;
  subtitle: string;
}

export default function TopBar(props: TopBarProps) {
  const { changeTheme, theme } = useAppData();

  return (
    <div className="flex">
      <Title title={props.title} subtitle={props.subtitle} />
      <div className="flex flex-grow justify-end items-center">
        <ButtonChangeTheme changeTheme={changeTheme} isChangeThemeDesktop theme={theme} />
        <Avatar className="hidden sm:block ml-3" />
      </div>
    </div>
  );
}
