import Head from 'next/head';
import Image from 'next/image';
import useAuth from '@/src/data/hook/useAuth';
import { useRouter } from 'next/router';
import Loading from '../../../public/assets/loading.gif';

export default function PrivateRoute(props: any) {
  const { loading, user } = useAuth();
  const router = useRouter();

  function renderContent() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `if(!document.cookie?.includes("admin-template-HLS")) {
                window.location.href = "/auth"
            }`,
            }}
          ></script>
        </Head>
        {props.children}
      </>
    );
  }

  function renderLoading() {
    return (
      <div className="flex justify-center items-center h-screen">
        <Image alt="loading" src={Loading} />
      </div>
    );
  }

  if (!loading && user?.email) {
    return renderContent();
  } else if (loading) {
    return renderLoading();
  } else {
    router.push('/auth');

    return null;
  }
}
