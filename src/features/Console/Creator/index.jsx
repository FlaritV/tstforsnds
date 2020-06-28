import React, { memo } from 'react';
import { useForm } from 'react-hook-form';
import Resizer from 'components/Resizer';
import ConsoleFooter from './Footer';
import Workspace from './Workspace';
import { isJson, getPrettyJson } from '../helpers';
import { useDidUpdate } from 'rooks';
import { RootProps } from './props';
import './style.css';

const Console = ({
  request,
  response,
  isFetching,
  isFailedResponse,
  onSend,
}) => {
  const {
    register,
    handleSubmit,
    errors,
    formState,
    setValue,
    getValues,
  } = useForm({
    mode: 'onChange',
  });
  const { isValid } = formState;
  const onSubmit = (data) => onSend(data.body);
  const formatBody = () => {
    const body = getValues('body');

    if (isValid) {
      setValue('body', getPrettyJson(JSON.parse(body)), false);
    }
  };

  useDidUpdate(() => {
    const prettyJson = request ? getPrettyJson(request) : null;

    if (prettyJson && prettyJson !== getValues('body')) {
      setValue('body', prettyJson, true);
    }
  }, [request]);

  return (
    <form className='request-creator' onSubmit={handleSubmit(onSubmit)}>
      <div className='request-creator__wrapper'>
        <Workspace
          name='body'
          invalid={errors.body}
          ref={register({
            required: true,
            validate: (value) => isJson(value),
          })}
          title='Запрос:'
          autoFocus
        />

        <Resizer
          minWidth={100}
          className='c-resizer'
          localStorageKey='x-axis-column-width'
        />

        <Workspace
          invalid={isFailedResponse}
          value={getPrettyJson(response)}
          title='Ответ:'
          disabled
        />
      </div>
      <ConsoleFooter
        isFetching={isFetching}
        onFormat={formatBody}
        isDisabled={!isValid}
      />
    </form>
  );
};

Console.propTypes = RootProps;

export default memo(Console);
