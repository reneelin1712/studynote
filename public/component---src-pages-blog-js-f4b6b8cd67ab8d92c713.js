(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"7oih":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("p/yD"),o=a("Wbzz"),i=function(e){return r.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},r.a.createElement(o.Link,{to:e.to},e.children))},s=function(e){e.children;var t=l.data;return r.a.createElement("div",{style:{margin:"0.5rem auto"}},r.a.createElement("header",{style:{marginBottom:"1.5rem"}},r.a.createElement(o.Link,{to:"/",style:{textShadow:"none",backgroundImage:"none",float:"left",marginRight:"1rem"}},r.a.createElement("h3",{style:{display:"inline"}},t.site.siteMetadata.title)),r.a.createElement("ul",{style:{listStyle:"none"}},r.a.createElement(i,{to:"/"},"Home"),r.a.createElement(i,{to:"/blog/"},"Blog"),r.a.createElement(i,{to:"/errors/"},"Errors"))))};t.a=function(e){var t=e.children;return r.a.createElement("div",{style:{margin:"0 auto",padding:"0 1rem"}},r.a.createElement(s,null),t)}},DrdP:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"title":"postgres","date":"2020-01-13 Mon"},"html":"<h2>postgres database setup</h2>","excerpt":"postgres database setup","fields":{"slug":"/postgres/"}}},{"node":{"frontmatter":{"title":"graphQL","date":"2020-01-09 Thur"},"html":"<p>Pandas are really sweet.</p>","excerpt":"Pandas are really sweet.","fields":{"slug":"/graphql/"}}}]}}}')},"p/yD":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"StudyNote"}}}}')},vx99:function(e,t,a){"use strict";a.r(t);var n=a("DrdP"),r=a("q1tI"),l=a.n(r),o=a("7oih"),i=a("Wbzz");t.default=function(){var e=n.data;return console.log(e),l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement("h2",null,"Blog"),l.a.createElement("ol",null,e.allMarkdownRemark.edges.map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(i.Link,{to:e.node.fields.slug},l.a.createElement("h4",null,e.node.frontmatter.title),l.a.createElement("p",null,e.node.frontmatter.date)))})))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-f4b6b8cd67ab8d92c713.js.map