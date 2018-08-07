import React from 'react';
import { Field } from 'formik';
import { DefaultInput } from '../../ui-inputs/DefaultInput';
import { SubmitButton } from '../../ui-inputs/SubmitButton';


export const InnerForm = ({
    values,
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    dirty,
}) => (
        <form onSubmit={handleSubmit}>
            <DefaultInput label="Name">
                <Field type="text" name="name" className="form-control" />
                {touched.name && errors.name && <p className="form-text text-danger"> {errors.name} </p>}
            </DefaultInput>
            <DefaultInput label="Email">
                <Field type="email" name="email" className="form-control" />
                {touched.email && errors.email && <p className="form-text text-danger"> {errors.email} </p>}
            </DefaultInput>
            <SubmitButton disabled={!dirty || isSubmitting || Object.keys(errors).length}/>
        </form>
    );
