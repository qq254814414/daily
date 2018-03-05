//初始化配置  
require.config({  
    baseUrl:'./js',  
    paths:{  
         
    }  
});  
//动态异步加载js  
require(['test'],function(test){  
    test.roll();  
});  