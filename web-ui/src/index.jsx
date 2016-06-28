var ReactDOM = require('react-dom');
var Footer = require('./component/footer.jsx');
var Navigator = require('./component/navigator.jsx');
var IndexMain = require('./component/index-main.jsx');

ReactDOM.render(<div>
    <Navigator/>
    <IndexMain/>
    <Footer/>
</div>, document.body);