#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int main(){
    char n[5],m[5];
    scanf("%s %s",&n,&m);
    if(atoi(n)*atoi(n)<atoi(m)){
        for(int i=0;i<atoi(n);i++){
            printf("%s",n);
        }
    }
    else{
        char arr[1000000]={0,};
        while(strlen(arr)<atoi(m)+100){
            strcat(arr,n);

        }
        for(int j=0;j<atoi(m);j++){
            printf("%c",arr[j]);
        }
    }
}