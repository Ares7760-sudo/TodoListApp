import React from 'react';
import { withRouter } from "react-router";
import axios from 'axios';

class Home extends React.Component {

    state = {
        quote: "",
        info: ""
    }

    async componentDidMount() {
        /*
        axios.get('https://my-json-server.typicode.com/Ares7760-sudo/light-backend-api/quotes')
        .then(res => {
            console.log('get data >>>:', res.data)
        })*/
        let res = await axios.get('https://my-json-server.typicode.com/Ares7760-sudo/light-backend-api/quotes')

        if(res && res.data) {
            let randomNumber = Math.floor(Math.random() * res.data.length);
            let randomQuote = res.data[randomNumber].quote_content;
            let quote_info = res.data[randomNumber].info;

            this.setState({
                quote: randomQuote ? randomQuote : '',
                info: quote_info ? quote_info : ''
            })
        }
        
        // redirect page without reload page
        setTimeout(() => {
            this.props.history.push('/todo')
        }, 9000)
    }

    render () {
        let {quote, info} = this.state;
        
        return (
            <>
                <div className='mb-3 mt-3 row'>
                    <h2>Make simple life with simple Todo List</h2> 
                </div>
                <div className='figure'>
                <blockquote class="blockquote">
                {
                    <p>
                        { quote.split('\\n').map((item, idx) => {
                            return(
                                <>
                                {item}<br/>
                                </>
                            )
                        }) 
                        }
                    </p>
                }
                </blockquote>
                <figcaption class="mb-3 mt-3 blockquote-footer">
                        {info}
                </figcaption>
                </div>
            </>
        )
    }
}

export default withRouter(Home);
