#include <stdio.h>
int main(){
    int N; scanf("%d",&N);
    for(int i=N*2-1;i>1;i-=2){
        for(int j=0;j<((N*2-1)-i)/2;j++){
            printf(" ");
        }
        for(int k=0;k<i;k++){
            printf("*");
        }
        printf("\n");
    }
    for(int i=0;i<(N*2-2)/2;i++){
        printf(" ");
    }
    printf("*\n");
    for(int i=3;i<=N*2-1;i+=2){
        for(int j=0;j<((N*2-1)-i)/2;j++){
            printf(" ");
        }
        for(int k=0;k<i;k++){
            printf("*");
        }
        printf("\n");
    }
}