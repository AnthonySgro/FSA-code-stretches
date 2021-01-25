const foo = {
  bar: ()=>{
    console.log(foo.bazz);
  },
  bazz: 'quq' 
};

foo.bar();//quq