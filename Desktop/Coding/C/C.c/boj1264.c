#include <stdio.h>
int arr[600001];
int tail=0,head=0;
void pop(){
    arr[head++]=0;
}
void push(int x){
    arr[tail++] = x;
}
void swap(){
    push(arr[head]);
    pop();
}
void fun(){
    while(tail-head>1){
            pop();
        if(tail-head>1){
            swap();
        }
    }
    printf("%d",arr[head]);
}


int main(){
    int t; scanf("%d",&t);
    for(int i=1;i<=t;i++){
        push(i);
    }
    fun();
}