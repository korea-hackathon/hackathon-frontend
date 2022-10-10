#include <stdio.h>
#include <string.h>
int main(){
    int arr[123]={0,};
    char text[101];
    scanf("%s",text);
    int len = strlen(text);
    for(int i=0;i<len;i++){
        arr[text[i]]++;
    }
    for(int i=97;i<=122;i++){
        printf("%d ",arr[i]);
    }
}