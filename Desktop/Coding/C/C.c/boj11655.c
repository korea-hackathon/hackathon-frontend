#include <stdio.h>
#include <string.h>
int main(){
    char text[101]={0,};
    scanf("%[^\n]s",text);
    int len = strlen(text);
    for(int i=0;i<len;i++){
        if(text[i]>='a' && text[i]<='z'){
            text[i]+=13;
            if(text[i]>'z' || text[i]<'a') text[i]-=26;
        }
        else if(text[i]>='A' && text[i]<='Z'){
            text[i]+=13;
            if(text[i]>'Z') text[i]-=26;
        }
    }
    printf("%s",text);
}