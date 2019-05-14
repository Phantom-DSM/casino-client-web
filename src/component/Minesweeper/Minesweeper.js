import React from 'react';
import styles from './Minesweeper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Minesweeper = ({handleCashOut, handleGameStart, handleMineClick, BattingYam, handleChange, UserYam, next}) => {
    return (
        <div>
            <div className={cx('Minesweeper')}>
                <table id="table-Minesweeper">
                    <tbody>
                        <tr>
                            <td id="1"></td>
                            <td id="2"></td>
                            <td id="3"></td>
                            <td id="4"></td>
                            <td id="5"></td>
                        </tr>
                        <tr>
                            <td id="6"></td>
                            <td id="7"></td>
                            <td id="8"></td>
                            <td id="9"></td>
                            <td id="10"></td>
                        </tr>
                        <tr>
                            <td id="11"></td>
                            <td id="12"></td>
                            <td id="13"></td>
                            <td id="14"></td>
                            <td id="15"></td>
                        </tr>
                        <tr>
                            <td id="16"></td>
                            <td id="17"></td>
                            <td id="18"></td>
                            <td id="19"></td>
                            <td id="20"></td>
                        </tr>
                        <tr>
                            <td id="21"></td>
                            <td id="22"></td>
                            <td id="23"></td>
                            <td id="24"></td>
                            <td id="25"></td>
                        </tr>
                    </tbody>
                </table>
                <div className={cx('batting-status')}>
                    <div id="next" className={cx('user','next')}>다음 추가금액 : 0{next}</div>
                    <div id="stake" className={cx('user','current')}>현재까지 번 돈 : 0{BattingYam}</div>
                    <button onClick={handleCashOut}>Cash out</button>
                </div>
            </div>
            <div className={cx('user-interface')}>
                <div className={cx('user','status')}>현재 Yam : {UserYam}</div>
                <div className={cx('user','batting')}> 배팅금액 입력 : <input type="text" name="batting_money"  onChange={handleChange}/></div>
                <div className={cx('user','num')}> 폭탄 개수 <button className="booms" name="1" onClick={handleMineClick}>1</button>  <button name="3" className="booms" onClick={handleMineClick}>3</button>  <button name="5" className="booms" onClick={handleMineClick}>5</button> <button name="24" className="booms" onClick={handleMineClick}>24</button></div>
                <div className={cx('user', 'button')}><button id="button_start" onClick={handleGameStart}>게임 시작</button></div>
            </div>
        </div>
    );
};

export default Minesweeper;