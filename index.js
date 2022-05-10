const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
// create context
const UserContext = React.createContext(null);

function Spa() {
  return (
    <HashRouter>
      <div>
          <h1>Password Generator</h1>
          <Link to="/products">Generate Password</Link> --
          <Link to="/">Home</Link> -- 
          <Link to="/about/">About</Link>
          
          <hr/>
          <UserContext.Provider value={{users:['You']}}>
            <Route path="/" exact    component={Home}     />
            <Route path="/about/"    component={About}    />          
            <Route path="/products/" component={Products} />
          </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
