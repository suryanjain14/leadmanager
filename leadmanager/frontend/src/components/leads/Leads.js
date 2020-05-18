import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getLeads} from "../../actions/leads";

class Leads extends Component {
    render() {
        return (
            <div>
                <h1>Leads list</h1>
            </div>
        );
    }
}

const mapStateToProps =state => ({
    leads:state.leads.leads
});

export default Leads;