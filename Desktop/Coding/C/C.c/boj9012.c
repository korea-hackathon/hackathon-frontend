#include <stdio.h>
#include <string.h>
int main(){
    int t; scanf("%d",&t);
    char arr[51]; 
    int cnt=0;
    int i=0;
    for(int j=0;j<t;j++){
        cnt=0;
        i=0;
        scanf("%s",arr);
        while(i<strlen(arr)){
        if(arr[i]=='(') cnt++;
        else if(arr[i]==')') cnt--;
        if(cnt<0) {printf("NO\n"); break;}
        i++;
        }
    if(cnt==0) printf("YES\n");
    else if(cnt>0) printf("NO\n");
    }
    
}