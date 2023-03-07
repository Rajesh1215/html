function reverse(s){
    a=s.split("");
    for(i=0,k=a.length-1;i<k;i++,k--){
        let x=a[i];
        a[i]=a[k];
        a[k]=x;
    }
}
str1=="abcde"
ifreverse(str1);