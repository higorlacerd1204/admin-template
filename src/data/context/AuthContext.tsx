import Cookies from 'js-cookie';
import firebase from '../../firebase/config';
import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface AuthContextProps {
  user?: any;
  loading?: boolean;
  login?: (email: string, senha: string) => Promise<void>;
  loginGoogle?: () => Promise<void>;
  logout?: () => Promise<void>;
  registerUser?: (email: string, senha: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function normalUser(userFirebase: firebase.User): Promise<any> {
  const token = await userFirebase?.getIdToken();

  return {
    userId: userFirebase.uid,
    name: userFirebase.displayName || '',
    email: userFirebase.email || '',
    token,
    provider: userFirebase.providerData[0]?.providerId || '',
    imageUrl: userFirebase.photoURL || '',
  };
}

async function getCookie(isAuth: any) {
  if (isAuth) {
    Cookies.set('admin-template-HLS', isAuth, { expires: 7 });
  } else {
    Cookies.remove('admin-template-HLS');
  }
}

export function AuthProvider(props: any) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  async function configSession(userFirebase: any) {
    if (userFirebase?.email) {
      const user = await normalUser(userFirebase);

      setUser(user);
      getCookie(true);
      setLoading(false);

      return user.email;
    } else {
      setUser(null);
      getCookie(false);
      setLoading(false);

      return false;
    }
  }

  async function loginGoogle() {
    try {
      setLoading(true);
      const resp = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());

      await configSession(resp.user);
      router.push('/');
    } finally {
      setLoading(false);
    }
  }

  async function login(email: string, senha: string) {
    try {
      setLoading(true);
      const resp = await firebase.auth().signInWithEmailAndPassword(email, senha);

      await configSession(resp.user);
      router.push('/');
    } finally {
      setLoading(false);
    }
  }

  async function registerUser(email: string, senha: string) {
    try {
      setLoading(true);
      const resp = await firebase.auth().createUserWithEmailAndPassword(email, senha);

      await configSession(resp.user);
      router.push('/');
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      setLoading(true);
      await firebase.auth().signOut();
      await configSession(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (Cookies.get('admin-template-HLS')) {
      const cancel = firebase.auth().onIdTokenChanged(configSession);

      return () => cancel();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loading,
        login,
        loginGoogle,
        logout,
        registerUser,
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
