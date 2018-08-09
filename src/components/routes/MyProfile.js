import React, { Component } from 'react';
import { Title } from '../text/Title';
import { ApiService } from '../../services/data.service';
import { EnhancedMyProfileForm } from '../forms/MyProfileForm/EnhancedMyProfileForm';
import { connect } from 'react-redux';
import axios from 'axios';


const mapStateToProps = state => ({id: state.id})

class PMyProfile extends Component {

	constructor(props) {
		super(props)
		this.state = { profile: null }
		this.source = axios.CancelToken.source()
	}
	componentDidMount() {
		this.fetchProfile()
	}

	componentWillUnmount(){
		this.source.cancel()
	}

	fetchProfile() {
		return ApiService.getUser(this.props.id, this.source.token).then(payload => {
			this.setState({ profile: payload })
		}).catch(err=>{ })
	}

	render() {
		return (
			<div>
				<Title> My Profile Route </Title>
				{
					this.state.profile && <EnhancedMyProfileForm profile={this.state.profile} />
				}
			</div>
		);
	}
}

const MyProfile = connect(mapStateToProps, {})(PMyProfile)

export default MyProfile;
