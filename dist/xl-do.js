// 数组去重
function removeRepeatArray(arr){  
 var res = []; 
 var json = {};
 for(var i = 0; i < arr.length; i++){
	  if(!json[arr[i]]){
		   res.push(arr[i]);
		   json[arr[i]] = 1;
	  }
 }
 return res;
}
//随机打乱数组
function upsetArr(arr){ 
	//random() 方法可返回介于 0 ~ 1 之间的一个随机数。 sort 对数组进行排序
	 return arr.sort(function(){ return Math.random() - 0.5});
}
 //获取数组的最大值  针对数组元素都为number
function maxArr(arr){ 
    var max =arr[0];  //初始值为数组第一个元素 
    for(var i =1;i<arr.length;i++){  //循环数组 依次进行元素大小对比 取最大值
    	if(arr[i]>max){
    		max = arr[i];
    	}
    }
    return max;
}
 //获取数组的最小值  针对数组元素都为number
function minArr(arr){ 
    var max =arr[0];
    for(var i =1;i<arr.length;i++){  //初始值为数组的第一个元素 循环数组进行大小比较 取最小值
    	if(arr[i] < max){
    		max = arr[i];
    	}
    }
    return max;
}
//获取数组元素的和 针对数组元素都为number
function sumArr(arr){
    var sum=0;   //初始值sum为0
    for(var i=0,len=arr.length;i<len;i++){ //循环数组 依次相加元素  取元素的和  
        sum+=arr[i];
    }
    return sum
}
//获取数组元素的平均值  针对数组元素都为number
function covArr(arr){
    var sum=sumArr(arr);   //求和  原理同上 
    var cov=sum/arr.length;  // 和/数组的length 长度 求平均值  
    return cov
}
//随机获取数组中一个元素
function randomArr(arr) {
    return arr[Math.floor(Math.random() * arr.length)];   // Math.random()产生0-1一个随机数 然后与个数相乘 然后Math.floor
    														// 四舍五入取整 得到索引 然后返回该索引的元素
}

//获取数组出现次数最多的某个元素
function getEleCount (obj, ele) { // obj为数组/对象  ele是该对象中求取次数的某个元素 
    var num = 0;                  //初始值为0
    for (var i = 0, len = obj.length; i < len; i++) { // 循环该对象/数组  如果循环中此元素与所求次数元素相同 那么给num+1
        if (ele == obj[i]) {
            num++;
        }
    }
    return num;  //返回num  次数
}
//获取数组中各个元素出现的次数  返回值为数组[{el:'元素',count:出现次数},{...},{...}]
// arr数组   rank 指定出现数组的个数 可以不传 默认全部  ranktype为升序排列 从少的次数到多的次数
function getCount(arr, rank,ranktype){ 
    var obj = {}, k, arr1 = []
    //记录每一元素出现的次数
    for (var i = 0, len = arr.length; i < len; i++) {
        k = arr[i];
        if (obj[k]) {
            obj[k]++;
        }
        else {
            obj[k] = 1;
        }
    }
    //保存结果{el:'元素'，count:出现次数}
    for (var o in obj) {
        arr1.push({el: o, count: obj[o]});
    }
    //排序（降序）
    arr1.sort(function (n1, n2) {
        return n2.count - n1.count
    });
    //如果ranktype为1，则为升序，反转数组
    if(ranktype===1){
        arr1=arr1.reverse();
    }
    var rank1 = rank || arr1.length;
    return arr1.slice(0,rank1);
}
//数组的截取,根据下标截取 返回一个新数组
//arr数组  n1 开始下标  n2 结束下标
function getArrayNum(arr,n1,n2){
    var arr1=[],len=n2||arr.length-1;   //设置初始值arr1为[]  len为结束下标 如果传值为所传的值 不传就是到数组结尾
    for(var i=n1;i<=len;i++){  //设置数组初始索引 以及结束索引 向arr1追加
        arr1.push(arr[i])
    }
    return arr1;  //返回arr1
}

//数组元素的删除 返回值为一个数组
// arr为数组 val为删除的元素  type为匹配模式为模糊还是完全匹配
function removeArrayForValue(arr,val,type){
    return arr.filter(function (item) {
        return type? item.indexOf(val) === -1 : item !== val
    })
}



//时间戳转换为年月日格式的时间   10位时间戳 转换到分钟
function getShortTime(nS) {     
   return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
}
//时间戳转换为年月日格式的时间   13位时间戳 转换到秒
function getLocalTime(nS){
    return new Date(parseInt(nS)).toLocaleString().substr(0, 19)
}

// 5-7Date日期时间部分///////////////////////////
//到某一个时间的倒计时
//getEndTime('2017/7/22 16:0:0')
//"剩余时间6天 2小时 28 分钟20 秒"
// 支持格式  2017/7/22 16:0:0   或者时间戳  1517465832000  不支持'2018年2月1日...'这种格式
function getEndTime(endTime){
    var startDate=new Date();  //开始时间，当前时间
    var endDate=new Date(endTime); //结束时间，需传入时间参数
    var t=endDate.getTime()-startDate.getTime();  //时间差的毫秒数
    var d=0,h=0,m=0,s=0;
    if(t>=0){
      d=Math.floor(t/1000/3600/24);
      h=Math.floor(t/1000/60/60%24);
      m=Math.floor(t/1000/60%60);
      s=Math.floor(t/1000%60);
    } 
    return "剩余时间"+d+"天 "+h+"小时 "+m+" 分钟"+s+" 秒";
}

//获取时间的年月日格式  
function getCurrentTime(time,type){ // 都可不传 time为时间 支持  '2017/7/22 16:0:0'   或者时间戳  1517465832000  不支持'2018年2月1日...'这种格式 
//type为转换结果类型
//1 :毫秒
//2 :秒
//3 :分
//4 :日 
    var date = time?  new Date(time) : new Date();
    var year = date.getFullYear(), //年
        month = date.getMonth() + 1,//月
        day = date.getDate(), //日
        week = date.getDay(),  //周几
        hour = date.getHours(), //小时
        Minutes = date.getMinutes(), //分钟
        seconds = date.getSeconds(),  //秒
        Milliseconds =date.getMilliseconds(); //毫秒 
        var time;
   switch(type){
        case 0:
              return time = year + '年' + month + '月' + day +'日' + hour + '小时' + Minutes + '分' + seconds +'秒' + Milliseconds + '毫秒';
              break;
        case 1:
              return time = year + '年' + month + '月' + day +'日' + hour + '小时' + Minutes + '分' + seconds +'秒';
              break;
        case 2:
              return time = year + '年' + month + '月' + day +'日' + hour + '小时' + Minutes + '分';
              break;
        case 3:
              return time = year + '年' + month + '月' + day +'日';    
              break;
        default:
              return dates.getYMD(arguments[0]) + arguments[1] + dates.getHMS(arguments[2]);
              break;    

   }

    // var time =   year + '年' + month + '月' + day +'日' + hour + '小时' + Minutes + '分' + seconds +'秒' + Milliseconds + '毫秒';
    // var time =   year + '年' + month + '月' + day +'日' + hour + '小时' + Minutes + '分' ;
        // day = date.getDay()

}

function longestWord(str, splitType) {
    var _splitType = splitType || /\s+/g,
        _max = 0, _item = '';
    var strArr = str.split(_splitType);
    strArr.forEach(function (item) {
        if (_max < item.length) {
            _max = item.length;
            _item = item;
        }
    });
    return {el: _item, max: _max};
}

// 去除字符串空格  四种情况
//去除空格  type 
//1 :所有空格 
//2 :前后空格  
//3 :前空格 
//4 :后空格
function trim(str,type){
    switch (type){
        case 1:return str.replace(/\s+/g,"");
        case 2:return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:return str.replace(/(^\s*)/g, "");
        case 4:return str.replace(/(\s*$)/g, "");
        default:return str;
    }
}
//字母大小写切换  
/*type类型包括:
1:首字母大写  
2：首页母小写  
3：大小写转换   
4：全部大写   
5：全部小写
 * */
//changeCase('asdasd',1)
//Asdasd
function changeCase(str,type)
{
    function ToggleCase(str) {
        var itemText = ""
        str.split("").forEach(
            function (item) {
                if (/^([a-z]+)/.test(item)) {
                    itemText += item.toUpperCase();
                }
                else if (/^([A-Z]+)/.test(item)) {
                    itemText += item.toLowerCase();
                }
                else{
                    itemText += item;
                }
            });
        return itemText;
    }

    switch (type) {
        case 1:
            return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
                return v1.toUpperCase() + v2.toLowerCase();
            });
        case 2:
            return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
                return v1.toLowerCase() + v2.toUpperCase();
            });
        case 3:
            return ToggleCase(str);
        case 4:
            return str.toUpperCase();
        case 5:
            return str.toLowerCase();
        default:
            return str;
    }
}


//字符串循环复制  
//repeatStr(str->字符串, count->次数)
//repeatStr('123',3)
//"123123123"
function repeatStr(str, count) {
    var text = '';
    for (var i = 0; i < count; i++) {
        text += str;
    }
    return text;
}

//查找字符串 字段所出现的次数 ~
function countStr(str,strSplit){
    return str.split(strSplit).length-1
}

//字符串替换(字符串,要替换的字符,替换成什么)
function replaceAll(str,AFindText,ARepText){
　　　raRegExp = new RegExp(AFindText,"g");
　　　return str.replace(raRegExp,ARepText);
}

//检测字符串   常用的正则匹配
//checkType('165226226326','phone')
//false
function checkType(str, type) {
    switch (type) {
        case 'email':
            return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
        case 'phone':
            return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
        case 'tel':
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
        case 'number':
            return /^[0-9]$/.test(str);
        case 'english':
            return /^[a-zA-Z]+$/.test(str);
        case 'chinese':
            return /^[\u4E00-\u9FA5]+$/.test(str);
        case 'lower':
            return /^[a-z]+$/.test(str);
        case 'upper':
            return /^[A-Z]+$/.test(str);
        default :
            return true;
    }
}


///随机生成一个规定长度的字符串
function random(length) {
    var str = Math.random().toString(36).substr(2);
    if (str.length >= length) {
        return str.substr(0, length);
    }
    str += random(length - str.length);
    return str;
}

//找出字符串中最长的那个单词
function longestWord(str, splitType) {
    var _splitType = splitType || /\s+/g,
        _max = 0, _item = '';
    var strArr = str.split(_splitType);
    strArr.forEach(function (item) {
        if (_max < item.length) {
            _max = item.length;
            _item = item;
        }
    });
    return {el: _item, max: _max};
}