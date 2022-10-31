#include <stdio.h>
#include <string.h>
char arr[101];
int top=-1;
void push(char x){
    arr[++top]=x;
}
void pop(){
    arr[top--]=0;
}
void init(){
    while(top!=-1){
        pop();
    }
}
int main(){
    while(1){
        int bool = 1;
        init();
        char text[101];
        scanf("%[^\n]s",text);
        getchar();
        if(text[0]=='.') break;
            for(int i=0;i<strlen(text);i++){
                if(text[i]=='('|| text[i]=='[') push(text[i]);
                else if(text[i]==')'){
                    if(top==-1 || arr[top]!='('){
                        bool = 0;
                        break;
                    }
                        pop();
                }
                else if(text[i]==']'){
                    if(top==-1 || arr[top]!='['){
                        bool=0;
                        break;
                    }
                    pop();
                }
            }
        if(top!=-1) bool =0 ;
        if(bool==1){
            printf("yes\n");
        }
        else if(bool==0)printf("no\n");
    }
}