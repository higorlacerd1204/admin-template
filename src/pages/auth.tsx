import { useState } from 'react';
import Image from 'next/image';
import AuthInput from '../components/auth/AuthInput';
import GoogleIcon from '../../public/assets/icons/google-icon.svg';
import { WarningIcon } from '../components/icons';

export default function Auth() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null);
  const isLogin = mode === 'login';

  function showError(message: any, time = 5000) {
    setError(message);
    setTimeout(() => setError(null), time);
  }

  function onSubmit() {
    if (isLogin) {
      showError('Erro ao logar.');
    } else {
      showError('Erro ao realizar cadastro.');
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-3/4">
        <Image
          className="h-screen w-full object-cover"
          alt="imagens-aleatorias"
          src="https://source.unsplash.com/random"
          width={2448}
          height={3264}
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/4">
        <h1 className="text-2xl font-bold mb-5">
          {isLogin ? 'Entre com a Sua Conta' : 'Cadastre-se agora!'}
        </h1>

        {error && (
          <div className="flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg">
            {WarningIcon}
            <span className="ml-3">{error}</span>
          </div>
        )}

        <AuthInput label="E-mail" onChangeValue={setEmail} required type="email" value={email} />
        <AuthInput label="Senha" onChangeValue={setSenha} required type="password" value={senha} />
        <button
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition ease-in-out duration-100 text-white rounded-lg px-4 py-4 mt-6"
          onClick={onSubmit}
        >
          {isLogin ? 'Entrar' : 'Cadastrar'}
        </button>
        <hr className="my-6 border-gray-300 w-full" />
        <button
          className="flex justify-center items-center gap-2 w-full bg-white hover:bg-red-100 transition ease-in-out duration-100 text-red-500 rounded-lg px-4 py-3 border border-red-500"
          onClick={onSubmit}
        >
          <Image alt="google-icon" height={34} src={GoogleIcon} width={34} />
          Entrar com o Google
        </button>

        <div className="mt-8">
          {isLogin ? (
            <>
              Novo por aqui?
              <p
                className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
                onClick={() => setMode('register')}
              >
                Crie uma Conta Gratuitamente!
              </p>
            </>
          ) : (
            <>
              Já faz parte da nossa comunidade?
              <p
                className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
                onClick={() => setMode('login')}
              >
                Entre com a Sua Conta!
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
