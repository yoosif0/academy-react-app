import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { InnerForm } from './InnerForm';
import * as Yup from 'yup';
import { ApiService } from '../../../services/data.service';
import { toast } from 'react-toastify';
import { compose } from 'redux';
import { persistMyInfo } from '../../../services/persistence';
import { withRouter } from 'react-router-dom';


const mapDispatchToProps = dispatch => ({
  loggedIn: payload => dispatch({type: 'LOGGED_IN', payload})
})

export const EnhancedLoginForm = compose(
  connect(null, mapDispatchToProps),
  withRouter,
  withFormik({
    mapPropsToValues: props => ({  email: '', password: '', }),
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Email is invalid').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    handleSubmit: ( values,  { props, setSubmitting,  setErrors ,}  ) => {
      return ApiService.login({email: values.email, password:values.password}).then(payload=>{
        setSubmitting(false)
        toast.success("Logged in successfully")
        console.log(payload)
        props.loggedIn(payload)
        persistMyInfo(payload)
        props.history.push('/profile')

      }).catch(err=>{
        console.log(err)
        setSubmitting(false)
        toast.error(err.data && err.data.msg ? err.data.msg : 'Error')
      })
    },
  }))(InnerForm);
  