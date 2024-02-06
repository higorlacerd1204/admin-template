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
    <div>
      <LeftMenu />
      <TopBar title={props.title} subtitle={props.subtitle} />
      <Content>{props.children}</Content>
    </div>
  );
}
