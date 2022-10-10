#include <stdio.h>
#include <string.h>
int main(){
    int t; scanf("%d",&t);
    getchar();
    for(int i=0;i<t;i++){
        char arr[31];
        scanf("%[^\n]s",arr); getchar();
        if(arr[0]>='a' && arr[0]<='z') arr[0]-=32;
        printf("%s\n",arr);
    }
    
}