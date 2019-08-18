const title = 'Welcome, this is Siraegi World';
const desc = 'Hi, my name';
const myTitleId = 'main-title';
const name = 'siraegi';

const header = (
  <header>
    <h1 id={myTitleId}>{title}</h1>
    <p>{desc} is {name}</p>
  </header>
);

ReactDOM.render(header, document.getElementById('root'));