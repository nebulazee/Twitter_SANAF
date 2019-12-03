import React from 'react';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import ConversationHead from './../../components/conversationhead/conversationhead';
import Conversation from './../../components/conversation/conversation';

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: [],
            head: '',
        };
    }
    getSuggestions = value => {
        const languages = [
            {
                name: 'C',
                year: 1972
            },
            {
                name: 'C#',
                year: 2000
            },
            {
                name: 'C++',
                year: 1983
            }
        ];
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : languages.filter(lang =>
            lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    getSuggestionValue = (suggestion) => {
        return suggestion.name
    }

    renderSuggestion(suggestion) {
        return (
            <span>{suggestion.name}</span>
        );
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        var that = this;
        this.setState({
            suggestions: that.getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    changeSelectedHead = (selHead) => {
        this.setState({
            head: selHead
        })
    }

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: 'Search for people',
            value,
            onChange: this.onChange
        };
        return ( 
            <div className="row t-messages-div">
                <div className="t-top-nav" >Messages</div>
                <div className="col-6 border overflow-allow">
                    <div className="p-1 ">
                        <Autosuggest
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            getSuggestionValue={this.getSuggestionValue}
                            renderSuggestion={this.renderSuggestion}
                            inputProps={inputProps}
                        />
                    </div>
                    <ConversationHead query={this.state.value} changeHead={this.changeSelectedHead} />
                </div>
                <div className="col-6 border">
                    <Conversation query={this.state.head} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = dispatch => {
    return {
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Messages);