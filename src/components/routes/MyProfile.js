

import React, { Component } from 'react';
import { EnhancedMyProfileForm } from '../forms/MyProfileForm/EnhancedMyProfileForm';
import { ApiService } from '../services/data.service';
import { connect } from 'react-redux';
import Title from '../text/Title';



const mapStateToProps = state => ({ id: state.id })

class PMyProfile extends Component {
    constructor(props) {
        super(props)
        this.state = { profile: null }
    }
    componentDidMount() {
        this.fetchProfile()
    }
    fetchProfile() {
        return ApiService.getUser(this.props.id).then(x => {
            this.setState({ profile: x })
        })
    }
    render() {
        return (
            <div>
                <Title> My Profile </Title>
            {
                this.state.profile && <EnhancedMyProfileForm profile={this.state.profile} />
            }
            </div>

        );
    }
}


const MyProfile = connect(mapStateToProps, {})(PMyProfile)
export default MyProfile