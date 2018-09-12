import React from "react";

class Form extends React.Component {
    //....State holding an array
    state = {
            Questions: [{CorrectAnswer:"",
                IncorrectAnswer:""}],
    }

    handleChange = (e) => {
        if (["CorrectAnswer", "IncorrectAnswer"].includes(e.target.className) ) {
            let Questions = [...this.state.Questions]
            Questions[e.target.dataset.id][e.target.className] = e.target.value
            this.setState({ Questions }, () => console.log(this.state.Questions))
        } else {
            this.setState({ [e.target.name]: e.target.value.toUpperCase()  })
        }
    }

    //....State...
    addQuestion = (e) => {
        this.setState((prevState) => ({
            Questions: [...prevState.Questions, {CorrectAnswer:"",IncorrectAnswer:""}],
            }));
    }
    handleSubmit = (e) => {e.preventDefault() }
    render(){
        let {Questions} = this.state;
        return(
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <label htmlFor="Question">Question 1</label>
                <input type = "text" className = "enter-test-title"/> <br/>
                <label>Please enter the correct answer</label>
                <input type="text" className="answer" placeholder="Answer..."/> <br/>
                <label>Please enter the incorrect answer</label>
                <input type="text" className="answer" placeholder="Answer..."/> <br />
                <button onClick={this.addQuestion}>Add new Question</button>
                {
                    Questions.map((val, idx)=> {
                        let CorrectAnswerId = 'CorrectAnswer-${idx}', IncorrectAnswerId = 'IncorrectAnswer-${idx}'
                        return(
                            <div key={idx}>
                                <label htmlFor={CorrectAnswerId}>{'CorrectAnswer #${idx + 1}'}</label>
                                <input
                                type="text" name={CorrectAnswerId} data-id={idx} id={CorrectAnswerId}
                                className="name"/>
                                <label htmlFor={IncorrectAnswerId}>IncorrectAnswer</label>
                                <input type="text" name={IncorrectAnswerId} data-id={idx} id={IncorrectAnswerId}
                                className="IncorrectAnswer"/>
                            </div>
                        )
                    })
                }
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}
export default Form;

