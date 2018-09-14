//同步改变store中的数据
//提交数据通常使用$store.commit;可以传入额外的参数,大多数情况下这个额外的参数使用一个对象
const LOADING = 'LOADING';
const CLASSIFY = 'CLASSIFY';
const SUB_CLASSIFY = 'SUB_CLASSIFY';
export default
{
    nav (state,n){//可传入额外的参数
      state.loading = n;
    },
    [CLASSIFY](state,classify){
      state.classifyId = classify;
    }
}

