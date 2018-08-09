import React, { Component } from 'react';
import { Title } from '../text/Title';
import { ApiService } from '../../services/data.service';
import { EnhancedMyProfileForm } from '../forms/MyProfileForm/EnhancedMyProfileForm';
import { connect } from 'react-redux';


const mapStateToProps = state => ({id: state.id})

class PMyProfile extends Component {

	constructor(props) {
		super(props)
		this.state = { profile: null }
	}
	componentDidMount() {
		this.fetchProfile()
	}

	fetchProfile() {
		return ApiService.getUser(this.props.id).then(payload => {
			this.setState({ profile: payload })
		})
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
