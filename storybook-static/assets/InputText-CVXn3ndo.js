import{j as e}from"./jsx-runtime-CkxqCPlQ.js";const q=({id:c,value:g,onChange:f,size:r,placeholder:T,quiet:w,disabled:t,error:n,iconBefore:p,iconBeforeError:s,iconBeforeDisabled:l,iconBeforeAlt:u,iconAfterFirst:d,iconAfterFirstError:m,iconAfterFirstDisabled:o,iconAfterFirstAlt:_,iconAfterSecond:a,iconAfterSecondAlt:i})=>e.jsxs("div",{className:"input__wrapper",children:[p&&s&&l&&u&&e.jsx("img",{src:n?s:t?l:p,alt:u,className:"icon input__wrapper-icon-before"}),e.jsx("input",{id:c,value:g,onChange:f,type:"text",disabled:t,placeholder:T,className:`
          input__wrapper-field
          ${r==="Extra large"?"input__wrapper-field--extra-large":""}
          ${r==="Large"?"input__wrapper-field--large":""}
          ${r==="Medium"?"input__wrapper-field--medium":""}
          ${r==="Extra small"?"input__wrapper-field--extra-small":""}

          ${p&&s&&l&&u?"input__wrapper-field--with-icon-before":""}
          ${d&&m&&o&&_?"input__wrapper-field--with-icon-after-first":""}
          ${a&&i?"input__wrapper-field--with-icon-after-second":""}

          ${w?"input__wrapper-field--quiet":""}
          ${n?"input__wrapper-field--error":""}
        `}),d&&m&&o&&_&&e.jsx("img",{src:n?m:t?o:d,alt:_,className:`
            icon
            input__wrapper-icon-after-first
            ${!a&&!i?"input__wrapper-icon-after-first--without-second-icon":""}
          `}),a&&i&&e.jsx("img",{src:a,alt:i,className:"icon input__wrapper-icon-after-second"})]});q.__docgenInfo={description:"",methods:[],displayName:"InputText",props:{id:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'Extra small' | 'Medium' | 'Large' | 'Extra large'",elements:[{name:"literal",value:"'Extra small'"},{name:"literal",value:"'Medium'"},{name:"literal",value:"'Large'"},{name:"literal",value:"'Extra large'"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},quiet:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},iconBefore:{required:!1,tsType:{name:"string"},description:""},iconBeforeError:{required:!1,tsType:{name:"string"},description:""},iconBeforeDisabled:{required:!1,tsType:{name:"string"},description:""},iconBeforeAlt:{required:!1,tsType:{name:"string"},description:""},iconAfterFirst:{required:!1,tsType:{name:"string"},description:""},iconAfterFirstError:{required:!1,tsType:{name:"string"},description:""},iconAfterFirstDisabled:{required:!1,tsType:{name:"string"},description:""},iconAfterFirstAlt:{required:!1,tsType:{name:"string"},description:""},iconAfterSecond:{required:!1,tsType:{name:"string"},description:""},iconAfterSecondAlt:{required:!1,tsType:{name:"string"},description:""}}};export{q as I};
