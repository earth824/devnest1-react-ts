// import { PropsWithChildren, type ReactNode } from 'react';
import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useState
} from 'react';
import Input from './Input';

// type LoginFormProps = { name: string; id: number; children: ReactNode };
// type LogigFormPropsWithoutChildren = { name: string; id: number };
// type LoginFormProps = PropsWithChildren<LogigFormPropsWithoutChildren>;
// useState: Controlled Component ==> active user interactivity
// useRef: Uncontollerd Component ==> decrease component re-render
// state: { email:string, password:string }
type InputState = {
  email: string;
  password: string;
};

const initialState: InputState = { email: '', password: '' };

export default function LoginForm() {
  const [input, setInput] = useState<InputState>(initialState);

  // const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {};
  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = event => {
    console.log(event.target.id);
    setInput(prevState => ({
      ...prevState,
      [event.target.id]: [event.target.value]
    }));
  };

  // const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {};
  const handleSubmitForm: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmitForm}>
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
    </form>
  );
}
