import React from 'react';
import { connect } from 'react-redux';
import { newsfeed } from '../../../redux/actions/util-action';
import Tweet from './../../components/tweet/tweet';
import config from '../../../config/app-config';
import axios from 'axios';
import { getNewsFeed } from './../../../redux/actions/hashtag-action';

class HashTag extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.getNewsFeed(this.props.user.id);
    }
    render() {
        return (
            <div>
                <div className="t-topnav-container">Home</div>
                {this.props.newsFeed && this.props.newsFeed.map(tweet => {
                    return <Tweet tweet={tweet} />
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        newsFeed: state.hashtagReducer.newsFeed,
        user: state.auth.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getNewsFeed: (hashtag_id) => dispatch(getNewsFeed(hashtag_id)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HashTag);