## redux的使用
    - 建立规则 reducers 创建一个reducers的文件夹 将所有的规则在index.js中合并成一个rootReducer并导出
    
    - index.js
    >   import { combineReducers } from 'redux';
        import userinfo from './userinfo';
        const rootReducer = combineReducers({
            userinfo
        })
        export default rootReducer;

    - 创建一个store
    >   import { createStore } from 'redux'
        import rootReducer from '../reducers'
        export default function configureStore(initialState) {
            const store = createStore(rootReducer, initialState,
                window.devToolsExtension ? window.devToolsExtension() : undefined
            )
            return store
        }

    - 建立事件动作 actions
    >   import * as actionTypes from '../constants/userinfo'
        export function login(data) {
            return {
                type: actionTypes.USERINFO_LOGIN,
                data
            }
        }
        export function updateCityName(data) {
            return {
                type: actionTypes.UPDATE_CITYNAME,
                data
            }
        }

    - Hello组件中进行派发
    >   import React from 'react'
        import { connect } from 'react-redux'
        import { bindActionCreators } from 'redux'
        import * as userinfoActions from '../actions/userinfo'
        import A from '../components/A'
        import B from '../components/B'
        import C from '../components/C'
        class Hello extends React.Component {
            render() {
                return (
                    <div>
                        <p>hello world</p>
                        <hr/>
                        <A userinfo={this.props.userinfo}/>
                        <hr/>
                        <B userinfo={this.props.userinfo}/>
                        <hr/>
                        <C actions={this.props.userinfoActions}/>
                    </div>
                )
            }
            componentDidMount() {
                // 模拟登陆
                this.props.userinfoActions.login({
                    userid: 'abc',
                    city: 'beijing'
                })
            }
        }
        function mapStateToProps(state) {
            return {
                userinfo: state.userinfo
            }
        }
        function mapDispatchToProps(dispatch) {
            return {
                userinfoActions: bindActionCreators(userinfoActions, dispatch)
            }
        }
        export default connect(
            mapStateToProps,
            mapDispatchToProps
        )(Hello)
