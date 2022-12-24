import React from 'react';
import style from './simpleForm.module.css'


class SimpleForm extends React.Component {
    constructor() {
        super()
        this.state = {
            surname: '',
            name: '',
            age: 1,
            checked: false
      
        }

        this.changeSurname = this.changeSurname.bind(this)
        this.changeName = this.changeName.bind(this)
        this.changeAge = this.changeAge.bind(this)
        this.changeChecked = this.changeChecked.bind(this)
    
    }

    changeSurname = () => {
        this.setState({ surname: e.target.value })
    }
    changeName = () => {
        this.setState({ name: e.target.value })
    }
    changeAge = () => {
        this.setState({ age: e.target.value })
    }
    changeChecked = () => {
        this.setState({ checked: !this.state.checked })
    }
   

    render() {
        return (
            <div className={style.container}>
                <div className={style.register}>
                    <form action="" className={style.simpleForm}>
                        <h2>Регистрация</h2>
                        <label>Фамилия:
                            <input
                                className={style.name}
                                type="text"
                                name='firstname'
                                disabled={this.state.checked}
                                placeholder='Введите фамилию'
                                onChange={this.changeSurname}

                            />
                        </label>
                        <label >Имя:
                            <input
                                className={style.name}
                                type="text"
                                name='firstname'
                                disabled={this.state.checked}
                                placeholder='Введите имя'
                                onChange={this.changeName}

                            />
                        </label>
                        <label> Возраст:
                            <input
                                className={style.age}
                                type="number"
                                name="age" min={1} max={120}
                                disabled={this.state.checked}
                                onChange={this.changeAge}
                            />
                        </label>
                        <label>
                            <input
                                className={style.checkbox}
                                id="checkbox"
                                type="checkbox"
                                name="checkbox"
                                onChange={this.changeChecked } />
                                

                            <div >я согласен(-сна)</div>
                            < input
                                type="submit"
                                name="submit"
                                disabled={!this.state.checked}
                                value="Отправить"
                            />

                        </label>
                    </form>
                </div>
            </div>
        )
    }
}

export default SimpleForm