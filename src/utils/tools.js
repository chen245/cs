
export var formatNum=function (num){
    var fixNum={oldNum:'',newNum:'',unit:''};
    if (num){
        if (0<num && num<10**4) {
            fixNum.newNum=Math.floor(num).toString().replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
            fixNum.oldNum=num.toFixed(0).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
        }else if (num>=10**4){
            fixNum.newNum=Math.floor((num/(10**4))).toString().replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
            fixNum.oldNum=num.toFixed(0).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,'$&,');
            fixNum.unit='万';
        }
    }else {
        num='0';
        fixNum.newNum=num;
        fixNum.oldNum=num;
    }
    return fixNum;
}
