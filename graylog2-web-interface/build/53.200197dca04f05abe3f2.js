webpackJsonp([53],{1400:function(e,exports,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(2),s=r(a),i=t(1),n=r(i),o=t(55),u=r(o),l=t(34),c=r(l),h=t(86),d=r(h),f=t(48),p=t(966),m=d.default.get("Nodes"),g=m.NodesStore,S=m.NodesActions,v=d.default.get("CurrentUser"),_=v.CurrentUserStore,y=d.default.get("Inputs"),D=y.InputsStore,T=y.InputsActions,I=d.default.get("MessageFields"),R=I.MessageFieldsStore,b=d.default.get("Refresh"),M=b.RefreshStore,P=d.default.get("Streams"),F=P.StreamsStore,E=d.default.get("UniversalSearch"),H=E.UniversalSearchStore,q=d.default.get("Search"),C=q.SearchStore,U=d.default.get("Decorators"),j=U.DecoratorsStore,N=s.default.createClass({displayName:"SearchPage",propTypes:{location:a.PropTypes.object.isRequired,searchConfig:a.PropTypes.object.isRequired,searchInStream:a.PropTypes.object,forceFetch:a.PropTypes.bool},mixins:[n.default.connect(g),n.default.connect(R),n.default.connect(_),n.default.listenTo(D,"_formatInputs"),n.default.listenTo(M,"_setupTimer","_setupTimer"),n.default.listenTo(j,"_refreshDataFromDecoratorStore","_refreshDataFromDecoratorStore")],getInitialState:function(){return{error:void 0,updatingSearch:!1,updatingHistogram:!1}},componentDidMount:function(){var e=this;T.list.triggerPromise(),F.listStreams().then(function(t){var r={};t.forEach(function(e){r[e.id]=e}),e.setState({streams:u.default.Map(r)})}),S.list()},componentWillReceiveProps:function(e){((this.props.location||{}).search!==(e.location||{}).search||this.props.searchInStream!==e.searchInStream||e.forceFetch)&&(this.promise&&this.promise.cancel(),this._refreshData(e.searchInStream))},componentWillUnmount:function(){this._stopTimer()},_setupTimer:function(e){this._stopTimer(),e.enabled&&(this.timer=setInterval(this._refreshData,e.interval))},_stopTimer:function(){this.timer&&clearInterval(this.timer)},_refreshDataFromDecoratorStore:function(){var e=this.props.searchInStream;this._refreshData(e)},_refreshData:function(e){var t=this,r=C.originalQuery,a=e||this.props.searchInStream||{},s=a.id;if(this.promise&&!this.promise.isCancelled())return this.promise;(!M.enabled||M.enabled&&parseInt(M.interval)>5e3)&&this.setState({updatingSearch:!0}),this.promise=H.search(C.originalRangeType,r,C.originalRangeParams.toJS(),s,null,C.page,C.sortField,C.sortOrder).then(function(e){t.isMounted()&&t.setState({searchResult:e,error:void 0});var a=t.props.location.query.interval?t.props.location.query.interval:t._determineHistogramResolution(e);return(!M.enabled||M.enabled&&parseInt(M.interval)>5e3)&&t.setState({updatingHistogram:!0}),H.histogram(C.originalRangeType,r,C.originalRangeParams.toJS(),a,s).then(function(e){return t.setState({histogram:e}),e}).finally(function(){return t.setState({updatingHistogram:!1})}),e},function(e){e.additional&&e.additional.status&&t.setState({error:e.additional})}).finally(function(){t.setState({updatingSearch:!1}),t.promise=void 0})},_formatInputs:function(e){var t=D.inputsAsMap(e.inputs);this.setState({inputs:u.default.Map(t)})},_determineSearchDuration:function(e){var t=e.to,r=void 0;if("relative"===C.originalRangeType&&0===C.originalRangeParams.get("relative")){var a=e.used_indices.sort(function(e,t){return(0,c.default)(e.end)-(0,c.default)(t.end)}),s=0===(0,c.default)(a[0].end).valueOf()?a[1]:a[0];r=void 0!==s?s.begin:t}else r=e.from;var i=(0,c.default)(t).diff(r,"minutes");return c.default.duration(i,"minutes")},_determineHistogramResolution:function(e){var t=this._determineSearchDuration(e);return t.asHours()<12?"minute":t.asDays()<3?"hour":t.asDays()<30?"day":t.asMonths()<2?"week":t.asMonths()<18?"month":t.asYears()<3?"quarter":"year"},_isLoading:function(){return!(this.state.searchResult&&this.state.inputs&&this.state.streams&&this.state.nodes&&this.state.fields&&this.state.histogram)},render:function(){if(this.state.error){var e=void 0;switch(this.state.error.status){case 400:e=s.default.createElement(p.MalformedSearchQuery,{error:this.state.error});break;default:e=s.default.createElement(p.SearchExecutionError,{error:this.state.error})}return s.default.createElement(f.DocumentTitle,{title:"Search error"},e)}if(this._isLoading())return s.default.createElement(f.Spinner,null);var t=this.state.searchResult;return t.all_fields=this.state.fields,s.default.createElement(f.DocumentTitle,{title:"Search"},s.default.createElement(p.SearchResult,{query:C.originalQuery,page:C.page,builtQuery:t.built_query,result:t,histogram:this.state.histogram,formattedHistogram:this.state.histogram.histogram,streams:this.state.streams,inputs:this.state.inputs,nodes:u.default.Map(this.state.nodes),searchInStream:this.props.searchInStream,permissions:this.state.currentUser.permissions,searchConfig:this.props.searchConfig,loadingSearch:this.state.updatingSearch||this.state.updatingHistogram,forceFetch:this.props.forceFetch}))}});exports.default=N,e.exports=exports.default}});
//# sourceMappingURL=53.200197dca04f05abe3f2.js.map