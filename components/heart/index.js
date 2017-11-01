import React, { PureComponent } from 'react';
import {TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

class Heart extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            selected: props.selected
        };
    }

    changeHeart() {
        const { onSelect } = this.props;
        const { selected } = this.state;

        const newSelected = !selected;

        onSelect(newSelected);
        this.setState({ selected: newSelected  });
    }

    render() {
        const { selected } = this.state;

        return (
            <TouchableOpacity onPress={this.changeHeart.bind(this)}>
                <Icon name={ selected ? 'heart' : 'heart-o' } size={30} />
            </TouchableOpacity>
        );
    }
}

Heart.propTypes = {
    onSelect: PropTypes.func.isRequired,
    selected: PropTypes.bool
};

export default Heart;