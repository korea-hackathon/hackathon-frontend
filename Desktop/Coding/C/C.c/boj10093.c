#include <stdio.h>
int main(){
    long long n,m; scanf("%lld %lld",&n,&m);
    if(m<n){
        long long temp = m;
        m =n;
        n=temp;
    }
    if(m==n || m-n==1) printf("0");
    else{
        printf("%lld\n",m-n-1);
        for(long long i=n+1;i<m;i++){
        printf("%lld",i); printf(" ");
    }}
}