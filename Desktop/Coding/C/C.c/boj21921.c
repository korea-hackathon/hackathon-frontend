#include <stdio.h>
#include <stdlib.h>
int main(){
    int n,x; scanf("%d %d",&n,&x);
    long long max=-1;
    int cnt=0;
    int num;
    long long* arr = (long long *)malloc(sizeof(long long)*n);
    for(int i=0;i<n;i++){
        scanf("%d",&num);
        if(i==0){
            arr[i] = num;
            continue;
        }
        arr[i] = arr[i-1]+num;
    }
    max = arr[x-1];
    cnt=1;
    for(int i=x;i<n;i++){
        if(max<arr[i]-arr[i-x]){
            max = arr[i]-arr[i-x];
            cnt=1;
        }
        else if(max == arr[i]-arr[i-x]){
            cnt++;
        }
    }
    if(max==0) printf("SAD");
    else printf("%lld\n%d",max,cnt);
}