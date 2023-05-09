import {Component} from 'react'
import './index.css'

class StopWatch extends Component{
    state={minutes:0,seconds:0}

    toStart=()=>{
        this.timerId=setInterval(()=>{
            this.setState(prevState=>({seconds:prevState.seconds+1}))
        },1000)
    }

    toStop=()=>{
        clearInterval(this.timerId)
    }

    toReset=()=>{
        clearInterval(this.timerId)
        this.setState({minutes:0})
        this.setState({seconds:0})
    }

    time=()=>{
        const {minutes,seconds}=this.state
        const totalTime=minutes*60+seconds
        const min=Math.floor(totalTime/60)
        const sec=Math.floor(totalTime%60)
        const Minute=min>9 ? min : `0${min}`
        const Second=sec>9 ? sec : `0${sec}`
        return `${Minute}:${Second}`
    }
    render(){
        return(
            <div className="main-container">
                    <h1 className="heading">Stopwatch</h1>
                    <div className="con">
                        <div className="timerCon">
                            <img src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png" alt="stopwatch"/>
                            <p className="timer">Timer</p>
                        </div>
                        <h1 className="time">{this.time()}</h1>
                        <div className="buttonCon">
                            <button className="start" type="button" onClick={this.toStart}>Start</button>
                            <button className="stop" type="button" onClick={this.toStop} >Stop</button>
                            <button className="reset" type="button" onClick={this.toReset} >Reset</button>
                        </div>
                    </div>
            </div>
        )
    }
}

export default StopWatch