#include <stdio.h>
int main(){
    int N; scanf("%d",&N);
    for(int i=2;i<=N*2-2;i+=2){
        for(int j=0;j<i/2;j++){
            printf("*");
        }
        for(int k=0;k<(N*2)-i;k++){
            printf(" ");
        }
        for(int j=0;j<i/2;j++){
            printf("*");
        }
        printf("\n");
    }
    for(int i=0;i<N*2;i++){
        printf("*");
    }
    printf("\n");
    for(int i=N*2-2;i>=2;i-=2){
        for(int j=0;j<i/2;j++){
            printf("*");
        }
        for(int k=0;k<(N*2)-i;k++){
            printf(" ");
        }
        for(int j=0;j<i/2;j++){
            printf("*");
        }
        printf("\n");
    }
}