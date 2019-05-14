import React, { Component } from 'react';
import styles from './Lotto.scss';
import classNames from 'classnames/bind';
import LottoMain from 'component/LottoMain';
import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const cx = classNames.bind(styles);

let randNum = new Array();

class Lotto extends Component {
    state = {
        first: null,
        second: null,
        third: null,
        fourth: null,
        fifth: null,
        sixth: null        
    }
    handleClick = () => {
        const { first, second, third, fourth, fifth, sixth } = this.state;
        const LottoNumber = first+"-"+second+"-"+third+"-"+fourth+"-"+fifth+"-"+sixth;
        console.log(LottoNumber);
        axios.post("http://18.220.117.207:5000/lotto/check", {lotto: LottoNumber})
        .then(response => console.log(response))
        .catch(e => console.log(e))
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        for(let i = 0; i < 7; i++) {
            randNum[i] = Math.floor(Math.random() * 45) + 1;
        }
        const { first, second, third, fourth, fifth, sixth } = this.state;
        const { handleChange, handleClick } = this;
        return (
            <div>
                <LottoMain randNum={randNum} handleChange={handleChange} handleClick={handleClick} first={first} second={second} 
                third={third} fourth={fourth} fifth={fifth} sixth={sixth}/>
                <div className={cx('description')}> 숫자 범위는 1 ~ 45 입니다. </div>
            </div>
        );
    }
}

export default Lotto;