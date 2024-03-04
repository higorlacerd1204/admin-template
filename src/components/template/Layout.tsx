import useAppData from '../../data/hook/useAppData';
import PrivateRoute from '../auth/PrivateRoute';
import Content from './Content';
import LeftMenu from './LeftMenu';
import TopBar from './TopBar';

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  const { theme } = useAppData();

  return (
    <PrivateRoute>
      <div className={`${theme} flex h-screen w-screen`}>
        <LeftMenu />
        <div className="flex flex-col w-full p-4 sm:p-7 dark:bg-gray-800">
          <TopBar title={props.title} subtitle={props.subtitle} />
          <Content>{props.children}</Content>
        </div>
      </div>
    </PrivateRoute>
  );
}
