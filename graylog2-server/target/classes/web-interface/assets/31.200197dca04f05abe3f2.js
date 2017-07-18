webpackJsonp([31],{1166:function(t,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var a=e(2),u=function(t){return t&&t.__esModule?t:{default:t}}(a),n=e(15),i=u.default.createClass({displayName:"AssignOutputDropdown",propTypes:{outputs:u.default.PropTypes.array.isRequired,onSubmit:u.default.PropTypes.func.isRequired},getInitialState:function(){return{selectedOutput:this.PLACEHOLDER}},PLACEHOLDER:"placeholder",_formatOutput:function(t){return u.default.createElement("option",{key:t.id,value:t.id},t.title)},_handleUpdate:function(t){this.setState({selectedOutput:t.target.value})},_handleClick:function(){this.props.onSubmit(this.state.selectedOutput),this.setState({selectedOutput:this.PLACEHOLDER})},render:function(){var t=this.props.outputs,e=t.length>0?t.map(this._formatOutput):u.default.createElement("option",{disabled:!0},"No outputs available");return u.default.createElement("div",{className:"output-add"},u.default.createElement("div",{className:"form-inline"},u.default.createElement("select",{value:this.state.selectedOutput,name:"outputId",className:"form-control",onChange:this._handleUpdate},u.default.createElement("option",{value:this.PLACEHOLDER,disabled:!0},"Select existing output"),e)," ",u.default.createElement(n.Button,{ref:"submitButton",id:"add-existing-output",bsStyle:"success",type:"button",disabled:this.state.selectedOutput===this.PLACEHOLDER,onClick:this._handleClick},"Assign existing Output")))}});exports.default=i,t.exports=exports.default},1167:function(t,exports,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var u=e(2),n=a(u),i=e(12),o=a(i),s=e(953),r=n.default.createClass({displayName:"CreateOutputDropdown",PLACEHOLDER:"placeholder",getInitialState:function(){return{typeDefinition:[],typeName:this.PLACEHOLDER}},componentDidMount:function(){this.loadData()},loadData:function(){},render:function(){var t=o.default.map(this.props.types,this._formatOutputType);return n.default.createElement("div",null,n.default.createElement("div",{className:"form-inline"},n.default.createElement("select",{id:"input-type",defaultValue:this.PLACEHOLDER,value:this.state.typeName,onChange:this._onTypeChange,className:"form-control"},n.default.createElement("option",{value:this.PLACEHOLDER,disabled:!0},"Select Output Type"),t)," ",n.default.createElement("button",{className:"btn btn-success",disabled:this.state.typeName===this.PLACEHOLDER,onClick:this._openModal},"Launch new output")),n.default.createElement(s.ConfigurationForm,{ref:"configurationForm",key:"configuration-form-output",configFields:this.state.typeDefinition,title:"Create new Output",helpBlock:"Select a name of your new output that describes it.",typeName:this.state.typeName,submitAction:this.props.onSubmit}))},_openModal:function(t){this.state.typeName!==this.PLACEHOLDER&&""!==this.state.typeName&&this.refs.configurationForm.open()},_formatOutputType:function(t,e){return n.default.createElement("option",{key:e,value:e},t.name)},_onTypeChange:function(t){var e=this,a=t.target.value;this.setState({typeName:t.target.value}),this.props.getTypeDefinition(a,function(t){e.setState({typeDefinition:t.requested_configuration})})}});exports.default=r,t.exports=exports.default},1168:function(t,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var a=e(2),u=function(t){return t&&t.__esModule?t:{default:t}}(a),n=e(15),i=e(953),o=u.default.createClass({displayName:"EditOutputButton",propTypes:{output:a.PropTypes.object,disabled:a.PropTypes.bool,getTypeDefinition:a.PropTypes.func.isRequired,onUpdate:a.PropTypes.func},getInitialState:function(){return{typeDefinition:void 0,typeName:void 0,configurationForm:""}},handleClick:function(){var t=this;this.props.getTypeDefinition(this.props.output.type,function(e){t.setState({typeDefinition:e.requested_configuration}),t.refs.configurationForm.open()})},_handleSubmit:function(t){this.props.onUpdate(this.props.output,t)},render:function(){var t=this.state.typeDefinition,e=this.props.output,a=void 0;return t&&(a=u.default.createElement(i.ConfigurationForm,{ref:"configurationForm",key:"configuration-form-output-"+e.id,configFields:this.state.typeDefinition,title:"Editing Output "+e.title,typeName:e.type,helpBlock:"Select a name of your new output that describes it.",submitAction:this._handleSubmit,values:e.configuration,titleValue:e.title})),u.default.createElement("span",null,u.default.createElement(n.Button,{disabled:this.props.disabled,bsStyle:"info",onClick:this.handleClick.bind(null,e)},"Edit"),a)}});exports.default=o,t.exports=exports.default},1169:function(t,exports,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var u=e(2),n=a(u),i=e(15),o=e(1168),s=a(o),r=e(953),l=e(48),p=n.default.createClass({displayName:"Output",propTypes:{streamId:n.default.PropTypes.string,output:n.default.PropTypes.object.isRequired,types:n.default.PropTypes.object.isRequired,getTypeDefinition:n.default.PropTypes.func.isRequired,removeOutputFromStream:n.default.PropTypes.func.isRequired,removeOutputGlobally:n.default.PropTypes.func.isRequired},getInitialState:function(){return{}},componentDidMount:function(){var t=this;this._typeNotAvailable()||this.props.getTypeDefinition(this.props.output.type,function(e){t.setState({typeDefinition:e})})},_onDeleteFromStream:function(){this.props.removeOutputFromStream(this.props.output.id,this.props.streamId)},_onDeleteGlobally:function(){this.props.removeOutputGlobally(this.props.output.id)},_typeNotAvailable:function(){return void 0===this.props.types[this.props.output.type]},render:function(){if(!this._typeNotAvailable()&&!this.state.typeDefinition)return n.default.createElement(l.Spinner,null);var t=this.props.output,e=t.content_pack?n.default.createElement("span",{title:"Created from content pack"},n.default.createElement("i",{className:"fa fa-gift"})):null,a=void 0,u=void 0;this._typeNotAvailable()?a=n.default.createElement(i.Alert,{bsStyle:"danger"},"The plugin required for this output is not loaded. Editing it is not possible. Please load the plugin or delete the output."):u=n.default.createElement(r.ConfigurationWell,{key:"configuration-well-output-"+t.id,id:t.id,configuration:t.configuration,typeDefinition:this.state.typeDefinition});var o=this.props.streamId,p=void 0;return p=null!==o&&void 0!==o?n.default.createElement(l.IfPermitted,{permissions:"stream_outputs:delete"}," ",n.default.createElement(i.Button,{bsStyle:"info",onClick:this._onDeleteFromStream},"Delete from stream")):"",n.default.createElement("div",{key:t.id,className:"row content node-row"},n.default.createElement(i.Col,{md:12},n.default.createElement(i.Row,{className:"row-sm"},n.default.createElement(i.Col,{md:6},n.default.createElement("h2",{className:"extractor-title"},t.title," ",e,n.default.createElement("small",null,"ID: ",t.id)),"Type: ",t.type),n.default.createElement(i.Col,{md:6},n.default.createElement("div",{className:"text-right node-row-info"},n.default.createElement(l.IfPermitted,{permissions:"outputs:edit"},n.default.createElement(s.default,{disabled:this._typeNotAvailable(),output:t,onUpdate:this.props.onUpdate,getTypeDefinition:this.props.getTypeDefinition})),p,n.default.createElement(l.IfPermitted,{permissions:"outputs:terminate"}," ",n.default.createElement(i.Button,{bsStyle:"primary",onClick:this._onDeleteGlobally},"Delete globally"))))),n.default.createElement(i.Row,null,n.default.createElement(i.Col,{md:8},a,u))))}});exports.default=p,t.exports=exports.default},1170:function(t,exports,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var u=e(2),n=a(u),i=e(15),o=e(951),s=a(o),r=e(260),l=e(1169),p=a(l),d=n.default.createClass({displayName:"OutputList",propTypes:{streamId:n.default.PropTypes.string,outputs:n.default.PropTypes.array,onRemove:n.default.PropTypes.func.isRequired,onTerminate:n.default.PropTypes.func.isRequired,onUpdate:n.default.PropTypes.func.isRequired,getTypeDefinition:n.default.PropTypes.func.isRequired,types:n.default.PropTypes.object.isRequired},_sortByTitle:function(t,e){return(0,s.default)(t.title.toLowerCase(),e.title.toLowerCase())},_formatOutput:function(t){return n.default.createElement(p.default,{key:t.id,output:t,streamId:this.props.streamId,removeOutputFromStream:this.props.onRemove,removeOutputGlobally:this.props.onTerminate,onUpdate:this.props.onUpdate,getTypeDefinition:this.props.getTypeDefinition,types:this.props.types})},render:function(){if(!this.props.outputs)return n.default.createElement(r.Spinner,null);if(0===this.props.outputs.length)return n.default.createElement(i.Row,{className:"content"},n.default.createElement(i.Col,{md:12},n.default.createElement(i.Alert,{bsStyle:"info"},"No outputs configured.")));var t=this.props.outputs.sort(this._sortByTitle).map(this._formatOutput);return n.default.createElement("div",null,t)}});exports.default=d,t.exports=exports.default},1171:function(t,exports,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var u=e(2),n=a(u),i=e(15),o=e(18),s=a(o),r=e(5),l=a(r),p=e(165),d=a(p),f=e(260),c=a(f),m=e(1170),h=a(m),y=e(1167),v=a(y),E=e(1166),g=a(E),_=s.default.getStore("Outputs"),O=s.default.getStore("Streams"),b=n.default.createClass({displayName:"OutputsComponent",mixins:[d.default],componentDidMount:function(){this.loadData()},loadData:function(){var t=this,e=function(e){t.setState({outputs:e.outputs}),t.props.streamId&&t._fetchAssignableOutputs(e.outputs)};this.props.streamId?_.loadForStreamId(this.props.streamId,e):_.load(e),_.loadAvailableTypes(function(e){t.setState({types:e.types})})},getInitialState:function(){return{}},_handleUpdate:function(){this.loadData()},_handleCreateOutput:function(t){var e=this;_.save(t,function(t){return e.setState({typeName:"placeholder"}),e.props.streamId?O.addOutput(e.props.streamId,t.id,function(t){return e._handleUpdate(),t}):e._handleUpdate(),t})},_fetchAssignableOutputs:function(t){var e=this;_.load(function(a){var u=t.map(function(t){return t.id}),n=a.outputs.filter(function(t){return-1===u.indexOf(t.id)}).sort(function(t,e){return t.title.localeCompare(e.title)});e.setState({assignableOutputs:n})})},_handleAssignOutput:function(t){var e=this;O.addOutput(this.props.streamId,t,function(t){return e._handleUpdate(),t})},_removeOutputGlobally:function(t){var e=this;window.confirm("Do you really want to terminate this output?")&&_.remove(t,function(t){return l.default.success("Output was terminated.","Success"),e._handleUpdate(),t})},_removeOutputFromStream:function(t,e){var a=this;window.confirm("Do you really want to remove this output from the stream?")&&O.removeOutput(e,t,function(t){return l.default.success("Output was removed from stream.","Success"),a._handleUpdate(),t})},_handleOutputUpdate:function(t,e){var a=this;_.update(t,e,function(){a._handleUpdate()})},render:function(){if(this.state.outputs&&this.state.types&&(!this.props.streamId||this.state.assignableOutputs)){var t=this.props.permissions,e=this.props.streamId,a=this.isPermitted(t,["outputs:create"])?n.default.createElement(v.default,{types:this.state.types,onSubmit:this._handleCreateOutput,getTypeDefinition:_.loadAvailable,streamId:e}):null,u=e?n.default.createElement(g.default,{ref:"assignOutputDropdown",streamId:e,outputs:this.state.assignableOutputs,onSubmit:this._handleAssignOutput}):null;return n.default.createElement("div",{className:"outputs"},n.default.createElement(i.Row,{className:"content"},n.default.createElement(i.Col,{md:4},a),n.default.createElement(i.Col,{md:8},u)),n.default.createElement(h.default,{ref:"outputList",streamId:e,outputs:this.state.outputs,permissions:t,getTypeDefinition:_.loadAvailable,types:this.state.types,onRemove:this._removeOutputFromStream,onTerminate:this._removeOutputGlobally,onUpdate:this._handleOutputUpdate}))}return n.default.createElement(c.default,null)}});exports.default=b,t.exports=exports.default},1412:function(t,exports,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var u=e(2),n=a(u),i=e(1),o=a(i),s=e(18),r=a(s),l=e(48),p=e(1171),d=a(p),f=r.default.getStore("CurrentUser"),c=n.default.createClass({displayName:"SystemOutputsPage",mixins:[o.default.connect(f)],render:function(){return n.default.createElement(l.DocumentTitle,{title:"Outputs"},n.default.createElement("span",null,n.default.createElement(l.PageHeader,{title:"Outputs in Cluster"},n.default.createElement("span",null,"Graylog nodes can forward messages via outputs. Launch or terminate as many outputs as you want here"," ",n.default.createElement("strong",null,"and then assign them to streams to forward all messages of a stream in real-time.")),n.default.createElement("span",null,"You can find output plugins in ",n.default.createElement("a",{href:"https://marketplace.graylog.org/",target:"_blank"},"the Graylog Marketplace"),".")),n.default.createElement(d.default,{permissions:this.state.currentUser.permissions})))}});exports.default=c,t.exports=exports.default}});
//# sourceMappingURL=31.200197dca04f05abe3f2.js.map