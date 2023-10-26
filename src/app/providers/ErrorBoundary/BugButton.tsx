import { Component } from 'react';
import {
  Button,
  ButtonSize,
  ButtonTheme,
} from '../../../components/Button/Button';

interface IBugButton {
  error: null | string;
}

export class BugButton extends Component<object, IBugButton> {
  constructor(props: object) {
    super(props);
    this.state = {
      error: null,
    };
  }
  componentDidUpdate = () => {
    if (this.state.error) {
      throw new Error('Test Error');
    }
  };
  onThrow = () => {
    this.setState({ error: 'Test Error' });
  };
  render() {
    return (
      <Button
        onClick={this.onThrow}
        className={'j'}
        size={ButtonSize.M}
        theme={ButtonTheme.BACKGROUND_ERROR}
      >
        Throw error
      </Button>
    );
  }
}
