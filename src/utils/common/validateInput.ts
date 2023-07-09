import React from 'react';
import { useForm } from 'react-hook-form';
import { TFieldName, TValidate } from 'src/types/order/types';
import { requiredErrorMsg } from '../order/formValidation';

const { register } = useForm({ mode: 'onChange' });

export const validateInput = (fieldName: TFieldName, value?: TValidate) => {
  const validation = register(fieldName, {
    required: requiredErrorMsg,
    validate: value,
  });
  console.log(validation);
  return validation;
};
