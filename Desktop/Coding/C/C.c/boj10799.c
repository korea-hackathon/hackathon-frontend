#include <stdio.h>
#include <string.h>
char stack[100001];
int top=-1;
void push(char x){
    stack[++top] = x;
}
void pop(){
    stack[top--]=0;
}
int size(){
    return top+1;
}
int main(){
    char arr[100001];
    int ans =0;
    scanf("%s",arr);
    for(int i=0;i<strlen(arr);i++){
        if(arr[i]=='('){
            push(arr[i]);
        }
        else{
            if(arr[i-1]=='('){ //레이저임
                pop();
                ans+=size();
            }
            else{
                ans+=1;
                pop();
            }
        }
    }
    printf("%d",ans);
}