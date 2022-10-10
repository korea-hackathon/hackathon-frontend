#include <stdio.h>
int GCD(int a,int b){
    if(a<b) GCD(b,a);
    if(a%b==0) return b;
    return GCD(b,a%b);
}
int main(){
    int t;
    int t1;
    long long total;
    scanf("%d",&t);
    for(int i=0;i<t;i++){
        t1=0;
        total=0;
        int arr[100]={0,};
        scanf("%d",&t1);
        for(int j=0;j<t1;j++){
            scanf("%d",&arr[j]);
        }
        for(int k=0;k<t1;k++){
            for(int p=k+1;p<t1;p++){
                total+= GCD(arr[k],arr[p]);
            }
        }
        printf("%lld\n",total);
    }
    
}