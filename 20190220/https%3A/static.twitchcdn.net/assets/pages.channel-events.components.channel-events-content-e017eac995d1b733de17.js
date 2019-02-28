(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{DXJk:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"Events_FollowEvent"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"FollowEventInput"}}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followEvent"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"event"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"EventCollection"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"self"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isFollowing"},arguments:[],directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"EventLeaf"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"self"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isFollowing"},arguments:[],directives:[]}]}}]}}]}}]}}]}}],loc:{start:0,end:193}};t.loc.source={body:"mutation Events_FollowEvent($input: FollowEventInput!) {\nfollowEvent(input: $input) {\nevent {\n...on EventCollection {\nid\nself {\nisFollowing\n}\n}\n...on EventLeaf {\nid\nself {\nisFollowing\n}\n}\n}\n}\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};e.exports=t},Jhye:function(e,n,t){"use strict";var i=t("mrSG"),a=t("q1tI"),l=t("/7QA"),r=t("X7Ac"),o=t("eJ65");var d=t("ug+5"),s=t("Ue10"),c=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.onShareClicked=function(e){var t="";switch(e){case r.b.Twitter:t="twitter";break;case r.b.Facebook:t="facebook";break;case r.b.Reddit:t="reddit";break;case r.b.VKontakte:t="vk";break;case r.b.Copy:t="url";break;default:t="unknown"}Object(d.c)({shareMedium:t,eventID:n.props.id,channelLogin:n.props.channelLogin||"undefined",channelID:n.props.channelID||"undefined",location:n.props.eventLocation})},n}return i.__extends(n,e),n.prototype.render=function(){var e=function(e){return"https://www.twitch.tv/events/"+e}(this.props.id),n=this.props.children;return this.props.children||(n=a.createElement(s.C,{dropdown:!0,type:s.I.Hollow},Object(l.d)("Share","ShareEvent"))),a.createElement(o.a,null,n,a.createElement(s.x,{direction:this.props.balloonDirection},a.createElement(s.fb,{padding:1},a.createElement(s.fb,{display:s.Da.Flex,flexDirection:s.Ga.Row,flexWrap:s.Ha.NoWrap,justifyContent:s.eb.Center},a.createElement(r.a,{type:r.b.Twitter,text:this.props.title,url:e,onShareClick:this.onShareClicked}),a.createElement(r.a,{type:r.b.Facebook,text:this.props.title,url:e,onShareClick:this.onShareClicked}),a.createElement(r.a,{type:r.b.Reddit,text:this.props.title,url:e,onShareClick:this.onShareClicked}),a.createElement(r.a,{type:r.b.VKontakte,text:this.props.title,url:e,onShareClick:this.onShareClicked}),a.createElement(r.a,{type:r.b.Copy,text:this.props.title,url:e,onShareClick:this.onShareClicked})))))},n}(a.Component);t.d(n,"a",function(){return c})},LfZz:function(e,n,t){"use strict";var i=t("mrSG"),a=t("/MKj"),l=t("fvjX"),r=t("1/iK"),o=t("aCAx"),d=t("y5D0"),s=t("kRBY"),c=t("/HY+"),u=t("q1tI"),m=t("/7QA"),v=t("eJ65"),p=t("DMoW"),k=t("Ue10"),f=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.handleReportClick=function(){if(!n.props.isLoggedIn)return n.props.login();if(n.props.targetUser){var e="https://www.twitch.tv/events/"+n.props.eventID;n.props.showReportUserModal({reportContext:{contentType:p.Fa.USER_REPORT,targetUserID:n.props.targetUser.id},title:Object(m.d)("Report {channelName}",{channelName:n.props.targetUser.displayName},"EventMoreMenu"),defaultDescription:"Report event: "+e})}},n}return i.__extends(n,e),n.prototype.render=function(){return u.createElement(v.a,null,u.createElement(k.C,{icon:k.Db.More,type:k.I.Hollow}),u.createElement(k.x,{direction:this.props.balloonDirection,tailOffset:this.props.tailOffset},u.createElement(k.fb,{padding:{y:1}},u.createElement(k.cb,{disabled:!this.props.targetUser,onClick:this.handleReportClick},u.createElement(k.fb,{padding:{x:1,y:.5}},Object(m.d)("Report","EventMoreMenu"))))))},n}(u.Component);var g=Object(a.connect)(function(e){return{isLoggedIn:Object(s.f)(e)}},function(e){return Object(l.bindActionCreators)({login:function(){return Object(d.e)(r.a.ReportChannel)},showReportUserModal:function(e){var n=i.__rest(e,[]);return Object(o.d)(c.a,n)}},e)})(f);t.d(n,"a",function(){return g})},ePeS:function(e,n,t){"use strict";var i;function a(e){switch(e){case"past":return i.Past;case"future":default:return i.Future}}t.d(n,"a",function(){return i}),t.d(n,"b",function(){return a}),function(e){e.Future="future",e.Past="past"}(i||(i={}))},irYM:function(e,n,t){"use strict";var i=t("/MKj"),a=t("fvjX"),l=t("1/iK"),r=t("y5D0"),o=t("kRBY"),d=t("mrSG"),s=t("q1tI"),c=t("/7QA"),u=t("yR8l"),m=t("geRD"),v=t("ug+5"),p=t("Ue10"),k=t("DXJk"),f=t("wSZZ"),g=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.handleButton=function(e){return e&&(e.stopPropagation(),e.preventDefault()),n.toggleFollowing()},n}return d.__extends(n,e),n.prototype.render=function(){var e=Object(c.d)("Remind Me","FollowEvent"),n=Object(c.d)("Reminder Set","FollowEvent");if(this.props.small){var t=e,i=p.Db.Heart;return this.props.areNotificationsEnabled&&(t=n,i=p.Db.FollowCheck),s.createElement(p.jc,{label:t,direction:this.props.tooltipDirection},s.createElement(p.D,{size:p.E.Default,icon:i,onClick:this.handleButton,ariaLabel:t}))}return s.createElement(p.C,{type:this.props.areNotificationsEnabled?p.I.Success:p.I.Default,onClick:this.handleButton,icon:this.props.areNotificationsEnabled?p.Db.FollowCheck:p.Db.Heart,ariaLabel:this.props.areNotificationsEnabled?n:e},this.props.areNotificationsEnabled?n:e)},n.prototype.toggleFollowing=function(){if(!this.props.isLoggedIn)return this.props.login();this.props.areNotificationsEnabled?this.triggerUnfollowMutation():this.triggerFollowMutation(),Object(v.d)({action:this.props.areNotificationsEnabled?v.b.EmailReminderOff:v.b.EmailReminderOn,channelLogin:this.props.channelLogin||"undefined",channelID:this.props.channelID||"undefined",eventID:this.props.eventID,location:this.props.eventLocation})},n.prototype.triggerFollowMutation=function(){var e,n={eventID:this.props.eventID};e="EventCollection"===this.props.eventTypename?{followEvent:{__typename:"FollowEventPayload",event:{__typename:"EventCollection",id:this.props.eventID,self:{__typename:"EventSelfConnection",isFollowing:!0}}}}:{followEvent:{__typename:"FollowEventPayload",event:{__typename:"EventLeaf",id:this.props.eventID,self:{__typename:"EventSelfConnection",isFollowing:!0}}}};var t=Object(m.b)(n,e);this.props.followEvent(t)},n.prototype.triggerUnfollowMutation=function(){var e,n={eventID:this.props.eventID};e="EventCollection"===this.props.eventTypename?{unfollowEvent:{__typename:"UnfollowEventPayload",event:{__typename:"EventCollection",id:this.props.eventID,self:{__typename:"EventSelfConnection",isFollowing:!1}}}}:{unfollowEvent:{__typename:"UnfollowEventPayload",event:{__typename:"EventLeaf",id:this.props.eventID,self:{__typename:"EventSelfConnection",isFollowing:!1}}}};var t=Object(m.b)(n,e);this.props.unfollowEvent(t)},n}(s.PureComponent),h=Object(a.compose)(Object(u.a)(k,{name:"followEvent"}),Object(u.a)(f,{name:"unfollowEvent"}))(g);var b=Object(i.connect)(function(e){return{isLoggedIn:Object(o.f)(e)}},function(e){return Object(a.bindActionCreators)({login:function(){return Object(r.e)(l.a.EventFollowButton)}},e)})(h);t.d(n,"a",function(){return b})},r93r:function(e,n,t){"use strict";t.r(n);var i=t("mrSG"),a=t("cr+I"),l=t("q1tI"),r=t("/7QA"),o=t("8/mp"),d=t("GnwI"),s=t("fvjX"),c=t("yR8l"),u=t("kduP"),m=t("rO6o"),v=t("irYM"),p=t("LfZz"),k=t("Jhye");var f=t("ug+5"),g=t("Ue10"),h=Object(d.withLatencyTracking)("EventListCard",{autoReportInteractive:!0})(function(e){var n=new Date(e.event.startAt),t=new Date(e.event.endAt),a=n>new Date,o=Object(u.b)(e.event.id),d=!(!e.event.self||!e.event.self.isFollowing),s=e.upwardBalloons?g.y.Top:g.y.Bottom,c=e.upwardBalloons?g.lc.Top:g.lc.Bottom,h=e.event.game&&e.event.game.displayName||"-",b=e.channel&&(e.channel.displayName||e.channel.login)||"-",E=null,y=null,N=null;return e.channel&&e.channel.id&&e.channel.login&&(a&&(E=l.createElement(g.fb,{margin:{right:1}},l.createElement(v.a,{eventID:e.event.id,eventTypename:e.event.__typename,areNotificationsEnabled:d,channelLogin:e.channel.login,channelID:e.channel.id,eventLocation:f.a.ChannelEvents,tooltipDirection:c}))),y=l.createElement(g.fb,{margin:{right:1}},l.createElement(k.a,{id:e.event.id,title:e.event.title,channelLogin:e.channel.login,channelID:e.channel.id,eventLocation:f.a.ChannelEvents,balloonDirection:s})),N=l.createElement(p.a,{targetUser:{id:e.channel.id,displayName:b},eventID:e.event.id,balloonDirection:s})),l.createElement(g.Ob,{margin:{y:1},background:g.u.Base,elevation:1},l.createElement(g.J,{row:!0},l.createElement(g.Xa,{flexShrink:0},l.createElement(g.Aa,{to:o},l.createElement(g.L,{size:g.M.Size32,aspect:g.s.Aspect16x9,src:e.event.imageURL,alt:e.event.title},l.createElement(m.a,{date:n})))),l.createElement(g.K,null,l.createElement(g.fb,{margin:{x:2}},l.createElement(g.Xa,{margin:{bottom:1}},l.createElement(g.Aa,{to:o},l.createElement(g.Ca,{type:g.gc.H4},e.event.title))),l.createElement(g.Ca,{color:g.R.Alt2},function(e,n){var t=new Date,a={weekday:"long",month:"short",day:"numeric"},l={timeZoneName:"short"};t.getFullYear()!==e.getFullYear()&&(a=i.__assign({},a,{year:"numeric"})),e.getDate()!==n.getDate()&&(l=i.__assign({},l,{weekday:"long",month:"short",day:"numeric"}),t.getFullYear()!==n.getFullYear()&&(l=i.__assign({},l,{year:"numeric"})));var o=Object(r.j)(e,a),d=Object(r.j)(n,l);return Object(r.d)("{startTime} - {endTime}",{startTime:o,endTime:d},"EventListCard")}(n,t)),l.createElement(g.Ca,{color:g.R.Alt2},Object(r.d)("{channelName} streaming {gameName}",{channelName:b,gameName:h},"EventListCard")),l.createElement(g.fb,{display:g.Da.Flex,margin:{top:2}},E,y,l.createElement(g.fb,{margin:{right:1}},l.createElement(g.C,{type:g.I.Hollow,linkTo:o},Object(r.d)("View Details","EventListCard"))),N)))))}),b=t("4hz/"),E=t("ePeS"),y=t("xMut"),N={options:function(e){return{variables:{channelLogin:e.channelLogin,limit:20,before:e.filter===E.a.Future?null:(new Date).toISOString(),after:e.filter!==E.a.Future?null:(new Date).toISOString(),sortOrder:e.filter===E.a.Future?"ASC":"DESC"}}},props:function(e){return i.__assign({},e,{loadMore:function(){if(e.data.user&&e.data.user.eventLeaves&&e.data.user.eventLeaves.edges){var n=e.data.user.eventLeaves.edges[Math.max(e.data.user.eventLeaves.edges.length-1,0)],t=n&&n.cursor||"";return e.data.fetchMore({query:y,variables:i.__assign({},e.data.variables,{cursor:t}),updateQuery:function(e,n){var t=n.fetchMoreResult,a=e.user&&e.user.eventLeaves&&e.user.eventLeaves.edges||[];return t.user&&t.user.eventLeaves&&t.user.eventLeaves.edges&&(a=a.concat(t.user.eventLeaves.edges)),{user:i.__assign({},t.user,{eventLeaves:i.__assign({},t.user&&t.user.eventLeaves||{},{edges:a})})}}})}}})}},S=Object(s.compose)(Object(c.a)(y,N),Object(d.withLatencyTracking)("ChannelEventsSchedule",{autoReportInteractive:!0}))(function(e){var n=null,t=null,i=null,a=!1;if(!e.data.loading&&!e.data.error&&e.data.user&&e.data.user.eventLeaves)e.data.user.eventLeaves.edges&&0!==e.data.user.eventLeaves.edges.length?i=e.data.user.eventLeaves.edges.map(function(e,n,t){if(!e||!e.node)return null;var i=n===t.length-1,a=null;switch(e.node.channel&&e.node.channel.id&&e.node.channel.login&&(a={id:e.node.channel.id,login:e.node.channel.login,displayName:e.node.channel.displayName}),e.node.__typename){case"EventLeaf":return l.createElement(h,{key:e.node.id,event:e.node,channel:a,upwardBalloons:i});default:return null}}):n=Object(r.d)("Nothing here yet","ChannelEventsSchedule"),a=e.data.user.eventLeaves.pageInfo.hasNextPage;else if(e.data.error)n=Object(r.d)("Error loading events","ChannelEventsSchedule");else if(e.data.loading&&(!e.data.user||!e.data.user.eventLeaves))return l.createElement(b.a,null);return null!==n&&(t=l.createElement(g.fb,{margin:{top:5},display:g.Da.Flex,flexDirection:g.Ga.Row,justifyContent:g.eb.Center},l.createElement(g.Ca,{type:g.gc.H4,color:g.R.Alt2,italic:!0},n))),l.createElement(g.fb,null,i,t,e.data.loading&&l.createElement(g.hb,{fillContent:!0}),l.createElement(o.a,{loadMore:e.loadMore,enabled:a}))}),w=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.handleToggleChange=function(e){var t=Object(E.b)(e.currentTarget.value),i=a.parse(n.props.searchQuery);t!==E.a.Future?i.filter=t:delete i.filter,n.props.onEventToggle(a.stringify(i))},n}return i.__extends(n,e),n.prototype.render=function(){var e=this.props.channelLogin,n=a.parse(this.props.searchQuery),t=Object(E.b)(n.filter);return l.createElement(g.fb,{display:g.Da.Flex,flexGrow:1,fullHeight:!0},l.createElement(g.Xa,{fullWidth:!0},l.createElement(o.b,null,l.createElement(g.fb,{fullWidth:!0,padding:{y:2,x:3}},l.createElement(g.Gb,null,l.createElement(g.Hb,{name:"events-toggle",label:Object(r.d)("Future Events","ChannelEventsPage"),defaultChecked:t===E.a.Future,onChange:this.handleToggleChange,value:E.a.Future}),l.createElement(g.Hb,{name:"events-toggle",label:Object(r.d)("Past Events","ChannelEventsPage"),defaultChecked:t===E.a.Past,onChange:this.handleToggleChange,value:E.a.Past})),l.createElement(S,{filter:t,channelLogin:e})))))},n}(l.Component),F=Object(d.withLatencyTracking)("ChannelEventsContent",{autoReportInteractive:!0})(w);t.d(n,"ChannelEventsContentComponent",function(){return w}),t.d(n,"ChannelEventsContent",function(){return F})},rO6o:function(e,n,t){"use strict";var i=t("q1tI"),a=t("/7QA"),l=t("Ue10"),r=(t("z3xZ"),function(e){var n=Object(a.c)(e.date,{month:"short"}),t=Object(a.c)(e.date,{day:"numeric"});return i.createElement(l.Ob,{background:l.u.Base,elevation:2,display:l.Da.Flex,flexDirection:l.Ga.Column,className:"event-calendar-date",margin:{top:.5,left:.5},position:l.tb.Absolute,attachTop:!0,attachLeft:!0,flexWrap:l.Ha.NoWrap},i.createElement(l.Ob,{className:"event-calendar-date__month",display:l.Da.Flex,justifyContent:l.eb.Center,background:l.u.AccentAlt2},i.createElement(l.Ca,{fontSize:l.Ia.Size6,transform:l.fc.Uppercase,color:l.R.Overlay},n)),i.createElement(l.fb,{display:l.Da.Flex,justifyContent:l.eb.Center},i.createElement(l.Ca,{fontSize:l.Ia.Size3,color:l.R.Base},t)))});t.d(n,"a",function(){return r})},"ug+5":function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return a}),t.d(n,"c",function(){return o}),t.d(n,"d",function(){return d});var i,a,l=t("/7QA"),r=t("2xye");function o(e){var n={share_medium:e.shareMedium,event_id:e.eventID,channel:e.channelLogin,channel_id:e.channelID,location:e.location};return l.q.tracking.track(r.SpadeEventType.EventShare,n)}function d(e){var n={action:e.action,channel:e.channelLogin,channel_id:e.channelID,event_id:e.eventID,location:e.location};return l.q.tracking.track(r.SpadeEventType.EventFollowing,n)}!function(e){e.ChannelEvents="channel_events",e.DashboardEvents="dashboard_events",e.EventDetails="event_details",e.EventManagment="event_managment",e.EventSidebar="event_sidebar"}(i||(i={})),function(e){e.RemindMeOpen="remind_me_open_modal",e.EmailReminderOn="email_reminder_on",e.EmailReminderOff="email_reminder_off"}(a||(a={}))},wSZZ:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"Events_UnfollowEvent"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"UnfollowEventInput"}}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"unfollowEvent"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"event"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"EventCollection"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"self"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isFollowing"},arguments:[],directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"EventLeaf"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"self"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isFollowing"},arguments:[],directives:[]}]}}]}}]}}]}}]}}],loc:{start:0,end:199}};t.loc.source={body:"mutation Events_UnfollowEvent($input: UnfollowEventInput!) {\nunfollowEvent(input: $input) {\nevent {\n...on EventCollection {\nid\nself {\nisFollowing\n}\n}\n...on EventLeaf {\nid\nself {\nisFollowing\n}\n}\n}\n}\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};e.exports=t},xMut:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"EventsPage_EventScheduleQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"channelLogin"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"cursor"}},type:{kind:"NamedType",name:{kind:"Name",value:"Cursor"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"before"}},type:{kind:"NamedType",name:{kind:"Name",value:"Time"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"after"}},type:{kind:"NamedType",name:{kind:"Name",value:"Time"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sortOrder"}},type:{kind:"NamedType",name:{kind:"Name",value:"SortOrder"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},arguments:[{kind:"Argument",name:{kind:"Name",value:"login"},value:{kind:"Variable",name:{kind:"Name",value:"channelLogin"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"eventLeaves"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}},{kind:"Argument",name:{kind:"Name",value:"after"},value:{kind:"Variable",name:{kind:"Name",value:"cursor"}}},{kind:"Argument",name:{kind:"Name",value:"criteria"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"endsBefore"},value:{kind:"Variable",name:{kind:"Name",value:"before"}}},{kind:"ObjectField",name:{kind:"Name",value:"endsAfter"},value:{kind:"Variable",name:{kind:"Name",value:"after"}}},{kind:"ObjectField",name:{kind:"Name",value:"sortOrder"},value:{kind:"Variable",name:{kind:"Name",value:"sortOrder"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pageInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"edges"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"cursor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"node"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"self"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isFollowing"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"game"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"displayName"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"channel"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"login"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"displayName"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"imageURL"},arguments:[{kind:"Argument",name:{kind:"Name",value:"width"},value:{kind:"IntValue",value:"320"}},{kind:"Argument",name:{kind:"Name",value:"height"},value:{kind:"IntValue",value:"180"}}],directives:[]}]}}]}}]}}]}}]}}],loc:{start:0,end:475}};t.loc.source={body:"query EventsPage_EventScheduleQuery($channelLogin: String! $limit: Int $cursor: Cursor $before: Time $after: Time $sortOrder: SortOrder) {\nuser(login: $channelLogin) {\nid\neventLeaves(first: $limit after: $cursor criteria: {endsBefore: $before endsAfter: $after sortOrder: $sortOrder}) {\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\nid\nself {\nisFollowing\n}\ntitle\nstartAt\nendAt\ngame {\nid\ndisplayName\n}\nchannel {\nid\nlogin\ndisplayName\n}\nimageURL(width:320 height:180)\n}\n}\n}\n}\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};e.exports=t},z3xZ:function(e,n,t){}}]);