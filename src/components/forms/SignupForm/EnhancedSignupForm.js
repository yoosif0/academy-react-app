import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { InnerForm } from './InnerForm';
import * as Yup from 'yup';
import { ApiService } from '../../../services/data.service';
import { toast } from 'react-toastify';
import { compose } from 'redux';
import { persistMyInfo } from '../../../services/persistence';


const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{6,}$/

const mapDispatchToProps = dispatch => ({
  loggedIn: payload => dispatch({type: 'LOGGED_IN', payload})
})

export const EnhancedSignupForm = compose(
  connect(null, mapDispatchToProps),
  withFormik({
    mapPropsToValues: props => ({ name: '', email: '', password: '', passwordConfirm: '' }),
    validationSchema: Yup.object().shape({
      name: Yup.string().min(3, 'Name is tiny').max(20, 'Name is so huge').required('Name is required'),
      email: Yup.string().email('Email is invalid').required('Email is required'),
      password: Yup.string().matches(passwordPattern, "Password is not elligible").required('Password is required'),
      passwordConfirm: Yup.string().oneOf([Yup.ref('password'), 'Please enter the same password']).required('Please confirm your password'),
      recaptcha: Yup.string().required()
    }),
    handleSubmit: ( values,  { props, setSubmitting,  setErrors ,}  ) => {
      return ApiService.signup({email: values.email, password:values.password, name: values.name, 'g-recaptcha-response': values.recaptcha}).then(payload=>{
        setSubmitting(false)
        toast.success("Signed up successfully")
        props.loggedIn(payload)
        persistMyInfo(payload)

      }).catch(err=>{
        setErrors({recaptchaExpired:true})
        setSubmitting(false)
        toast.error(err.data && err.data.msg ? err.data.msg : 'Error')
      })
    },
  }))(InnerForm);
  