function Products(){
    const ctx = React.useContext(UserContext);  
    ctx.users.push(Math.random().toString(36).substr(2, 8));

    return (
        <div>
            <h3>Password Generator</h3>
            <p>Click on Generate Password ABOVE for more passwords</p>
            {JSON.stringify(ctx.users)}
        </div>
    );
}