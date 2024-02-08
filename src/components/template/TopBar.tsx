import useAppData from '@/src/data/hook/useAppData';
import ButtonChangeTheme from './ButtonChangeTheme';
import Title from './Title';

interface TopBarProps {
  title: string;
  subtitle: string;
}

export default function TopBar(props: TopBarProps) {
  const { changeTheme, theme } = useAppData();

  return (
    <div className="flex">
      <Title title={props.title} subtitle={props.subtitle} />
      <div className="flex flex-grow justify-end">
        <ButtonChangeTheme changeTheme={changeTheme} theme={theme} />
      </div>
    </div>
  );
}
