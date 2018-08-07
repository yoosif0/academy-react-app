import React from 'react';
import { Field } from 'formik';
import ReCAPTCHA from "react-google-recaptcha"
import { DefaultInput } from '../../ui-inputs/DefaultInput';
import { SubmitButton } from '../../ui-inputs/SubmitButton';

let recaptchaInstance;

export const InnerForm = ({
    values,
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    dirty,
    setFieldValue
}) => {
    if(errors.recaptchaExpired) {
        recaptchaInstance.reset()
        errors.recaptchaExpired = false
    }

    return (
        <form onSubmit={handleSubmit}>
            <DefaultInput label="Name">
                <Field type="text" name="name" className="form-control" />
                {touched.name && errors.name && <p className="form-text text-danger"> {errors.name} </p>}
            </DefaultInput>
            <DefaultInput label="Email">
                <Field type="email" name="email" className="form-control" />
                {touched.email && errors.email && <p className="form-text text-danger"> {errors.email} </p>}
            </DefaultInput>
            <DefaultInput label="Password">
                <Field type="password" name="password" className="form-control" />
                {touched.password && errors.password && <div>{errors.password}</div>}
            </DefaultInput>
            <DefaultInput label="Confirm Password">
                <Field type="password" name="passwordConfirm" className="form-control" />
            </DefaultInput>
            <ReCAPTCHA 
            ref={el => {recaptchaInstance = el}}
            name="recaptcha" sitekey="6Legp2EUAAAAAKZhVvBOIj-d6mbHGwrWBfPEoiMX" onChange={(value) => setFieldValue("recaptcha", value)}
            />
            <SubmitButton disabled={!dirty || isSubmitting || Object.keys(errors).length} />
        </form>

    );
}
