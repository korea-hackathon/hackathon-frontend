#include <stdio.h>
#include <string.h>
int main(){
    char arr[501];
    while(1){
        scanf("%[^\n]s",arr); getchar();
        if(arr[0]=='E' && arr[1]=='N' && arr[2]=='D') break;
        for(int i=strlen(arr)-1;i>=0;i--){
            printf("%c",arr[i]);
            if(i==0) printf("\n");
        }
    }
    
}