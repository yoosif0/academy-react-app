import { withFormik } from 'formik';
import { InnerForm } from './InnerForm';
import * as Yup from 'yup';
import { ApiService } from '../../services/data.service';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapDispatchToProps = dispatch => ({
  loggedIn : (payload) => dispatch({type: 'LOGGED_IN', payload}),
})

export const EnhancedMyProfileForm = compose(
  connect(null, mapDispatchToProps),
  withFormik({
    mapPropsToValues: props => ({ name: props.profile.name, email: props.profile.email }),
    validationSchema: Yup.object().shape({
        name: Yup.string().max(20, 'Do not enter a huge name').min(3, 'Do not enter a tiny name').required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
    }),
    // Submission handler
    handleSubmit: (  values,  { props, setSubmitting, resetForm } ) => {
      ApiService.editMyProfile(props.profile._id, {email: values.email,  name: values.name}).then(payload=>{
        setSubmitting(false)
        toast.success("Edited successfully")
        resetForm({email: payload.email, name: payload.name})
      }).catch(err=>{
        setSubmitting(false)
        toast.error(err.data && err.data.msg ? err.data.msg : 'Error')
      })
    },
  }))(InnerForm);