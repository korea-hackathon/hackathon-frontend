#include <stdio.h>
#include <string.h>
int main(){
    int t;scanf("%d",&t);
    char arr[1001];
    for(int i=0;i<t;i++){
        scanf("%s",arr);
        int len  = strlen(arr);
        if(len==1) printf("%c%c\n",arr[0],arr[0]);
        else printf("%c%c\n",arr[0],arr[len-1]);
    }
}