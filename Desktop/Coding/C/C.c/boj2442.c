#include <stdio.h>
int main(){
    int N; scanf("%d",&N);
    int a=1;
    for(int i=0;i<N;i++){
        for(int j=0;j<((2*N)-a)/2;j++){
            printf(" ");
        }
        for(int k=0;k<a;k++){
            printf("*");
        }
        printf("\n");
        a+=2;
    }
}