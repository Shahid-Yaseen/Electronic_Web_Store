const plugin=require('tailwindcss/plugin');
const openVarient=plugin(function({addVariant}){
  addVariant('group-open',':merge(.group).open &')
  addVariant('peer-open',':merge(.peer).open ~ &')
})

module.exports=openVarient;