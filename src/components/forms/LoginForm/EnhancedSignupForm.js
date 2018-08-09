import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { InnerForm } from './InnerForm';
import * as Yup from 'yup';
import { ApiService } from '../../../services/data.service';
import { toast } from 'react-toastify';
import { compose } from 'redux';
import { persistMyInfo } from '../../../services/persistence';


const mapDispatchToProps = dispatch => ({
  loggedIn: payload => dispatch({type: 'LOGGED_IN', payload})
})

export const EnhancedLoginForm = compose(
  connect(null, mapDispatchToProps),
  withFormik({
    mapPropsToValues: props => ({  email: 'ahmed@test.com', password: '1234567a', }),
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Email is invalid').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    handleSubmit: ( values,  { props, setSubmitting,  setErrors ,}  ) => {
      return ApiService.login({email: values.email, password:values.password}).then(payload=>{
        setSubmitting(false)
        toast.success("Signed up successfully")
        console.log(payload)
        props.loggedIn(payload)
        persistMyInfo(payload)

      }).catch(err=>{
        console.log(err)
        setSubmitting(false)
        toast.error(err.data && err.data.msg ? err.data.msg : 'Error')
      })
    },
  }))(InnerForm);
  