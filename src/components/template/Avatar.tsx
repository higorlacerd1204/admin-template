import Link from 'next/link';
import useAuth from '@/src/data/hook/useAuth';
import AvatarIcon from '../../../public/assets/avatar.svg';
import Image from 'next/image';

interface AvatarProps {
  className?: string;
}

export default function Avatar(props: AvatarProps) {
  const { user } = useAuth();

  console.log(user?.imageUrl || AvatarIcon);

  return (
    <Link href="/perfil">
      <Image
        alt="avatar"
        className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}
        src={user?.imageUrl || AvatarIcon}
        width={145}
        height={145}
      />
    </Link>
  );
}
