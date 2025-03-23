// import { PropsWithChildren, type ReactNode } from 'react';
import {
  // ChangeEvent,
  ChangeEventHandler,
  // FormEvent,
  FormEventHandler,
  useState
} from 'react';
import Input from './Input';
import { LoginInput } from '../types/auth.type';
import useAuth from '../store/useAuth';

// type LoginFormProps = { name: string; id: number; children: ReactNode };
// type LogigFormPropsWithoutChildren = { name: string; id: number };
// type LoginFormProps = PropsWithChildren<LogigFormPropsWithoutChildren>;
// useState: Controlled Component ==> active user interactivity
// useRef: Uncontollerd Component ==> decrease component re-render
// state: { email:string, password:string }

const initialState: LoginInput = { email: '', password: '' };

export default function LoginForm() {
  const [input, setInput] = useState<LoginInput>(initialState);

  const { login } = useAuth();

  // const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {};
  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = event => {
    console.log(event.target.id);
    setInput(prevState => ({
      ...prevState,
      [event.target.id]: event.target.value
    }));
  };

  // const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {};
  const handleSubmitForm: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    // validate zod, joi, yup ===> react-hook-form
    login(input);
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="flex flex-col gap-2 bg-white rounded-lg p-4 shadow"
    >
      <Input
        label="Email"
        id="email"
        value={input.email}
        onChange={handleChangeInput}
      />
      <Input
        label="Password"
        id="password"
        type="password"
        value={input.password}
        onChange={handleChangeInput}
      />
      <div className="mt-2">
        <button className="w-full bg-blue-600 text-white p-2 rounded-md cursor-pointer">
          Sign In
        </button>
      </div>
    </form>
  );
}
