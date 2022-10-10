#include <stdio.h>
#include <string.h>
int main(){
    char arr[101];
    scanf("%s",arr);
    int len = strlen(arr);
    for(int i=0;i<len;i++){
        printf("%c",arr[i]);
        if((i+1)%10==0) {printf("\n");}
    }
}