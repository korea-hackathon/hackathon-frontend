#include <stdio.h>
int mf(int N){
        return 15 *(N/60+1);
}
int yf(int N){
        return 10 *(N/30+1);
}
int main(){
    int t; scanf("%d",&t);
    int N;
    int m=0,y=0;
    for(int i=0;i<t;i++){
        scanf("%d",&N);
        m += mf(N);
        y += yf(N);
    }
    if(m<y) printf("M %d",m);
    else if(y<m)printf("Y %d",y);
    else printf("Y M %d",y);
}