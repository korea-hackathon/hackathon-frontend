#include <stdio.h>
int arr[1000001]={0,};
int pos=0;
void push(int x){
    arr[pos++] =x;
}
void pop(){
    arr[--pos]=0;
}
int main(){
    int t; scanf("%d",&t);
    int ans=0;
    int n=t;
    while(t--){
        int a; scanf("%d",&a);
        if(a==0) pop();
        else push(a);
    }
    for(int i=0;i<n;i++){
        ans += arr[i];
    }
    printf("%d",ans);
}