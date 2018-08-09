import { withFormik } from 'formik';
import { InnerForm } from './InnerForm';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { compose } from 'redux';
import { ApiService } from '../../../services/data.service';


export const EnhancedMyProfileForm = compose(
  withFormik({
    mapPropsToValues: props => ({  email: props.profile.email, name: props.profile.name, }),
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Email is invalid').required('Email is required'),
      name: Yup.string().min(3, 'Name is tiny').max(20, 'Name is so huge').required('Name is required'),
    }),
    handleSubmit: ( values,  { props, setSubmitting,  setErrors , resetForm}  ) => {
      return ApiService.editMyProfile(props.profile._id, {email: values.email, name:values.name}).then(payload=>{
        setSubmitting(false)
        toast.success("Edited successfully")
        console.log(payload)
        resetForm({email: payload.email, name: payload.name})
      }).catch(err=>{
        console.log(err)
        setSubmitting(false)
        toast.error(err.data && err.data.msg ? err.data.msg : 'Error')
      })
    },
  }))(InnerForm);
  