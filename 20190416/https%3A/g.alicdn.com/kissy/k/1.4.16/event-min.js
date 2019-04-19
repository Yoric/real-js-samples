/*
Copyright 2014, KISSY v1.49.10
MIT Licensed
build time: Dec 10 15:03
*/
KISSY.add("event",["event/dom","event/custom"],function(b,d){var a=d("event/dom"),c=d("event/custom"),a=b.Event=b.merge(a,{DomEvent:a,CustomEvent:c});a.global=c.global;b.EventTarget=a.Target=c.Target;return a});
