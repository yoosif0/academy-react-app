import React from 'react';
import { Field } from 'formik';
import ReCAPTCHA from "react-google-recaptcha"
import { ErrorText } from '../../text/ErrorText';
import { DefaultInput } from '../../ui-inputs/DefaultInput';



let recaptchaInstance
export const InnerForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setFieldValue,
    dirty
}) => {

    if(errors.recaptchaExpired){
        recaptchaInstance.reset()
        errors.recaptchaExpired = false
    }

    return (
        <form onSubmit={handleSubmit}>
            <DefaultInput label="Name">
                <Field type="text" className="form-control" name="name" />
                {touched.name && errors.name && <ErrorText>{errors.name}</ErrorText>}
            </DefaultInput>

            <DefaultInput label="Email">
                <Field type="email" name="email" className="form-control" />
                {touched.email && errors.email && <ErrorText>{errors.email}</ErrorText>}
            </DefaultInput>

            <DefaultInput label="Password">
                <Field type="password" name="password" className="form-control" />
                {touched.password && errors.password && <ErrorText>{errors.password}</ErrorText>}
            </DefaultInput>

            <DefaultInput label="Confirm Password">
                <Field type="password" name="passwordConfirm" className="form-control" />
                {touched.passwordConfirm && errors.passwordConfirm && <ErrorText>{errors.passwordConfirm}</ErrorText>}
            </DefaultInput>
            <ReCAPTCHA
                ref={el => recaptchaInstance = el}
                name="recaptcha"
                sitekey="6Legp2EUAAAAAKZhVvBOIj-d6mbHGwrWBfPEoiMX"
                onChange={value => setFieldValue("recaptcha", value)}
            />,


            <button className="btn btn-default mt-4" type="submit" disabled={!dirty || isSubmitting || Object.keys(errors).length}>   Submit  </button>
        </form>

    );
}
