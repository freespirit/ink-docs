(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{106:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,f=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return t?a.a.createElement(f,c(c({ref:n},l),{},{components:t})):a.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),i=(t(0),t(106)),o={title:"Events",slug:"/basics/events"},c={unversionedId:"basics/events",id:"basics/events",isDocsHomePage:!1,title:"Events",description:"An ink! smart contract may define events that it can emit during contract execution.",source:"@site/docs/basics/events.md",slug:"/basics/events",permalink:"/ink-docs/basics/events",editUrl:"https://github.com/ink-docs/edit/master/docs/basics/events.md",version:"current",sidebar:"reference",previous:{title:"Mutating Storage Values",permalink:"/ink-docs/basics/mutating-values"},next:{title:"Trait Definitions",permalink:"/ink-docs/basics/trait-definitions"}},s=[{value:"Event Definition",id:"event-definition",children:[]},{value:"Emitting Events in a Constructor",id:"emitting-events-in-a-constructor",children:[]},{value:"Emitting Events from Messages",id:"emitting-events-from-messages",children:[]}],l={rightToc:s};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"An ink! smart contract may define events that it can emit during contract execution.\nEmitting events can be used by third party tools to query information about a contract's\nexecution and state."),Object(i.b)("p",null,"The following example ink! contract shows how an event ",Object(i.b)("inlineCode",{parentName:"p"},"Transferred")," is defined and\nemitted in the ",Object(i.b)("inlineCode",{parentName:"p"},"#[ink(constructor)]"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"use ink_lang as ink;\n\n#[ink::contract]\nmod erc20 {\n    /// Defines an event that is emitted\n    /// every time value is transferred.\n    #[ink(event)]\n    pub struct Transferred {\n        from: Option<AccountId>,\n        to: Option<AccountId>,\n        value: Balance,\n    }\n\n    #[ink(storage)]\n    pub struct Erc20 {\n        total_supply: Balance,\n        // more fields ...\n    }\n\n    impl Erc20 {\n        #[ink(constructor)]\n        pub fn new(initial_supply: Balance) -> Self {\n            let caller = Self::env().caller();\n            Self::env().emit_event(Transferred {\n                from: None,\n                to: Some(caller),\n                value: initial_supply,\n            });\n            Self { total_supply: initial_supply }\n        }\n\n        #[ink(message)]\n        pub fn total_supply(&self) -> Balance {\n            self.total_supply\n        }\n    }\n}\n")),Object(i.b)("p",null,"See our ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/paritytech/ink/blob/master/examples/erc20/lib.rs"}),Object(i.b)("inlineCode",{parentName:"a"},"ERC20 example contract")),"\nfor an elaborate example which uses events."),Object(i.b)("h2",{id:"event-definition"},"Event Definition"),Object(i.b)("p",null,"This is how an event definition looks:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"#[ink(event)]\npub struct Transferred {\n    #[ink(topic)]\n    from: Option<AccountId>,\n\n    #[ink(topic)]\n    to: Option<AccountId>,\n\n    amount: Balance\n\n}\n")),Object(i.b)("p",null,"Add the ",Object(i.b)("inlineCode",{parentName:"p"},"#[ink(topic)]")," attribute tag to each item in your event that you want to have indexed.\nA good rule of thumb is to ask yourself if somebody might want to search for this topic.\nFor this reason the ",Object(i.b)("inlineCode",{parentName:"p"},"amount")," in the exemplary event above was not\nmade indexable \u2012 there will most probably be a lot of different events with\ndiffering amounts each."),Object(i.b)("p",null,"The signature of the event is by default one of the topics of the event, except\nif you annotate the event with ",Object(i.b)("inlineCode",{parentName:"p"},"#[ink(anonymous)]"),".\nSee ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/ink-macros-attributes/anonymous"}),"here")," for details on this attribute."),Object(i.b)("h2",{id:"emitting-events-in-a-constructor"},"Emitting Events in a Constructor"),Object(i.b)("p",null,"In a constructor events are emitted via ",Object(i.b)("inlineCode",{parentName:"p"},"Self::env().emit_event()"),".\nSee this example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"#[ink(constructor)]\npub fn new(initial_value: Balance) -> Self {\n    let caller = Self::env().caller();\n    let mut balances = HashMap::new();\n    balances.insert(caller, initial_supply);\n\n    Self::env().emit_event(Transferred {\n        from: None,\n        to: Some(caller),\n        amount: initial_supply\n    });\n\n    Self { total_supply: initial_supply, balances }\n}\n")),Object(i.b)("h2",{id:"emitting-events-from-messages"},"Emitting Events from Messages"),Object(i.b)("p",null,"In a message events are emitted via ",Object(i.b)("inlineCode",{parentName:"p"},"self.env().emit_event()"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"#[ink(message)]\npub fn transfer(&mut self, to: AccountId, amount: Balance) -> Result {\n    let from = self.env().caller();\n    // implementation hidden\n    self.env().emit_event(Transferred {\n        from: Some(from),\n        to: Some(to),\n        amount\n    });\n    Ok(())\n}\n")))}u.isMDXComponent=!0}}]);