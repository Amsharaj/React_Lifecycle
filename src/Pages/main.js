// import logo from '../logo.svg';
import '../App.css';
import Menu from '../Components/menu/menu';
import Person from '../Components/person/person';

function Main() {
  let props={first_name:"Ravi",age:45,data:[{"skill":"java","rating":4},{"skill":"DSA","rating":3},{"skill":"html","rating":2},{"skill":"css","rating":1},{"skill":"javascript","rating":5}]}
  return (
    <div className="Resume">
    <div className='Top'>

    </div>
    <div className='Bottom'>
      <div className='Left'><Menu {...props}/></div>
        <div className='Right'><Person token={'adasfadwddwefwefsddddwf'} age={33}/></div>
    </div>
  </div>

  );
}

export default Main;
