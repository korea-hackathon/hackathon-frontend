#include <stdio.h>
int main(){
    int t; scanf("%d",&t);
    for(int i=0;i<t;i++){
        int n=0;
        int cnt=0;
        scanf("%d",&n);
        for(int j=1;j<=n;j++){
            for(int k=1;k<=n;k++){
                printf("j,k %d %d\n",j,k);
                if(j+k==n) cnt++;
            }
        }
        printf("%d\n",cnt);
    }
}