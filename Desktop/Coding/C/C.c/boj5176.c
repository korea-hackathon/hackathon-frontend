#include <stdio.h>
#include <stdlib.h>
int main(){
    int t; scanf("%d",&t);
    for(int i=0;i<t;i++){
        int cnt=0;
        int N;
        int n,m;scanf("%d %d",&n,&m);
        int* arr = (int *)malloc(sizeof(int)*m);
        for(int k=0;k<m;k++){
            arr[k]=0;
        }
        for(int j=0;j<n;j++){
            scanf("%d",&N);
            if(arr[N]==0) arr[N]=1;
            else if(arr[N]==1) cnt++;
        }
        printf("%d\n",cnt);
    }
}
