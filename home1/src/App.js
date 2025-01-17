import './App.css';



function Header() {
  return(
      <div>
        <h2>hello i'm HEADER</h2>
        <Title/>
      </div>
  )
}
function Content() {
  return (
      <div>
        <h3>hello i'm CONTENT</h3>
        <Title/>
      </div>
  )
}
function Footer() {
  return (
      <div>
        <h4>hello i'm FOOTER</h4>
        <Title/>
      </div>
  )
}

function Title() {
  return (
      <div>
        <h6>hello i'm daughter</h6>
      </div>
  )
}


function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}


export default App;
