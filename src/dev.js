import './dev.scss';
import ReactDailyShortcut from './main';

/*===example start===*/

// install: npm install afeiship/react-daily-shortcut --save
// import : import ReactDailyShortcut from 'react-daily-shortcut'

class App extends React.Component{
  render(){
    return (
      <div className="hello-react-daily-shortcut">
        <ReactDailyShortcut />
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
