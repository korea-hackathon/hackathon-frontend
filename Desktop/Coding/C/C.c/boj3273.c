#include <stdio.h>
int arr[2000001]={0,};
int n[1000001]={0,};
int main(){
    int t; scanf("%d",&t);
    int x;
    int cnt=0;

    for(int i=0;i<t;i++){
        scanf("%d",&n[i]);
    }
    scanf("%d",&x);
    for(int i=0;i<t;i++){
        if(x-n[i]>0 && arr[x-n[i]]==1) cnt++;
        arr[n[i]]=1;
    }
    printf("%d",cnt);
}