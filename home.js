function Home(){
    const ctx = React.useContext(UserContext);  
        
    return (
        <div>
            <h3>Home Component</h3>
            <pre>Welcome to the site- happy to see you! 
                Click on Generate Password ABOVE to generate random passwords
            </pre>
            {JSON.stringify(ctx.users)}
        </div>
    );
}