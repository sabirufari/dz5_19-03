import React from 'react';
import styles from './toggles.module.css'

class Toggles extends React.Component {
    constructor() {
        super()
        this.state = {
            selected: 'yes',
            showText: false
        }
        this.changeSelected = this.changeSelected.bind(this)
        this.changeShowText = this.changeShowText.bind(this)
    }

    changeSelected = (e) => {
        this.setState({ selected: e.target.checked })
    }

    changeShowText = (e) => {
        this.setState({ showText: !this.state.showText })
    }
    render() {
        return (
            <div className={styles.container}> 
                <div>
                    <button onClick={this.changeShowText}>Скрыть текст</button>
                    {this.state.showText ?
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus minima ipsam magnam consequatur! Dolorum quas laboriosam, inventore optio voluptas eos.</p> : null}
                </div>
                <div>
                    <div className={styles.question}>
                        <span>Вы уверены что хотите закончить курсы?</span>
                        <input

                            type="radio"
                            id="yes"
                            name="choose"
                            value="yes"
                            checked={this.state.selected === 'yes'}
                        />
                        <label htmlFor="yes">Yes</label>

                        <input

                            type="radio"
                            id="no"
                            name="choose"
                            value="no"
                            checked={this.state.selected === 'no'}
                        />
                        <label htmlFor="no">No</label>

                        <input

                            type="radio"
                            id="maybe"
                            name="choose"
                            value="maybe"
                            checked={this.state.selected === 'maybe'}
                        />
                        <label htmlFor="maybe">Maybe</label>
                    </div>
                </div>
            </div>
        )
    }

}

export default Toggles;