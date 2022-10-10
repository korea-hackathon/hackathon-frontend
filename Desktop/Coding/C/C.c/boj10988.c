#include <stdio.h>
#include <stdlib.h>
#include <string.h>
char arr[101];
int main(){
    scanf("%s",arr);
    char newa[101]={0,};
    int len = strlen(arr);
    int cnt=0;
    for(int i=len-1;i>=0;i--){
        newa[cnt] = arr[i];
        cnt++;
    }
    if(strcmp(arr,newa)==0) printf("1");
    else printf("0");
}