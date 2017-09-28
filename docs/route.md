## route-2.7.0的使用
    1.入口文件引入hashHistory以及RouterMap文件
    >  import { hashHistory } from 'react-router'
    >  import RouterMap from './router/routeMap';
    >
    >  render(
    >    <RouterMap history = { hashHistory } />,
    >    document.getElementById('root')
    >  )

    2.在router > routeMap.jsx 中写入路由代码
    > import { Router, Route, IndexRoute } from 'react-router'
    > 
    > class RouterMap extends React.Component {
    >   render() {
    >       return (
    >           <Router history={this.props.history}>
    >               <Route path="/" component={App}>
    >                   <IndexRoute component={Home}/>
    >                   <Route path="/user" component={User} />
    >                   <Route path="*" component={NotFound} />
    >               </Route>
    >           </Router>
    >       )
    >   }
    > }






