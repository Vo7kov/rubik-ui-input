import{j as i}from"./jsx-runtime-CkxqCPlQ.js";import{r as l}from"./index-DJO9vBfz.js";import{I as o}from"./InputText-CVXn3ndo.js";const x={title:"InputGroup/InputText",component:o,tags:["autodocs"]},e={args:{id:"id",value:"",onChange:()=>{}},render:u=>{const[p,c]=l.useState("");return i.jsx(o,{...u,value:p,onChange:d=>c(d.target.value)})}};var t,a,r,n,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    id: 'id',
    value: '',
    onChange: () => {}
  },
  render: args => {
    const [value, setValue] = useState('');
    return <InputText {...args} value={value} onChange={event => setValue(event.target.value)} />;
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source},description:{story:"The input field",...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.description}}};const f=["Base"];export{e as Base,f as __namedExportsOrder,x as default};
