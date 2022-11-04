#include <stdio.h>
#include <string.h>
char stack[100001];
int top=-1;
void push(char x){
    stack[++top]=x;
}
void pop_print(){
    printf("%c",stack[top]);
    top--;
}
void print(){
    while(top!=-1){
        printf("%c",stack[top]);
        top--;
    }
}
int main(){
    char arr[100001];
    int bool=0;
    scanf("%[^\n]s",arr);
    for(int i=0;arr[i];i++){
        if(arr[i]=='<'){ // 열렸을때
            while(arr[i]!='>'){
                print();
                while(1){
                    printf("%c",arr[i]);
                    if(arr[i]=='>') break;
                    i++;
                }
            }
        }
        else if(arr[i]==' '){
            print();
            printf(" ");
        }
        else{
            push(arr[i]);
        }
    }
    print();
}