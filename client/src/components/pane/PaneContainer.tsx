import * as React from 'react';
import { FormatButton } from "../button/FormatButton";
import JSONPretty from 'react-json-pretty';

type IState = {
    value: string;
    processedData: string;
}

export default class PaneContainer extends React.Component<{}, IState> {
    
    constructor(props: any) {
        super(props);
        this.state = {
            value: "",
            processedData: ""
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): any => {
        this.setState({value: event.target.value});
    }

    cb = (data: string) => {
        if(data) {
            this.setState({processedData: data});
        }
    }
    
    render () {
        return (
            <>
                <div className={'pane-container-top'}>
                    <label>
                        <textarea 
                            name="postContent" 
                            rows={10} 
                            cols={80}
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </label>
                    {<FormatButton 
                        name={'format'} 
                        className={'format-btn-container'} 
                        inputValue={this.state.value} 
                        onClick={this.cb}
                    />}
                </div>
                <div className={'pane-container-bottom'}>
                    {this.state.processedData && 
<                       JSONPretty 
                            id="json-pretty" 
                            data={this.state.processedData} 
                            style={{backgroundColor: '#DCE7E8'}} 
                            space="3"
                            keyStyle="color: #f2490a;font-size:1.1em"
                            stringStyle="color: blue;font-size:1.1em"
                            >
                        </JSONPretty>
                    }
                </div>
            </>
        )
    }
}