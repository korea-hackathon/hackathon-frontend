#include <stdio.h>
#include <string.h>
int count=0;
int number[100001];
void push(int num){
    number[count]=num;
    count++;    
}
void pop(){
    if(count!=0){
    count--;
    printf("%d\n",number[count]);
    number[count]=0;
    }
    else printf("%d\n",-1);
}
void size(){
    printf("%d\n",count);
}
void empty(){
    if(count!=0){
        printf("0\n");
    } 
    else printf("1\n");
}
void top(){
    if(count!=0)printf("%d\n",number[count-1]);
    else printf("%d\n",-1);
}
int main(){
    char text[10];
    int t;
    int number[100];
    scanf("%d",&t);
    for(int i=0;i<t;i++){
        scanf("%s",text);
        if(strcmp(text,"push")==0){
            int value;
            scanf("%d",&value);
            push(value);
        }
        else if(strcmp(text, "pop")==0) pop();
        else if(strcmp(text, "size")==0) size();
        else if(strcmp(text, "empty")==0) empty();
        else if(strcmp(text, "top")==0) top();
    }
}