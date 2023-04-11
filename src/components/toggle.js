import React from "react"
class toggle extends React.Component{
    render() {  
        return (  
            <div>  
                <h1>Welcome to JavaTpoint!!</h1>  
                {  
                    this.state.displayBio ? (   
                        <div>  
                            <p><h4>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h4></p>  
                            <button onClick={this.toggleDisplayBio}> Show Less </button>  
                      </div>  
                        ) : (  
                            <div>  
                                <button onClick={this.toggleDisplayBio}> Read More </button>  
                            </div>  
                        )  
                }  
           </div>  
      )  
}
}

export default toggle;