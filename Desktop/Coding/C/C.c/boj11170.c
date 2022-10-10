#include <stdio.h>
int check(int a,int b){
    int cnt=0;
    for(int i=a;i<=b;i++){
        if(i==0) cnt++;
        int i2=i;
        while(i2>0){
            if(i2%10==0) cnt++;
            i2/=10;
        }
    }
    return cnt;
}
int main(){
    int n,m;
    int t; scanf("%d",&t);
    for(int i=0;i<t;i++){
        scanf("%d %d",&n,&m);
        printf("%d\n",check(n,m));
    }
}