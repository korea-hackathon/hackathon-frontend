#include <stdio.h>
int main(){
    int N; scanf("%d",&N);
    for(int i=N;i>0;i--){
        for(int j=0;j<N-i;j++){
            printf(" ");
        }
        for(int k=0;k<i;k++){
            printf("*");
        }
        printf("\n");
    }
    
}