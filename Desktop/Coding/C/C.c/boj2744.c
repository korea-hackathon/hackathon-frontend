#include <stdio.h>
#include <string.h>
int main(){
    char arr[101];
    scanf("%s",arr);
    for(int i=0;i<strlen(arr);i++){
        if(arr[i]<=90) arr[i]+=32;
        else arr[i]-=32;
    }
    printf("%s",arr);
}