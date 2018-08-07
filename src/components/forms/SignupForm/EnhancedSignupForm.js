import { withFormik } from 'formik';
import { InnerForm } from './InnerForm';
import * as Yup from 'yup';
import { ApiService } from '../../services/data.service';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { persistMyInfo } from '../../services/persistence';
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{6,}$/

const mapDispatchToProps = dispatch => ({
  loggedIn : (payload) => dispatch({type: 'LOGGED_IN', payload}),
})

export const EnhancedSignupForm = compose(
  connect(null, mapDispatchToProps),
  withFormik({
    mapPropsToValues: props => ({ name: '', email: '', password: '', passwordConfirm: '' }),
    validationSchema: Yup.object().shape({
        name: Yup.string().max(20, 'Do not enter a huge name').min(3, 'Do not enter a tiny name').required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().matches(passwordPattern, 'Password is not elligible').required('Password is required'),
        passwordConfirm: Yup.string().oneOf([Yup.ref('password') ], 'Please enter a similar password').required('Please confirm your password'),
        recaptcha: Yup.string().required()
    }),
    // Submission handler
    handleSubmit: (  values,  { props, setSubmitting, setErrors } ) => {
      ApiService.signup({email: values.email, password: values.password, name: values.name, 'g-recaptcha-response': values.recaptcha}).then(payload=>{
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