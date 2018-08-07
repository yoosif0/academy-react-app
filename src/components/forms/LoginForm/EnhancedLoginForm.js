import { withFormik } from 'formik';
import { InnerForm } from './InnerForm';
import * as Yup from 'yup';
import { ApiService } from '../../services/data.service';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { persistMyInfo } from '../../services/persistence';
import { withRouter } from 'react-router-dom';


const mapDispatchToProps = dispatch => ({
  loggedIn : (payload) => dispatch({type: 'LOGGED_IN', payload}),
})

export const EnhancedLoginForm = compose(
  withRouter,
  connect(null, mapDispatchToProps),
  withFormik({
    mapPropsToValues: props => ({ email: '', password: '' }),
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
    }),
    handleSubmit: (  values,  { props, setSubmitting } ) => {
      ApiService.login({email: values.email, password: values.password}).then(payload=>{
        setSubmitting(false)
        toast.success("Logged in  successfully")
        props.loggedIn(payload)
        props.history.push('profile')
        persistMyInfo(payload)
      }).catch(err=>{
        console.log(err)
        setSubmitting(false)
        toast.error(err.data && err.data.msg ? err.data.msg : 'Error')
      })
    },
  }))(InnerForm);