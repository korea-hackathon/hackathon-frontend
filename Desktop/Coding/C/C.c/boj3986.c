#include <stdio.h>
#include <string.h>
char stack[100001];
int top=-1;
void push(char x){
    top++;
    stack[top]=x;
}
void pop(){
    stack[top]=0;
    top--;
}
void init(){
    while(top!=-1){
        pop();
    }
}
int main(){
    int t; scanf("%d",&t);
    int cnt=0;
    while(t--){
        init();
        int af=0,bf=0;
        int bool=1;
        char arr[100001];
        scanf("%s",arr);
        for(int i=0;i<strlen(arr);i++){
            if(top!=-1 && stack[top]==arr[i]) pop();
            else push(arr[i]);
        }
        if(top==-1) cnt++;
}
        printf("%d",cnt);
}