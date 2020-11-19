(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{105:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),s=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,m=p["".concat(o,".").concat(f)]||p[f]||b[f]||i;return t?r.a.createElement(m,c(c({ref:n},l),{},{components:t})):r.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return s}));var a=t(2),r=t(6),i=(t(0),t(105)),o={title:"Reading Values from Storage",slug:"/basics/reading-values"},c={unversionedId:"basics/reading-values",id:"basics/reading-values",isDocsHomePage:!1,title:"Reading Values from Storage",description:"Reading from storage is where the fun begins!",source:"@site/docs/basics/reading-values.md",slug:"/basics/reading-values",permalink:"/ink-docs/basics/reading-values",editUrl:"https://github.com/ink-docs/edit/master/docs/basics/reading-values.md",version:"current",sidebar:"reference",previous:{title:"Storing Values",permalink:"/ink-docs/basics/storing-values"},next:{title:"Mutating Storage Values",permalink:"/ink-docs/basics/mutating-values"}},u=[{value:"Contract Functions",id:"contract-functions",children:[{value:"Public and Private Functions",id:"public-and-private-functions",children:[]}]},{value:"Storage Value API",id:"storage-value-api",children:[]},{value:"Getting a Value",id:"getting-a-value",children:[]}],l={rightToc:u};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Reading from storage is where the fun begins!"),Object(i.b)("h2",{id:"contract-functions"},"Contract Functions"),Object(i.b)("p",null,"As you can see in the contract template, all of your contract functions are part of your contract module."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"impl MyContract {\n    // Public and Private functions can go here\n}\n")),Object(i.b)("h3",{id:"public-and-private-functions"},"Public and Private Functions"),Object(i.b)("p",null,"In Rust, you can make as many implementations as you want. As a stylistic choice, we recommend breaking up your implementation definitions for your private and public functions:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"impl MyContract {\n    /// Public function\n    #[ink(message)]\n    pub fn my_public_function(&self) {\n        /* --snip-- */\n    }\n\n    /// Private function\n    fn my_private_function(&self) {\n        /* --snip-- */\n    }\n\n    /* --snip-- */\n}\n")),Object(i.b)("p",null,"You can also choose to split things up however is most clear for your project."),Object(i.b)("p",null,"Note that all public functions must use the ",Object(i.b)("inlineCode",{parentName:"p"},"#[ink(message)]")," attribute."),Object(i.b)("h2",{id:"storage-value-api"},"Storage Value API"),Object(i.b)("p",null,"Without going into so much detail, storage values are a part of the underlying ink! core layer. In the background, they use a more primitive ",Object(i.b)("inlineCode",{parentName:"p"},"cell")," type which holds an ",Object(i.b)("inlineCode",{parentName:"p"},"Option<T>"),". When we try to get the value from storage, we ",Object(i.b)("inlineCode",{parentName:"p"},"unwrap")," the value, which is why it panics if it is not initialized!"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"impl<T> Value<T>\nwhere\n    T: scale::Codec,\n{\n    /// Returns an immutable reference to the wrapped value.\n    pub fn get(&self) -> &T {\n        self.cell.get().unwrap()\n    }\n\n    /// Returns a mutable reference to the wrapped value.\n    pub fn get_mut(&mut self) -> &mut T {\n        self.cell.get_mut().unwrap()\n    }\n\n    /// Sets the wrapped value to the given value.\n    pub fn set(&mut self, val: T) {\n        self.cell.set(val);\n    }\n}\n")),Object(i.b)("p",null,"In that same file, you can find the other APIs exposed by storage values, however these three are the most commonly used."),Object(i.b)("h2",{id:"getting-a-value"},"Getting a Value"),Object(i.b)("p",null,"We already showed you how to initialize a storage value. Getting the value is just as simple:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"impl MyContract {\n    #[ink(message)]\n    pub fn my_getter(&self) -> u32 {\n        self.number\n    }\n}\n")),Object(i.b)("p",null,"In Rust, if the last expression in a function does not have a semicolon, then it will be the return value."))}s.isMDXComponent=!0}}]);