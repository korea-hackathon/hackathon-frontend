#include <stdio.h>
int main(){
    int N;scanf("%d",&N);
    N = N*2-1;
    for(int i=N;i>0;i-=2){
        for(int j=0;j<(N-i)/2;j++){
            printf(" ");
        }
        for(int k=0;k<i;k++){
            printf("*");
        }
        printf("\n");
    }
}