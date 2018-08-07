import React from 'react';
import { Field } from 'formik';
import { DefaultInput } from '../../ui-inputs/DefaultInput';
import { SubmitButton } from '../../ui-inputs/SubmitButton';

export const InnerForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    dirty,
    setFieldValue
}) => (
        <form onSubmit={handleSubmit}>
            <DefaultInput label="Email">
                <Field type="email" name="email" className="form-control" />
                {touched.email && errors.email && <p className="form-text text-danger"> {errors.email} </p>}
            </DefaultInput>
            <DefaultInput label="Password">
                <Field type="password" name="password" className="form-control" />
            </DefaultInput>
            <SubmitButton disabled={!dirty || isSubmitting || Object.keys(errors).length}/>
        </form>
    );
