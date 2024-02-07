import Content from './Content';
import LeftMenu from './LeftMenu';
import TopBar from './TopBar';

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex h-screen w-screen">
      <LeftMenu />
      <div className="flex flex-col bg-gray-300 w-full p-7 dark:bg-gray-800">
        <TopBar title={props.title} subtitle={props.subtitle} />
        <Content>{props.children}</Content>
      </div>
    </div>
  );
}
