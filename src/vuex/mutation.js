//同步改变store中的数据
//提交数据通常使用$store.commit;可以传入额外的参数,大多数情况下这个额外的参数使用一个对象
export default
{
    nav (state,n){//可传入额外的参数
      state.loading = n;
    },
    classify (state,classify){//大分类
      //console.log(classify);
      state.classifyId = classify;
    },
    subClassifyId (state,subClassifyId){//分类id
      state.subClassifyId = subClassifyId;
    },
    pageAll(state,pageAll){//总页数
      state.pageAll = pageAll;
    },
    pageNow(state,pageNow){//当前页
      state.pageNow = pageNow;
    },
    paping(state,isShow){
      state.paping = isShow;
    }
}

