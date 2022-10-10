#include <stdio.h>
#include <string.h>
int main(){
    char arr[100001];
    int top=0;
    int flag=0;
    fgets(arr,100001,stdin);
    int len = strlen(arr);
    for(int i=0;i<len;i++){
        if(flag==0){
            if(arr[i]==' ' || arr[i]=='\n' || arr[i]=='<'){
            for(int j=i-1;j>=top;j--){
                printf("%c",arr[j]);
            }
            if(arr[i]==32){printf(" ");}
            top=i+1;
        }
        }
        if(arr[i]=='<'){flag=2;}
        if(flag==2){
            printf("%c",arr[i]);
        }
        if(flag==2 && arr[i]=='>') {flag=0; top=i+1;}
    }
    
}