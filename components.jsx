var destination = document.querySelector("#container")

    class HelloWorld extends React.Component {
      render() {
        return <p>Hello, {this.props.greetTarget}!</p>
      }
    }

    class Buttonify extends React.Component {

      render() {

        return(
        <div>
            <button type = {this.props.behavior}>{this.props.children}</button>
        </div>
        );
      }
    }
    
    ReactDOM.render(
      <div>

        <Buttonify behavior="submit"> SEND DATA</Buttonify>

        <HelloWorld greetTarget="Batman"/>
        <HelloWorld greetTarget="Iron Man"/>
        <HelloWorld greetTarget="Megaman"/>
        <HelloWorld greetTarget="Catwoman"/>

      </div>,
      destination
    );