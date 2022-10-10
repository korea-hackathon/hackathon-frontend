    #include <stdio.h>
    #include <string.h>
    int main(){
        char arr[101];
        int cnt=0;
        scanf("%s",arr);
        int len = strlen(arr);
        for(int i=0;i<len;i++){
            if(arr[i]==',') cnt++;
        }
        printf("%d",cnt+1);
    }