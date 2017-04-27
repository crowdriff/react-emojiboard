import 'babel-polyfill';
import React  from 'react';
import ReactDOM from 'react-dom';

import ReactEmojiboard from '../src/react-emojiboard';

let App = React.createClass({
  render() {
    return (
      <div>
        <ReactEmojiboard />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
