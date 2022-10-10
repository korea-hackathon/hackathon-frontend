#include <stdio.h>
int main(){
    int result=0; int N; int min=101;
    for(int i=0;i<7;i++){
        scanf("%d",&N);
        if(N%2!=0) {result+=N; if(N<min) min = N;}
        
    }
    if(result!=0){printf("%d\n%d",result,min);}
    else printf("-1"); 
}