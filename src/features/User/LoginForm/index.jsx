import React from 'react';
import { useForm } from 'react-hook-form';
import Button from 'components/Button';
import { Title } from 'components/Typography';
import Field from 'components/Field';
import Alert from 'components/Alert';
import Brand from 'components/Brand';
import GitHubLink from 'components/GitHubLink';
import { RootProps } from './props';
import './style.css';

const LoginForm = ({ loading, onSubmit, fail }) => {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: 'onChange',
  });

  const { isValid, isSubmitted } = formState;

  return (
    <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
      <div className='login-form__prefix'>
        <Brand />
      </div>
      <div>
        <Title size='800'>API-консолька</Title>
      </div>
      {fail && (
        <Alert
          className='login-from__alert'
          title='Вход не вышел'
          description={fail}
          type='error'
        />
      )}
      <Field
        title='Логин'
        name='login'
        invalid={errors.login}
        ref={register({
          required: true,
          validate: (value) => !/[а-яё ]/i.test(value),
        })}
      />
      <Field
        title='Сублогин'
        sub='Опционально'
        name='sublogin'
        ref={register(register)}
      />
      <Field
        title='Пароль'
        type='password'
        name='password'
        invalid={errors.password}
        ref={register({
          required: true,
          minLength: 8,
          validate: (value) => !/[а-яё]/i.test(value),
        })}
      />

      <Button
        disabled={!isValid && isSubmitted}
        type='submit'
        loading={loading}
      >
        Войти
      </Button>
      <div className='login-form__suffix'>
        <GitHubLink />
      </div>
    </form>
  );
};

LoginForm.propTypes = RootProps;
export default LoginForm;
