var a=[10,28,47,16,48,27]
var i=0;
var j=a.length-1;
while(i<j){
    let t=a[i];
    a[i]=a[j];
    a[j]=t;
    i++;
    j--;
}
console.log(a);